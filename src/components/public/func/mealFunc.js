export function addMealData(user_data, date, mealtime, newMealData) {
  console.log(newMealData);
  // 날짜와 식사 시간에 해당하는 인덱스 찾기
  const dayIndex = user_data.findIndex((day) => day.date === date);
  if (dayIndex === -1) {
    // 해당 날짜가 없으면 새로운 날짜 데이터 생성
    const newDay = {
      date: date,
      morning: [],
      launch: [],
      dinner: [],
    };

    newDay[mealtime].push(newMealData);
    user_data.push(newDay);
  } else {
    // 해당 날짜가 이미 존재하면 기존 데이터에 추가
    {
      newMealData.map((data) => user_data[dayIndex][mealtime].push(data));
    }
  }

  return user_data;
}
