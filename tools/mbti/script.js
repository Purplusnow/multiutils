const stories = [
    { text: "출근길, 길에 넘어진 사람이 있다.",
      choices: ["그냥 지나친다.", "도와준다."],
      scores: [{ I: 1, T: 1 }, { E: 1, F: 1 }] },

    { text: "회사에서 점심시간이 되었다.",
      choices: ["동료들과 함께 먹는다.", "혼자 조용히 먹는다."],
      scores: [{ E: 1 }, { I: 1 }] },

    { text: "친구가 고민을 이야기한다.",
      choices: ["논리적으로 해결책을 제안한다.", "공감하며 위로한다."],
      scores: [{ T: 1 }, { F: 1 }] },

    { text: "주말 여행을 계획 중이다.",
      choices: ["일정을 미리 정하고 예약한다.", "즉흥적으로 떠난다."],
      scores: [{ J: 1 }, { P: 1 }] }
];

let currentStory = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function nextStory(choice) {
    const selectedScores = stories[currentStory].scores[choice];
    Object.keys(selectedScores).forEach(type => scores[type] += selectedScores[type]);

    currentStory++;

    if (currentStory < stories.length) {
        loadStory();
    } else {
        showResult();
    }
}

function loadStory() {
    document.getElementById("story-text").textContent = stories[currentStory].text;
    document.getElementById("choice1").textContent = stories[currentStory].choices[0];
    document.getElementById("choice2").textContent = stories[currentStory].choices[1];
}

function showResult() {
    let mbti = (scores.E >= scores.I ? "E" : "I") +
               (scores.S >= scores.N ? "S" : "N") +
               (scores.T >= scores.F ? "T" : "F") +
               (scores.J >= scores.P ? "J" : "P");

    document.getElementById("story-container").style.display = "none";
    document.getElementById("result-container").innerHTML = `<h2>당신의 MBTI 유형: ${mbti}</h2>`;
    document.getElementById("result-container").style.display = "block";
}

window.onload = () => loadStory();
