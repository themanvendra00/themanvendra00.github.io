var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Hey have a look";
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

// Resume Download function
let resumebtn1 = document
  .getElementById("resume-button-1")
  .addEventListener("click", fun);
let resumebtn2 = document
  .getElementById("resume-button-2")
  .addEventListener("click", fun);

function fun() {
  window.open(
    "https://drive.google.com/file/d/1RxDrehJAss-mb1PF4qcuFCkZulqlLaM2/view?usp=share_link",
    "_blank"
  );
}



