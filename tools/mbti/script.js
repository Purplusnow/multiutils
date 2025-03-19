const stories = [{"text": "아침에 알람이 울렸다. 오늘 중요한 발표가 있는 날이다. 하지만 너무 피곤하다.", "choices": ["잠을 조금 더 잔다.", "바로 일어나 준비한다."], "scores": [{"P": 1, "I": 1}, {"J": 1, "E": 1}]}, {"text": "출근길, 지하철에 사람이 가득 차 있다. 한 사람이 가방을 쏟아버렸다.", "choices": ["도와주면서 대화도 시도한다.", "못 본 척하고 조용히 음악을 듣는다."], "scores": [{"E": 1, "F": 1}, {"I": 1, "T": 1}]}, {"text": "회사에 도착하자마자 상사가 갑자기 프레젠테이션을 해달라고 한다.", "choices": ["즉흥적으로 진행한다.", "자료를 정리하며 시간을 벌려고 한다."], "scores": [{"E": 1, "P": 1}, {"I": 1, "J": 1}]}, {"text": "점심시간, 동료들이 같이 점심을 먹자고 한다.", "choices": ["함께 가서 이야기하며 즐긴다.", "혼자 조용히 먹는다."], "scores": [{"E": 1}, {"I": 1}]}, {"text": "오후 회의 중, 의견을 말할 기회가 왔다.", "choices": ["바로 내 의견을 말한다.", "다른 사람들의 의견을 먼저 듣는다."], "scores": [{"E": 1, "J": 1}, {"I": 1, "P": 1}]}, {"text": "친구가 고민을 이야기한다.", "choices": ["논리적으로 해결책을 제안한다.", "공감하며 위로한다."], "scores": [{"T": 1}, {"F": 1}]}, {"text": "주말 여행을 계획 중이다.", "choices": ["일정을 미리 정하고 예약한다.", "즉흥적으로 떠난다."], "scores": [{"J": 1}, {"P": 1}]}, {"text": "퇴근 후, 운동을 하기로 했다.", "choices": ["계획적으로 운동 루틴을 따른다.", "그날그날 하고 싶은 운동을 한다."], "scores": [{"J": 1}, {"P": 1}]}, {"text": "자기 전에 책을 읽기로 했다.", "choices": ["자기계발서를 읽으며 배운다.", "소설이나 감성적인 책을 읽는다."], "scores": [{"T": 1, "J": 1}, {"F": 1, "P": 1}]}, {"text": "친구들과 약속이 있는 날이다. 하지만 피곤하다.", "choices": ["그래도 나가서 친구들을 만난다.", "솔직하게 피곤하다고 말하고 다음에 만나자 한다."], "scores": [{"E": 1, "F": 1}, {"I": 1, "T": 1}]}, {"text": "퇴근 후, 카페에 가서 책을 읽으려 한다. 그런데 옆자리 사람들이 시끄럽게 대화 중이다.", "choices": ["참고 그냥 읽는다.", "자리를 옮기거나 불편하다고 말한다."], "scores": [{"P": 1, "I": 1}, {"J": 1, "E": 1}]}, {"text": "출근길에 버스를 탔는데, 자리가 하나 남아 있다.", "choices": ["바로 앉아서 편히 간다.", "서서 가면서 주변을 살핀다."], "scores": [{"J": 1, "T": 1}, {"P": 1, "F": 1}]}, {"text": "주말에 가족들과 외식을 가기로 했다. 식당을 고르는 방법은?", "choices": ["가장 인기 있는 곳을 예약해 둔다.", "그때그때 분위기에 맞춰 정한다."], "scores": [{"J": 1, "S": 1}, {"P": 1, "N": 1}]}, {"text": "회사에서 동료가 프로젝트 아이디어를 냈다. 그런데 비효율적으로 보인다.", "choices": ["논리적으로 개선 방안을 제안한다.", "동료의 의도를 존중하며 의견을 듣는다."], "scores": [{"T": 1, "J": 1}, {"F": 1, "P": 1}]}, {"text": "친구가 여행을 가자고 한다. 그런데 일정이 애매하다.", "choices": ["확실한 계획이 나올 때까지 보류한다.", "일단 가기로 하고 나중에 세부 계획을 정한다."], "scores": [{"J": 1, "S": 1}, {"P": 1, "N": 1}]}, {"text": "길을 가다가 모르는 사람이 길을 물어본다.", "choices": ["친절하게 설명해 준다.", "간단히 알려주고 빠르게 이동한다."], "scores": [{"E": 1, "F": 1}, {"I": 1, "T": 1}]}, {"text": "회의 중, 갑자기 새로운 아이디어가 떠올랐다.", "choices": ["바로 발표해서 논의한다.", "조용히 메모해 두고 나중에 이야기한다."], "scores": [{"E": 1, "N": 1}, {"I": 1, "S": 1}]}, {"text": "주말에 집에서 쉬려는데 친구가 갑자기 만나자고 연락했다.", "choices": ["바로 나갈 준비를 한다.", "미리 약속된 일정이 아니라면 거절한다."], "scores": [{"E": 1, "P": 1}, {"I": 1, "J": 1}]}, {"text": "온라인 쇼핑 중, 물건을 살지 고민하고 있다.", "choices": ["리뷰를 꼼꼼히 읽고 결정한다.", "직관적으로 마음에 드는 걸 선택한다."], "scores": [{"J": 1, "S": 1}, {"P": 1, "N": 1}]}, {"text": "일을 마친 후 저녁 시간을 어떻게 보낼까 고민 중이다.", "choices": ["계획한 대로 운동을 하러 간다.", "그날 기분에 따라 하고 싶은 걸 한다."], "scores": [{"J": 1}, {"P": 1}]}, {"text": "친구와의 대화 중 의견이 다르다.", "choices": ["논리적으로 내 주장을 설명한다.", "서로의 감정을 존중하며 듣는다."], "scores": [{"T": 1}, {"F": 1}]}, {"text": "새로운 프로젝트를 시작해야 한다.", "choices": ["계획을 세우고 차근차근 진행한다.", "일단 시작하고 필요하면 수정한다."], "scores": [{"J": 1}, {"P": 1}]}, {"text": "길을 걷다가 유명인을 마주쳤다.", "choices": ["가서 말을 걸어본다.", "멀리서 조용히 지켜본다."], "scores": [{"E": 1}, {"I": 1}]}, {"text": "업무 중 예상치 못한 문제가 발생했다.", "choices": ["신속하게 해결책을 찾고 실행한다.", "팀원들과 상의한 후 진행한다."], "scores": [{"T": 1, "J": 1}, {"F": 1, "P": 1}]}];

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
