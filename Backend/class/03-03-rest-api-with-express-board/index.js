// const express = require('express')   // 옛날 방식 => commonjs
import express from "express"; // 요즘 방식 => module
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";

const app = express();
app.use(express.json());
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
    res.send("토큰 발행에 성공했습니다.");
  } else {
    res.send("토큰 발행에 실패했습니다.");
  }
});

app.listen(3000);
