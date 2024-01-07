export function 지_합산(List) {
  return List.reduce((total, meal) => total + meal.fat, 0);
}

export function 탄_합산(List) {
  return List.reduce((total, meal) => total + meal.syn, 0);
}

export function 단_합산(List) {
  return List.reduce((total, meal) => total + meal.protein, 0);
}

export function 칼_합산(List) {
  return List.reduce((total, meal) => total + meal.cal, 0);
}

export function 권장섭취량_계산(지금까지_먹은_칼로리) {
  return (parseInt(지금까지_먹은_칼로리) / 2700) * 100;
}

export function extractTotalFat(data) {
  const totalFatInMorning = data.morning.reduce(
    (acc, meal) => acc + meal.fat,
    0
  );
  const totalFatInLaunch = data.launch.reduce((acc, meal) => acc + meal.fat, 0);
  const totalFatInDinner = data.dinner.reduce((acc, meal) => acc + meal.fat, 0);

  const totalFat = totalFatInMorning + totalFatInLaunch + totalFatInDinner;
  return totalFat;
}

export function extractTotalProtein(data) {
  const totalProteinInMorning = data.morning.reduce(
    (acc, meal) => acc + meal.protein,
    0
  );
  const totalProteinInLaunch = data.launch.reduce(
    (acc, meal) => acc + meal.protein,
    0
  );
  const totalProteinInDinner = data.dinner.reduce(
    (acc, meal) => acc + meal.protein,
    0
  );

  const totalProtein =
    totalProteinInMorning + totalProteinInLaunch + totalProteinInDinner;
  return totalProtein;
}

export function extractTotalSyn(data) {
  const totalSynInMorning = data.morning.reduce(
    (acc, meal) => acc + meal.syn,
    0
  );
  const totalSynInLaunch = data.launch.reduce((acc, meal) => acc + meal.syn, 0);
  const totalSynInDinner = data.dinner.reduce((acc, meal) => acc + meal.syn, 0);

  const totalProtein = totalSynInMorning + totalSynInLaunch + totalSynInDinner;
  return totalProtein;
}

export function extractTotalCal(data) {
  const totalCalInMorning = data.morning.reduce(
    (acc, meal) => acc + meal.cal,
    0
  );
  const totalCalInLaunch = data.launch.reduce((acc, meal) => acc + meal.cal, 0);
  const totalCalInDinner = data.dinner.reduce((acc, meal) => acc + meal.cal, 0);

  const totalCal = totalCalInMorning + totalCalInLaunch + totalCalInDinner;
  return totalCal;
}
