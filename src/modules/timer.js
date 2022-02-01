const timer = () => {
  //console.log('timer ');

  const daysVal = document.querySelector('.count_1 > span');
  const hoursVal = document.querySelector('.count_2 > span');
  const minutesVal = document.querySelector('.count_3 > span');
  const secondesVal = document.querySelector('.count_4 > span');
  const date = new Date();

  const addZero = (arg) => {
    if (arg > 0 && arg < 10) {
      return '0' + arg;
    } else {
      return arg;
    }
  };

  // текущее время
  const timeFormat = () => {
    const date = new Date(); // если убрать , не работает
    //const dayWeek = daysName[new Date().getDay() - 1];
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
    return {
      hours,
      minutes,
      seconds,
    };
  };

  // остаток времени

  const getTimeRemaining = () => {
    const year = date.getFullYear() + 1;
    const dateStop = new Date(year, 0, 1).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const daysNumber = Math.floor(timeRemaining / 60 / 60 / 24);
    const hoursNumber = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutesNumber = Math.floor((timeRemaining / 60) % 60);
    const secondesNumber = Math.floor(timeRemaining % 60);

    //console.log(new Date(year, 0, 1));
    //console.log(new Date());

    return {
      hoursNumber,
      daysNumber,
      minutesNumber,
      secondesNumber,
    };
  };

  // вывод данных

  const textDate = () => {
    const time = timeFormat();
    const timer = getTimeRemaining(); //daysNumber
    daysVal.textContent = addZero(timer.daysNumber);
    hoursVal.textContent = addZero(timer.hoursNumber);
    minutesVal.textContent = addZero(timer.minutesNumber);
    secondesVal.textContent = addZero(timer.secondesNumber);
    //   dateBlock.innerHTML = `${time.namePartDay} <br>
    // Сегодня: ${time.dayWeek} <br>
    // Текущее время: ${addZero(time.hours)}:${time.minutes}:${time.seconds} ${time.amPM}<br>
    // До нового года осталось ${timer.daysNumber} ${daysTextForm(timer.daysNumber)}`;
  };

  textDate();
  setInterval(textDate, 1000);

  //setInterval(getTimeRemaining, 1000);
};

timer();

export default timer;
