function checkEmail(email) {
  if (email === undefined || !email.includes("@")) {
    console.log("에러 발생!!! 유효한 이메일을 입력해 주세요~!");
    return false;
  }
  return true;
}

function getWelcomeTemplate({ name, age, school, createAt }) {
  const myTemplate = `
          <html>
              <body>
                  <h1>${name}님 가입을 환영합니다!!!</h1>
                  <hr />
                  <div>이름: ${name}</div>
                  <div>나이: ${age}</div>
                  <div>학교: ${school}</div>
                  <div>가입일: ${createAt}</div>
              </body>
          </html>
      `;

  return myTemplate;
}

function sendTemplateToEmail(myemail, result) {
  console.log(
    myemail + " 이메일로 가입환영템플릿 " + result + "를 전송합니다."
  );
}

function createUser({ name, age, school, email, createAt }) {
  if (checkEmail(email)) {
    const myTemplate = getWelcomeTemplate({
      name,
      age,
      school,
      createAt,
    });
    sendTemplateToEmail(email, myTemplate);
  }
}

const name = "철수",
  age = 12,
  school = "다람쥐초등학교",
  email = "a@a.com",
  createAt = new Date();

createUser({ name, age, school, email, createAt });
