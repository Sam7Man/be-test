/*
  Warnings:

  - You are about to drop the column `workspaceId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_workspaceId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "workspaceId";
