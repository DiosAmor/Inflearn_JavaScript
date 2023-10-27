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
import mongoose from "mongoose";
import { Board } from "./models/board-model.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get("/boards", async function (req, res) {
  const result = await Board.find();

  res.send(result);
});

app.post("/boards", async function (req, res) {
  console.log(req);
  console.log("===============");
  console.log(req.body);

  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contetns,
  });
  await board.save();

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

//mongoose.set("debug", true);

// 도커컴포즈로 열었을 때, nameresolution
mongoose
  .connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."));

app.listen(4000);
