var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
// const toggle = document.querySelector(".toggle");

// toggle.addEventListener("click", (e) => {
//   const html = document.querySelector("html");
//   if (html.classList.contains("dark")) {
//     html.classList.remove("dark");
//     e.target.innerHTML = "Dark Mode";
//   } else {
//     html.classList.add("dark");
//     e.target.innerHTML = "Light Mode";
//   }
// });

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back : (";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

function opentab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
// const username = "themanvendra00";
GitHubCalendar(".calendar", "themanvendra00");

// or enable responsive functionality:
GitHubCalendar(".calendar", "themanvendra00", { responsive: true });

