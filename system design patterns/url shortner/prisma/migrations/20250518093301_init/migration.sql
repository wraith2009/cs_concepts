-- CreateTable
CREATE TABLE "UrlTicket" (
    "id" SERIAL NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,
    "current" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "short_url" TEXT NOT NULL,
    "long_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "UrlTicket_id_key" ON "UrlTicket"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Url_short_url_key" ON "Url"("short_url");
