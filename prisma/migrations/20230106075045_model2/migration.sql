/*
  Warnings:

  - You are about to drop the column `userId` on the `Calendar` table. All the data in the column will be lost.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestTwo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[calendarId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calendarId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Calendar" DROP CONSTRAINT "Calendar_userId_fkey";

-- DropIndex
DROP INDEX "Calendar_userId_key";

-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "calendarId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "TestTwo";

-- CreateIndex
CREATE UNIQUE INDEX "User_calendarId_key" ON "User"("calendarId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
