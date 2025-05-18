import type { Request, Response } from "express";
import { encodeBase62 } from "../../utils/base62";
import prisma from "../db/prisma";

export const shortenUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { longUrl } = req.body;

    if (!longUrl || typeof longUrl !== "string") {
      res.status(400).json({ error: "Invalid longUrl" });
      return;
    }

    const [partition] = await prisma.$queryRaw<
      {
        id: number;
        range_start: number;
        range_end: number;
        current_value: number;
      }[]
    >`
      SELECT * FROM "UrlTicket"
      WHERE "current_value" < "range_end"
      ORDER BY RANDOM()
      LIMIT 1
    `;

    if (!partition) {
      res.status(500).json({ error: "No available keys" });
      return;
    }

    const updated = await prisma.urlTicket.update({
      where: { id: partition.id },
      data: { current_value: { increment: 1 } },
    });

    const ticketNumber = updated.current_value - 1;

    const shortCode = encodeBase62(ticketNumber);

    await prisma.url.create({
      data: {
        short_url: shortCode,
        long_url: longUrl,
      },
    });

    const baseUrl = process.env.BASE_URL || "https://sho.rt";
    res.status(200).json({ shortUrl: `${baseUrl}/${shortCode}` });
  } catch (err) {
    console.error("Error shortening URL:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const redirectUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { shortCode } = req.params;
  try {
    const urlEntry = await prisma.url.findUnique({
      where: { short_url: shortCode },
    });

    if (!urlEntry) {
      res.status(404).send("Short URL not found");
      return;
    }
    res.redirect(302, urlEntry.long_url);
  } catch (err) {
    console.error("Error during redirect:", err);
    res.status(500).send("Internal Server Error");
  }
};
