const hands = ["グー", "チョキ", "パー"];
let win = 0, lose = 0, draw = 0;

const result = document.getElementById("result");
const score = document.getElementById("score");

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const player = Number(button.dataset.hand);
    const cpu = Math.floor(Math.random() * 3);
    let message;

    if (player === cpu) {
      draw++;
      message = "あいこ";
    } else if ((player - cpu + 3) % 3 === 2) {
      win++;
      message = "あなたの勝ち！";
    } else {
      lose++;
      message = "あなたの負け…";
    }

    result.textContent = `あなた: ${hands[player]} / コンピュータ: ${hands[cpu]} → ${message}`;
    score.textContent = `勝ち ${win} / 負け ${lose} / あいこ ${draw}`;
  });
});