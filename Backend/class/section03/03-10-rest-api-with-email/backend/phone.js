import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;

export function checkPhone(phoneNumber) {
  if (phoneNumber.length > 11 || phoneNumber.length < 10) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요~!");
    return false;
  }
  return true;
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
}

export function sendTokenToSMS(phoneNumber, result) {
  const messageService = new mysms("API-KEY", "API-SECRET");
  messageService.sendOne({
    to: phoneNumber,
    from: "0101234567",
    text: `[Lee] 안녕하세요? 요청하신 인증번호는 ${result} 입니다.`,
  });
  // console.log(phoneNumber + "번호로 인증번호 " + result + "를 전송합니다.");
}
