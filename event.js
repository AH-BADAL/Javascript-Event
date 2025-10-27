// Option-one:Direct set on the Html Element!
// Option-one amra use korbo na

// Option-two:add onclick fuction
// Option-two ta amra beshi use korbo

function makeRed() {
  document.body.style.background = 'red';
}
// option-three:
const MakeblueButton = document.getElementById('make-blue');
MakeblueButton.onclick = Makeblue;

function Makeblue() {
  document.body.style.background ='Blue';
}
// Option three onother
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;

function makePurple() {
  document.body.style.background = 'purple';
}
// option-four
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);

function makePink() {
  document.body.style.background = 'pink';
}
// option-four another 
const Makebuttongreen = document.getElementById('make-green');
Makebuttongreen.addEventListener('click', function makegreen() {
  document.body.style.background = 'green';
})

// final option suggestion 
document.getElementById('make-tomato').addEventListener('click', function () {
  document.body.style.background = 'tomato';
});
  


