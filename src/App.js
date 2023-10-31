import { MissionUtils } from "@woowacourse/mission-utils";
import Car from './car.js';
import RacingGame from "./race.js";



class App {
  async play() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carNamesInput.split(',').map(name => name.trim());
    const cars = carNames.map(name => new Car(name));
    cars.forEach(car => {
      car.position = '';
    });
    MissionUtils.Console.print(cars);
    const raceCount = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n');
    if ( isNaN(raceCount) || raceCount === 0 ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 게임 종료");
    }
    MissionUtils.Console.print("\n실행 결과");
    MissionUtils.Console.print(raceCount);
    const racingGame = new RacingGame();
    for (let i = 0; i < raceCount; i++){
      MissionUtils.Console.print(i);
      racingGame.race(cars);
      cars.forEach(car => {
        MissionUtils.Console.print(car.name + ' : ' + car.position);
      });
      // MissionUtils.Console.print(cars.map(car => `${car.name} : ${car.position}`));
      MissionUtils.Console.print('\n');
    }
  }    
}

export default App;