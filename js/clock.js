const $clock = document.querySelector('#clock');

// padstart 쓸려고 string으로 바꿔줘야했다. 근데 + '' 이렇게 바꾸는 경우
// 300초 이런식으로 나온다.
// 아마도, 초가 갱신되기 전에 string으로 변환돼서 그런거인듯.
// 그러니까 바로 00을 붙혀버리지... 아무튼 그래서 string()으로 안전하게 먼저 변환시킴
const getClock = () => {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  let day = today.getDay();
  switch (day) {
    case 0:
      day = '일';
      break;
    case 1:
      day = '월';
      break;
    case 2:
      day = '화';
      break;
    case 3:
      day = '수';
      break;
    case 4:
      day = '목';
      break;
    case 5:
      day = '금';
      break;
    case 6:
      day = '토';
      break;

    default:
      break;
  }
  const hour = String(today.getHours()).padStart(2, '0');
  const minute = String(today.getMinutes()).padStart(2, '0');
  const second = String(today.getSeconds()).padStart(2, '0');

  // console.log(year, month, date, hour, minute, second);
  // const txt = ` ${year}년 ${month}월 ${date}일 ${day}요일 ${hour}시 ${minute}분 ${second}초`;
  const txt = `${hour}:${minute}:${second}`;
  $clock.innerHTML = txt;
};

setInterval(() => {
  getClock();
}, 1000);
getClock();
