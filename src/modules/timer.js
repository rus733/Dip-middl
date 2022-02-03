const timer = (deadline) => {
  // const daysVal = document.querySelector('.count_1 > span');
  // const hoursVal = document.querySelector('.count_2 > span');
  // const minutesVal = document.querySelector('.count_3 > span');
  // const secondesVal = document.querySelector('.count_4 > span');
  const daysVal = document.querySelectorAll('.count_1');
  const hoursVal = document.querySelectorAll('.count_2');
  const minutesVal = document.querySelectorAll('.count_3');
  const secondesVal = document.querySelectorAll('.count_4 ');
  let idInterval = 0;
  const dayForms = [' День ', ' Дня ', ' Дней '];
  const hoursForms = [' Час ', ' часа ', ' Часов '];
  const minutesForms = [' Минута ', ' Минуты ', ' Минут '];
  const secondesForms = [' Секунда ', ' Секунды ', ' Секунд '];
  const date = new Date();
  //

  const declOfNum = (n, textForms) => {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) {
      return textForms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return textForms[1];
    }
    if (n1 == 1) {
      return textForms[0];
    }
    return textForms[2];
  };

  // const addZero = (arg) => {
  //   if (arg < 10) {
  //     return '0' + arg;
  //   } else {
  //     return arg;
  //   }
  // };
  const addZero = (arg) => (arg < 10 ? '0' + arg : arg);

  // остаток времени

  const getTimeRemaining = () => {
    //const year = date.getFullYear() + 1;
    const dateStop = new Date(deadline); //.getTime();
    const dateNow = new Date(); //.getTime();
    const diff = (dateStop - dateNow) / 1000;
    let days = diff > 0 ? Math.floor(diff / 60 / 60 / 24) : 0;
    let hours = diff > 0 ? Math.floor((diff / 60 / 60) % 24) : 0;
    let minutes = diff > 0 ? Math.floor((diff / 60) % 60) : 0;
    let secondes = diff > 0 ? Math.floor(diff % 60) : 0;

    if (diff <= 0) {
      clearInterval(idInterval);
      days = 0;
      hours = 0;
      minutes = 0;
      secondes = 0;
    }

    return {
      diff,
      days,
      hours,
      minutes,
      secondes,
    };
  };

  // вывод данных

  const updateClock = () => {
    //const time = timeFormat();
    const getTime = getTimeRemaining(); //
    // const days = addZero(getTime.days);
    // const hours = addZero(getTime.hours);
    // const minutes = addZero(getTime.minutes);
    // const secondes = addZero(getTime.secondes);

    daysVal.forEach((el) => {
      el.innerHTML = `${declOfNum(getTime.days, dayForms)}:</br> <span>${addZero(getTime.days)}</span>`;
    });
    hoursVal.forEach((el) => {
      el.innerHTML = `${declOfNum(getTime.hours, hoursForms)}:</br> <span>${addZero(getTime.hours)}</span>`;
    });

    minutesVal.forEach((el) => {
      el.innerHTML = `${declOfNum(getTime.minutes, minutesForms)}:</br> <span>${addZero(getTime.minutes)}</span>`;
    });

    secondesVal.forEach((el) => {
      el.innerHTML = `${declOfNum(getTime.secondes, secondesForms)}:</br> <span>${addZero(getTime.secondes)}</span>`;
    });
  };

  updateClock();

  idInterval = setInterval(updateClock, 1000);
};

timer();

export default timer;
