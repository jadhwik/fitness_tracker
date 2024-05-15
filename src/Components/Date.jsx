const DateComp = () => {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const dates = [];
  const todayDay = today.getDay();
  const todayDate = today.getDate();
  dates.push({ day: days[todayDay], date: todayDate });
  for (let i = 1; i <= 3; i++) {
    const nextDay = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    const nextdayDay = nextDay.getDay();
    const nextdayDate = nextDay.getDate();
    dates.push({ day: days[nextdayDay], date: nextdayDate });
  }
  console.log(dates);

  const DateItem = ({ day, date }) => {
    return (
      <div className="date-container">
        <div className="date-item">
          <div className="day">{day}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="data-comp">
      <div className="date-container-column">
        {dates.map((dateObj, index) => (
          <DateItem key={index} day={dateObj.day} date={dateObj.date} />
        ))}
      </div>
    </div>
  );
};

export default DateComp;
