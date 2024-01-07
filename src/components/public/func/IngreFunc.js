//권장량들 

export function 단백질(kg) {
  return kg * 1.2;
}
export function 지방(기초대사량) {
  return 기초대사량 % 30;
}
export function 탄수화물(기초대사량) {
  return 기초대사량 % 55;
}

export function 칼로리_계산(기초대사량, 활동량) {
  return 기초대사량 * 활동량;
}

export function 기초대사량_계산(type, cm, kg, age) {
  var 기초대사량;
  if (type === "man") {
    기초대사량 = 66.5 + 13.75 * kg + 5.003 * cm - 6.75 * age;
  } else if (type === "woman") {
    기초대사량 = 655.1 + 9.563 * kg + 1.85 * cm - 4.676 * age;
  }
  return 기초대사량;
}

