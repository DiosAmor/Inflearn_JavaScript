/* eslint-disable import/no-anonymous-default-export */
"use server";

import { redirect } from "next/navigation";
// import {signIn} from "@/auth";

export default async (prevState: any, formData: FormData) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  let redirectFlag = false;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );
    console.log(response.status);
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    console.log(await response.json());
    redirectFlag = true;
    // await signIn("credentials", {
    //   username: formData.get("id"),
    //   password: formData.get("password"),
    //   redirect: false,
    // });
  } catch (err) {
    console.error(err);
    return;
  }

  if (redirectFlag) {
    redirect("/home"); // try-catch문에 사용하면 안 됨.
  }
  return { message: null };
};
