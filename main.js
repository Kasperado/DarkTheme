/* 
  This code toggles between light and dark themes, by adding or removing the "darkmode" class to the body element
  "darkmode" class has same css variables as used in default body class but with different values
*/

let isDarkmodeOn = (localStorage.getItem("isDarkmodeOn") === "on");
// If it's not set in localStorage (false) then check the user's OS preference
if (!isDarkmodeOn && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) isDarkmodeOn = true;
// Enable current mode
setColorMode();

function setColorMode() {
  (isDarkmodeOn) ? setDarkMode() : setLightMode();  
}

function setDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("isDarkmodeOn", "on");
}

function setLightMode() {
  document.body.classList.remove("darkmode");
  localStorage.removeItem("isDarkmodeOn");
}

document.getElementById('darkmode-toggle').addEventListener('click', () => {
  isDarkmodeOn = !isDarkmodeOn;
  setColorMode();
});
