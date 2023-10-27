import axios from "axios";

// 1. 비동기 방식
const fetchAsync = () => {
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log("비동기방식: ", result); // Promise {<pending>}
};

fetchAsync();

// 2. 동기 방식
const fetchSync = async () => {
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log("동기방식: ", result); // {title: "...", }
};

fetchSync();
