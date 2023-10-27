// const express = require('express')   // 옛날 방식 => commonjs
import express from "express"; // 요즘 방식 => module
import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get("/boards", function (req, res) {
  const result = [
    { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용" },
    { number: 2, writer: "영희", title: "제목입니다~~", contents: "내용" },
    { number: 3, writer: "훈", title: "제목입니다~~", contents: "내용" },
  ];

  res.send(result);
});

app.post("/boards", function (req, res) {
  console.log(req);
  console.log("===============");
  console.log(req.body);

  res.send("게시물 둥록에 성공하였습니다.");
});

app.post("/tokens/phone", function (req, res) {
  const phoneNumber = req.body.phoneNumber;
  console.log(phoneNumber);

  if (checkPhone(phoneNumber)) {
    const mytoken = getToken();
    sendTokenToSMS(phoneNumber, mytoken);
    res.send("인증 완료!!");
  } else {
    res.send("토큰 발행에 실패했습니다.");
  }
});

app.post("/users", function (req, res) {
  const { name, age, school, email } = req.body;
  if (checkEmail(email)) {
    const myTemplate = getWelcomeTemplate({
      name,
      age,
      school,
    });
    sendTemplateToEmail(email, myTemplate);

    res.send("가입완료!!!");
  }
});

app.listen(3000);
