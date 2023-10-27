import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
input CreateBoardInput{
  writer: String,
  title: String,
  contents: String
}
type MyResult{
  number: Int,
  writer: String,
  title: String,
  contents: String,
}
type Query{
    fetchBoards: [MyResult]
}
type Mutation{
  # createBoard(writer: String, title: String, contents: String): String
  createBoard(createBoardInput: CreateBoardInput!): String
}
`;

const resolvers = {
  Query: {
    fetchBoards: (parent, args, context, info) => {
      const result = [
        { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용" },
        { number: 2, writer: "영희", title: "제목입니다~~", contents: "내용" },
        { number: 3, writer: "훈", title: "제목입니다~~", contents: "내용" },
      ];

      return result;
    },
  },

  Mutation: {
    createBoard: (_, args, context, info) => {
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);

      return "게시물 등록에 성공했습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // 모든 사이트 허용하고 싶을 때
  // cors: {origin: ["http://naver.com","https://daum.net"]} // 특정 사이트만 지정하고 싶을 때
});

startStandaloneServer(server); // port: 4000
