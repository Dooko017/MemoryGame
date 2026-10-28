const moveStar = document.getElementById("moveStar");
const finish = document.getElementById("finish");
const result = document.getElementById("result");

let starPosition = 1;
let count = 0;

function builTrack() {
  moveStar.textContent = "";
  for (let i = 1; i <= 10; i++) {
    if (i === starPosition) {
      moveStar.textContent += "⭐️";
    } else {
      moveStar.textContent += "⬜️";
    }
  }
  if (starPosition === 11) {
    moveStar.textContent += "⭐️ Finish! 🎉";
  } else {
    moveStar.textContent += "🏁";
  }
}

builTrack();

function moveLeft() {
  if (starPosition > 1) {
    starPosition--;
    count++;
    result.textContent = `alham: ${count}`;
  }
  builTrack();
}
function moveRight() {
  if (starPosition < 11) {
    starPosition++;
    count++;
    result.textContent = `alham: ${count}`;
  }

  builTrack();
}

function moveRefresh() {
  starPosition = 1;
  count = 0;
  builTrack();
}
