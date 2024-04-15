const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const abbreviatedWeekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const getDays = (currentDate) => {
  const diasAnteriores = getDiasAnteriores(currentDate);
  const diasPosteriores = getProximosDias(currentDate);
  const days = [...diasAnteriores, currentDate, ...diasPosteriores];
  days.sort((a, b) => a.getTime() - b.getTime());
  return days;
};

const getProximosDias = (data) => {
  let proximosDias = new Date(data);
  const tresProximosDias = [];

  for (let i = 0; i < 2; i++) {
    proximosDias.setDate(proximosDias.getDate() + 1);
    tresProximosDias.push(new Date(proximosDias));
  }

  return tresProximosDias;
};

const getDiasAnteriores = (data) => {
  let proximosDias = new Date(data);
  const tresProximosDias = [];

  for (let i = 0; i < 2; i++) {
    proximosDias.setDate(proximosDias.getDate() - 1);
    tresProximosDias.push(new Date(proximosDias));
  }

  return tresProximosDias;
};

const getDaysOfWeek = (days) => {
  const daysOfWeek = days.map((day) => {
    const dayOfWeek = day.getDay();
    const nameOfDayOfWeek = abbreviatedWeekdays[dayOfWeek];

    const isCurrentDay = day === currentDate;

    return {
      day: day.getDate(),
      nameOfDayOfWeek: nameOfDayOfWeek,
      isCurrentDay,
    };
  });

  return daysOfWeek;
};

const getMonthFullName = (day) => {
  const monthNumber = day.getMonth();
  return months[monthNumber];
};

const getDayElement = (info) => {
  const classActive = info.isCurrentDay ? "day-active fade" : "";
  const dayFormatted = info.day.toString().padStart(2, "0");

  return `<div class="calendar__body-day ${classActive}">
      <span class="calendar__body-day-number ">${dayFormatted}</span>
      <span class="calendar__body-day-week">${info.nameOfDayOfWeek}</span>
    </div>`;
};

const setCalendarBody = (days) => {
  const calendarBody = document.querySelector("#calendar .calendar__body");

  const daysElements = days.map((day) => {
    return getDayElement(day);
  });

  calendarBody.innerHTML = daysElements.join("");
};

const setCalendarTitle = (monthFullName) => {
  const calendarTitle = document.querySelector(
    "#calendar .calendar__header-month"
  );
  calendarTitle.textContent = monthFullName;
};

const setCalendarInfo = (currentDate) => {
  const monthFullName = getMonthFullName(currentDate);
  const days = getDays(currentDate);
  const daysOfWeekFormated = getDaysOfWeek(days);

  setCalendarBody(daysOfWeekFormated);
  setCalendarTitle(monthFullName);

  console.log(daysOfWeekFormated);
};

const updateCurrentDate = (value) => {
  currentDate.setDate(currentDate.getDate() + value);
  setCalendarInfo(currentDate);
};

// date 13-04-2024
let currentDate = new Date();
setCalendarInfo(currentDate);
