-- CreateTable
CREATE TABLE "UrlTicket" (
    "id" SERIAL NOT NULL,
    "range_start" INTEGER NOT NULL,
    "range_end" INTEGER NOT NULL,
    "current_value" INTEGER NOT NULL,

    CONSTRAINT "UrlTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "short_url" TEXT NOT NULL,
    "long_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_short_url_key" ON "Url"("short_url");
