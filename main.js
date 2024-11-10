// Start Scroll Bar
let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
// End Scroll Bar

// Start Counter Events

//  Get Spans
let days = document.querySelector(".events .container .days");
let hours = document.querySelector(".events .container .hours");
let minutes = document.querySelector(".events .container .minutes");
let secconds = document.querySelector(".events .container .secconds");
console.log(hours);

// Get Time End
let dateDown = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  // get diffrense between dateDown and dateNow
  diffDate = dateDown - dateNow;

  let daysNumber = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  // Start get Hours
  let hoursNumber = Math.floor(
    (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // End get Hours

  let minutesNumber = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));

  let seccondsNumber = Math.floor((diffDate % (1000 * 60)) / 1000);
  days.innerHTML = daysNumber < 10?`0${daysNumber}`:daysNumber; 
  hours.innerHTML = hoursNumber < 10?`0${hoursNumber}`:hoursNumber;
  minutes.innerHTML = minutesNumber < 10?`0${minutesNumber}`:minutesNumber;
  secconds.innerHTML = seccondsNumber < 10?`0${seccondsNumber}`:seccondsNumber;

  if( diffDate===0){
    clearInterval(counter)
  }
}, 1000);

// End Counter Events
