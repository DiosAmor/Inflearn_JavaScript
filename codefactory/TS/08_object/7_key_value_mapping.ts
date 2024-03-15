/**
 * Key Value Mapping
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
};

type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginateUsers: GlobalApiStatus["paginateUsers"];
  banUser: GlobalApiStatus["banUser"];
};

type UserApiStatus3 = {
  [k in "getUser" | "paginateUsers" | "banUser"]: GlobalApiStatus[k];
  // getUser:
  // paginateUsers:
  // banUser:
};

// Pick!!
type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "banUser" | "paginateUsers"
>;

// Omit!! 필요 없는 것만 빼고!
type OmitUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/**
 * keyof
 * 프로퍼티 키를 유니온타입으로 구성.
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = "getUser";

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus3 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]?: GlobalApiStatus[k];
};

interface LoadingStatus {
  type: "loading";
  data: string[];
}

interface ErrorStatus {
  type: "error";
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus["type"];
