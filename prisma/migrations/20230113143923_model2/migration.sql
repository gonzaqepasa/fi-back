/*
  Warnings:

  - You are about to drop the column `userId` on the `Calendar` table. All the data in the column will be lost.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestTwo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthNum` to the `Month` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Month" ADD COLUMN     "monthNum" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "TestTwo";
