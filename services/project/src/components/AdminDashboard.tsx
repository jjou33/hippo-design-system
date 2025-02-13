"use client";
import Button from "@/components/Button";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface AdminDashboardProps {
  user: User;
}

const supabase = createClient();

const AdminDashboard: FC<AdminDashboardProps> = ({ user }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div className="mb-8">
        <b>{user.email}</b>
      </div>
      <Button
        type="button"
        className="mt-4"
        onClick={() => router.push("/write")}
      >
        글쓰러 가기
      </Button>
      <Button
        type="button"
        className="mt-4"
        onClick={() => {
          supabase.auth.signOut();
          router.push("/");
        }}
      >
        로그아웃
      </Button>
    </div>
  );
};

export default AdminDashboard;
