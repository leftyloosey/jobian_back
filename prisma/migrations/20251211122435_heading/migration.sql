/*
  Warnings:

  - Added the required column `heading` to the `Ministry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ministry" ADD COLUMN     "heading" TEXT NOT NULL;
