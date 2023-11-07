const fetchData = async () => {
  // API 보내기 요청!!

  await new Promise(() => {
    setTimeout(() => {
      try {
        console.log("이미지 받아왔다~");
      } catch (err) {}
    }, 5000);
  }).then();

  console.log("받아온 사진 브라우저 전달!");
};

fetchData();
