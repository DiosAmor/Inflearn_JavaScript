import { getToday } from "./utils.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export function checkEmail(email) {
  if (email === undefined || !email.includes("@")) {
    console.log("에러 발생!!! 유효한 이메일을 입력해 주세요~!");
    return false;
  }
  return true;
}

export function getWelcomeTemplate({ name, age, school }) {
  const myTemplate = `
            <html>
                <body>
                    <h1>${name}님 가입을 환영합니다!!!</h1>
                    <hr />
                    <div>이름: ${name}</div>
                    <div>나이: ${age}</div>
                    <div>학교: ${school}</div>
                    <div>가입일: ${getToday()}</div>
                </body>
            </html>
        `;

  return myTemplate;
}

export async function sendTemplateToEmail(myemail, result) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.myEmail,
      pass: process.env.myPass,
    },
  });

  const res = await transporter.sendMail({
    from: process.env.myEmail,
    to: myemail,
    subject: "[Lee] 가입을 축하합니다.",
    html: result,
  });
  console.log(res);
  // console.log(
  //   myemail + " 이메일로 가입환영템플릿 " + result + "를 전송합니다."
  // );
}
