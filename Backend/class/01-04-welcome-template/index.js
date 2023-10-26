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

  console.log(myTemplate);
}

const name = "철수",
  age = 12,
  school = "다람쥐초등학교",
  createAt = "2020-10-10";

getWelcomeTemplate({ name, age, school, createAt });
