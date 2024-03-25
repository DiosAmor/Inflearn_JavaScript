// Enum type
// JS에는 없고 TS에만 존재.

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "a",
  role: Role.ADMIN,
};

const user2 = {
  name: "b",
  role: Role.USER,
};

const user3 = {
  name: "c",
  role: Role.GUEST,
};
