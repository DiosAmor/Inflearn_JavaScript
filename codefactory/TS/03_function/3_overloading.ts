/**
 * Overloading
 * C++에서 쓰던 거랑은 느낌이 다르네.
 * TS는 명확하게 만드는 느낌?
 * JS에서는 어차피 위의 선언들은 사라지므로, 안 쓰는게 좋다.
 */

// 변수명은 바뀌어도 됨. 순서에 맞춰서 대입됨.
function stringOrStrings(members: string): string;
function stringOrStrings(
  member1: string,
  member2: string,
  member3: string
): string;

function stringOrStrings(
  memberOrMembers: string,
  member2?: string,
  member3?: string
): string {
  if (member2 && member3) {
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `아이브: ${memberOrMembers}`;
  }
}

console.log(stringOrStrings("안유진, 장원영, 레이"));
console.log(stringOrStrings("안유진", "장원영", "레이"));
