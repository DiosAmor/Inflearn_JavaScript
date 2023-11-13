const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));
const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

const createTodo = function (storageData) {
  let todoContents = todoInput.value;
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  if (storageData) {
    todoContents = storageData.contents;
  }

  // ? 객체가 존재하는지 확인하는 것
  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i of liList) {
    i.remove();
  }
  saveItemsFn();
};

const saveItemsFn = function () {
  const saveItems = [];
  for (let i of todoList.children) {
    const todoObj = {
      contents: i.querySelector("span").textContent,
      complete: i.classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }
  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
};

if (savedTodoList) {
  for (let i of savedTodoList) {
    createTodo(i);
  }
}

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Fog",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  const locationNameTag = document.querySelector("#location-name-tag");
  locationNameTag.textContent = location;
  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

const weatherSearch = function ({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json.name, json.weather[0].main);
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.log(err);
    });
};

const accessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords;
  // shorthand property
  const positionObj = {
    latitude,
    longitude,
  };
  weatherSearch(positionObj);
};

const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};
askForLocation();
if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}

// promise: fulfilled, pending, and rejected
// const promiseTest = function () {
//   return new Promise((resolver, reject) => {
//     setTimeout(() => {
//       resolver(100);
//     }, 2000);
//   });
// };

// promiseTest().then((res) => {
//   console.log(res);
// });

// spread 연산자를 이용한 얕은 복사
// const copyObj = {...Obj}

// josn stringify를 이용한 깊은 복사
// const copyObj = JSON.parse(JSON.stringify(Obj))
