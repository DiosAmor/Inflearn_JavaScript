const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-date");
const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`; // 백틱과 달러표시 활용
  return dateFormat;
};

const counterMaker = function (data) {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000; //ms
  // 만약, remaining이 0이라면, 타이머가 종료 되었습니다. 출력
  if (remaining <= 0) {
    console.log("타이머가 종료되었습니다.");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.<h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // 만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    console.log("유효한 시간대가 아닙니다.");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.<h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentArr = ["day", "hour", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else return time;
  };

  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }

  // const documentObj = {
  //   day: document.querySelector("#day"),
  //   hour: document.querySelector("#hour"),
  //   min: document.querySelector("#min"),
  //   sec: document.querySelector("#sec"),
  // };

  // const docKeys = Object.keys(documentObj);

  // for (let i = 0; i < timeKeys.length; i++) {
  //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
  // }
  // let i = 0;
  // for (let key in documentObj) {
  //   documentObj[key].textContent = remainingObj[timeKeys[i]];
  //   i++;
  // }
};

const starter = function (targetDateInput) {
  container.style.display = "flex";
  messageContainer.style.display = "none";

  setClearInterval();
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }
  counterMaker(targetDateInput);
  const intervalId = setInterval(() => counterMaker(targetDateInput), 1000);
  intervalIdArr.push(intervalId);
  // for (let i = 0; i < 100; i++) {
  //   setTimeout(() => {
  //     counterMaker();
  //   }, 1000 * i);
  // }
};

const setClearInterval = function () {
  localStorage.removeItem("saved-date");
  for (let i of intervalIdArr) {
    clearInterval(i);
  }
};

const resetTimer = function () {
  container.style.display = "none";
  messageContainer.style.display = "flex";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.<h3>";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
} else {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.<h3>";
  console.log("data is null");
}
