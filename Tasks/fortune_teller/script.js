console.log("Fortune Teller");
// --------------------------------------------------------------------

const fortune1 = "A surprise is coming your way, bringing happiness soon.";

const fortune2 = "Someone close will offer you help when you need it most.";

const fortune3 = "Take a risk now; it will lead to something good.";

const fortune4 = "A new friendship will bring positive changes to your life.";

const fortune5 = "You will find peace in a decision you make soon.";

const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune = randomNumber;

if (randomNumber == 1) {
  selectedFortune = fortune1;
} else if (randomNumber == 2) {
  selectedFortune = fortune2;
} else if (randomNumber == 3) {
  selectedFortune = fortune3;
} else if (randomNumber == 4) {
  selectedFortune = fortune4;
} else if (randomNumber == 5) {
  selectedFortune = fortune5;
}else{
    console.log("Please type no b/w 1 to 5 in natural number")
}
console.log(selectedFortune);