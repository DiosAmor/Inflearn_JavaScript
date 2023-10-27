import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";

function createUser({ name, age, school, email }) {
  if (checkEmail(email)) {
    const myTemplate = getWelcomeTemplate({
      name,
      age,
      school,
    });
    sendTemplateToEmail(email, myTemplate);
  }
}

const name = "철수",
  age = 12,
  school = "다람쥐초등학교",
  email = "a@a.com";

createUser({ name, age, school, email });
