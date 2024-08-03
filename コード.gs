function keika(s, e) {
  let diff = e.getTime() - s.getTime();
  let min = Math.floor(diff / 1000 / 60 % 60);
  let hour = Math.floor(diff / 1000 / 60 / 60 % 24);
  return hour+min/60
}


function myFunction() {
  const titleset = ["まば", "ろば", "ひが"];
  const calender = CalendarApp.getDefaultCalendar();
  let start = new Date();
  start.setDate(1);
  let end = new Date();
  end.setMonth(end.getMonth() +1); 
  end.setDate(0);
  const events = calender.getEvents(start, end);
  let result = 0;
  events.forEach((event) => {
    if (titleset.includes(event.getTitle())) {
      let s = event.getStartTime();
      let e = event.getEndTime();
      let one = keika(s, e) * 900
      result += one
    }
  })
  console.log(`total: `, result)
}
