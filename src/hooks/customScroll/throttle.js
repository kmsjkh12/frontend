export const throttle = (handler, timeout = 300) => {
  let invokedTime; //함수가 호출 된 시간
  let timer; //함수를 호출하기 전의 타이머

  return function (...args) {
    if (!invokedTime) {
      //핸들러를 실행 후 invokedTime에 현재 시간 저장
      handler.apply(this, args);
      invokedTime = Date.now();
    } else {
      //이전에 설정된 타이머를 멈추고, 새로운 타이머 설정
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        //설정된 타이머는 일정 시간이 지난 후 콜백 함수 실행
        if (Date.now() - invokedTime >= timeout) {
          //차이를 계산하여 일정 시간이 지나면 핸들러 함수 실행 , invokedTime 재 설정
          handler.apply(this, args);
          invokedTime = Date.now();
        }
      }, Math.max(timeout - (Date.now() - invokedTime, 0))); // 음수 방지
    }
  };
};
