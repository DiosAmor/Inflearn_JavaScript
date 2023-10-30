import axios from "axios";
import cheerio from "cheerio";

const createMessage = async () => {
  // 입력된 메시지: "안녕하세요~ https://www.naver.com 에 방문해주세요!"

  // 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기!(.find() 등의 알고리즘 사용하기)
  const url = "http://www.naver.com";

  // 2. axios.get으로 요청해서 html코그 받아오기 => 스크래핑
  const result = await axios.get(url);
  console.log(result.data);

  // 3. 스크래핑 결과에서 OG(오픈그래프) 코드를 골라내서 변수에 담기 => cheerio
  const qqq = cheerio.load(result.data);
  qqq("meta").each((index, el) => {
    if (qqq(el).attr("property") && qqq(el).attr("property").includes("og:")) {
      const key = qqq(el).attr("property"); // og:title, og:description, ...
      const value = qqq(el).attr("content"); // 네이버, 네이버 메인에서~
      console.log(key, value);
    }
  });
};

createMessage();
