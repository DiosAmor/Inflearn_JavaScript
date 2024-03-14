/**
 * Class 선언하기
 */

class Game {
  name: string;
  country: string;
  download: number;

  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  introduce() {
    return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
  }
}

const starcraft = new Game("Star Craft", "USA", 1000);

const retVal = starcraft.introduce();

// JS에서는 runtime 이전에 알 수 없다.
// starcraft.changeGame();
