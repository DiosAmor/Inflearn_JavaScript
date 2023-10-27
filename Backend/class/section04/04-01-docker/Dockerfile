# 1. 운영체제 및 프로그램 설치 (하나 하나 입력하는 방식)
# FROM unbuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 위의 것을 한 번에 다운로드 하는 방식
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. 도커 안에서 index.js 실행시키기
CMD node index.js
# CMD는 이미지에 결과가 저장되지 않고, 설치 이후에 실행된다. dockerfile안에서 한 번 밖에 못 씀.
# RUN은 이미지에 결과가 저장됨.

