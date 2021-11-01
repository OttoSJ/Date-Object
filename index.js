


//   HOW TO CREATE A DATE OBJECT AND STAMP A PAGE ///////////////////////////////////////////////////


let today = new Date();
let year = today.getFullYear();
let est = new Date("Sep 09, 2020 15:45:55");
let differance = today.getTime() - est.getTime();
differance = (differance / 31556900000);

let footerMsg = document.getElementById("footer-msg");
footerMsg.innerHTML = "Copyright" + '&copy;' + " " + year

let logoMsg = document.getElementById("logo-msg");
logoMsg.textContent = Math.floor(differance) + "Year of online travel adivce"


//   SEE PAGES 136-143 IN JAVASCRIPT BOOK    ///////////////////////////////////////////////////////////