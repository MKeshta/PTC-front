window.onscroll = function () { myFunction() };
var navbar = document.getElementById("primary-nav");
var navFiller = document.getElementById("primary-nav-filler");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    $('#primary-nav-filler').height($('#primary-nav').height() + 20);
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    $('#primary-nav-filler').height(0)
  }
}
function activateCalendar() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  
  var events = [
    { "date": "2019-07-19", "badge": false, "title": "Example 1" },
    { "date": "2019-07-21", "badge": false, "title": "Example 2" }
  ]

  var settings = {
    language: false,
    year: year,
    month: month,
    show_previous: true,
    show_next: true,
    cell_border: false,
    today: true,
    show_days: true,
    weekstartson: 1,
    nav_icon: false, // object: prev: string, next: string
    data: events,
    ajax: false, // object: url: string, modal: boolean,
    legend: false, // object array, [{type: string, label: string, classname: string}]
    action: false, // function
    action_nav: false // function

  };



  $("#calendar").zabuto_calendar(settings);

}
activateCalendar()