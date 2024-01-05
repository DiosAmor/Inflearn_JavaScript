"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }

  router.replace("/i/flow/login");
  return <Main />;
}

// router.push
// localhost:3000/login -> localhost:3000/i/flow/login
// 뒤로가기하면 원래 login으로 감 (그러면 무한 반복에 갇힘.)

// router.replace
// localhost:3000/login -> localhost:3000/i/flow/login
// 뒤로가기하면 login보다도 뒤로 감 (replace 된 것이므로)
