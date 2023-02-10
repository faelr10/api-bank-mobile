-- DropForeignKey
ALTER TABLE "account" DROP CONSTRAINT "account_profile_id_fkey";

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
