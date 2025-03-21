const stories = [{"text": "아침 출근길, 알람이 울리지만 몸이 천근만근이다. 창밖을 보니 회색빛 하늘, 아직 이불 속에 있고 싶다. 하지만 오늘은 중요한 발표가 있는 날이다. 당신은 어떻게 할 것인가?", "choices": ["‘5분만 더...’ 하며 알람을 끈다.", "규칙적으로 움직여야지! 하며 자리에서 일어난다."], "scores": [{"P": 1, "I": 1}, {"J": 1, "E": 1}]}, {"text": "출근 시간, 만원 지하철에 몸을 구겨 넣는다. 열차가 흔들릴 때마다 사람들은 서로 밀려나간다. 그때, 앞에 서 있던 사람이 몸의 균형을 잃고 가방을 떨어뜨려 바닥에 물건이 흩어진다. 사람들은 분주하게 자기 갈 길을 가는데, 당신은 어떻게 할까?", "choices": ["‘다들 바쁘니 그냥 지나가겠지…’ 나도 모른 척한다.", "‘이런 건 도와줘야지!’ 하며 얼른 가방을 주워준다."], "scores": [{"I": 1, "T": 1}, {"E": 1, "F": 1}]}, {"text": "회사에 도착하자마자 팀장이 다가와 급히 보고서를 검토해 달라고 한다. 원래 계획에 없던 요청이지만, 마감이 임박했다. 당신은 어떻게 대응할까?", "choices": ["‘일단 어떻게든 해보자!’ 바로 검토를 시작한다.", "‘기한이 너무 촉박한데... 먼저 계획을 세우자.’"], "scores": [{"P": 1, "E": 1}, {"J": 1, "I": 1}]}, {"text": "점심시간이 되어 동료들이 메뉴를 정하고 있다. 옆에서 한 동료가 다가와 ‘같이 먹을래?’라고 묻는다. 하지만 오늘따라 혼자 조용히 있고 싶다. 당신은 어떻게 반응할까?", "choices": ["‘좋지! 다 같이 먹으면 더 맛있겠지.’ 흔쾌히 따라간다.", "‘오늘은 혼자 있고 싶어…’ 정중히 거절한다."], "scores": [{"E": 1, "F": 1}, {"I": 1, "T": 1}]}, {"text": "회의 중, 갑자기 발표자가 ‘이 부분에 대해 어떻게 생각하세요?’라며 당신에게 의견을 묻는다. 미리 준비된 답은 없지만, 침묵할 수도 없다. 당신은 어떻게 반응할까?", "choices": ["당황하지 않고 바로 내 의견을 말하며 논의를 주도한다.", "다른 사람들의 의견을 먼저 듣고 신중히 정리해서 이야기한다."], "scores": [{"E": 1, "J": 1}, {"I": 1, "P": 1}]}, {"text": "퇴근 후, 피곤한 몸을 이끌고 집에 들어왔다. 소파에 앉아 쉬는 것도 좋지만, 자기 계발을 위해 뭔가 productive한 일을 해야 할 것 같다. 이럴 때 당신의 선택은?", "choices": ["책을 읽거나 강의를 들으며 자기 계발에 시간을 쓴다.", "오늘은 그냥 쉬면서 드라마나 영상을 본다."], "scores": [{"J": 1, "T": 1}, {"P": 1, "F": 1}]}, {"text": "주말에 친구들과 여행을 가기로 했다. 하지만 아직 구체적인 계획은 없다. 당신은 여행 계획을 어떻게 세울까?", "choices": ["미리 일정을 정리하고 호텔, 식당까지 철저히 예약한다.", "즉흥적으로 떠나서 상황에 맞춰 일정을 정한다."], "scores": [{"J": 1}, {"P": 1}]}, {"text": "길을 걷다가 비를 맞고 있는 강아지를 발견했다. 하지만 지금 회사에 늦을 수도 있는 상황이다. 당신은 어떻게 할까?", "choices": ["강아지를 안전한 곳으로 데려다 준다.", "시간이 없어 그냥 지나친다."], "scores": [{"F": 1, "E": 1}, {"T": 1, "I": 1}]}, {"text": "동료가 중요한 실수를 했는데, 본인은 전혀 눈치채지 못하고 있다. 이 상황에서 당신은 어떻게 반응할까?", "choices": ["논리적으로 실수를 지적하고 해결 방안을 제시한다.", "상대방이 기분 나쁘지 않도록 부드럽게 전달한다."], "scores": [{"T": 1}, {"F": 1}]}, {"text": "저녁 약속이 있었지만 하루 종일 피곤한 하루를 보냈다. 지금이라도 친구들에게 연락해서 취소하고 집에서 쉬고 싶다. 당신의 선택은?", "choices": ["그래도 나가서 친구들을 만난다.", "솔직하게 피곤하다고 말하고 다음에 만나자고 한다."], "scores": [{"E": 1, "F": 1}, {"I": 1, "T": 1}]}, {"text": "길을 걷다가 모르는 사람이 다가와 길을 물어본다. 하지만 지금 시간이 촉박한 상황이다. 당신은 어떻게 반응할까?", "choices": ["친절하게 설명해 주거나 스마트폰 지도를 함께 본다.", "간단히 방향만 알려주고 빠르게 이동한다."], "scores": [{"E": 1, "F": 1}, {"I": 1, "T": 1}]}, {"text": "직장에서 갑자기 새로운 프로젝트를 맡게 되었다. 처음 해보는 일이라 어떻게 접근해야 할지 고민된다. 당신의 선택은?", "choices": ["세부 계획을 철저히 세운 뒤 진행한다.", "일단 시작하면서 필요하면 수정해 나간다."], "scores": [{"J": 1, "S": 1}, {"P": 1, "N": 1}]}, {"text": "친구가 고민을 이야기하는데, 듣다 보니 너무 비현실적인 이야기다. 당신은 어떻게 반응할까?", "choices": ["논리적으로 현실적인 해결책을 제시한다.", "친구의 감정을 고려하며 공감해준다."], "scores": [{"T": 1}, {"F": 1}]}, {"text": "주말에 친구들과 놀이공원에 가기로 했는데, 아침부터 비가 쏟아진다. 이럴 때 당신의 선택은?", "choices": ["미리 실내에서 할 수 있는 활동을 대체 옵션으로 준비한다.", "즉흥적으로 새로운 계획을 세운다."], "scores": [{"J": 1}, {"P": 1}]}, {"text": "온라인 쇼핑 중, 마음에 드는 물건이 있다. 하지만 가격이 비싸 고민된다. 이럴 때 당신은 어떻게 결정할까?", "choices": ["리뷰를 꼼꼼히 분석하고 신중히 결정한다.", "직관적으로 마음에 드는 걸 선택한다."], "scores": [{"J": 1, "S": 1}, {"P": 1, "N": 1}]}, {"text": "회의 중, 갑자기 상사가 당신에게 의견을 묻는다. 미리 준비한 내용이 없을 때 당신은 어떻게 반응할까?", "choices": ["일단 생각나는 대로 즉흥적으로 이야기한다.", "조용히 듣다가 정리된 후에 의견을 낸다."], "scores": [{"E": 1, "P": 1}, {"I": 1, "J": 1}]}, {"text": "여행 중 길을 잃었다. 스마트폰 배터리도 거의 없다. 당신은 이 상황을 어떻게 해결할까?", "choices": ["사람들에게 적극적으로 물어보며 도움을 요청한다.", "조용히 지도를 보며 스스로 길을 찾는다."], "scores": [{"E": 1}, {"I": 1}]}, {"text": "동료가 중요한 실수를 했지만, 본인은 전혀 눈치채지 못하고 있다. 당신은 이 상황에서 어떻게 반응할까?", "choices": ["논리적으로 실수를 지적하고 해결 방안을 제시한다.", "상대방이 기분 나쁘지 않도록 부드럽게 전달한다."], "scores": [{"T": 1}, {"F": 1}]}, {"text": "퇴근 후, 저녁 시간이 생겼다. 오랜만의 자유 시간이다. 이럴 때 당신은 어떻게 보낼까?", "choices": ["계획해 둔 취미 활동을 하며 시간을 보낸다.", "그때그때 기분에 따라 하고 싶은 걸 한다."], "scores": [{"J": 1}, {"P": 1}]}, {"text": "친구들과 함께 있는 자리에서 갑자기 낯선 사람이 대화에 끼어들었다. 당신은 어떻게 반응할까?", "choices": ["자연스럽게 대화를 이어가며 친해진다.", "낯선 사람과 어울리는 게 불편하다."], "scores": [{"E": 1}, {"I": 1}]}, {"text": "새로운 직장에서 첫 출근을 했다. 아직 낯선 동료들 사이에서 당신은 어떻게 행동할까?", "choices": ["먼저 다가가 인사를 건네며 어울리려고 노력한다.", "필요한 상황에서만 대화하며 조용히 적응한다."], "scores": [{"E": 1}, {"I": 1}]}, {"text": "새로운 취미를 배우기로 했다. 어떤 방식으로 접근할까?", "choices": ["책과 강의를 찾아 철저히 이론을 익힌다.", "일단 해보면서 직접 부딪히며 배우는 것이 더 중요하다."], "scores": [{"J": 1, "S": 1}, {"P": 1, "N": 1}]}, {"text": "저녁 무렵, 친구에게서 갑자기 전화가 왔다. 별다른 용건 없이 그냥 이야기하고 싶어 하는 듯하다.", "choices": ["반갑게 맞이하며 즐겁게 대화한다.", "간단히 인사만 하고 대화를 마친다."], "scores": [{"E": 1}, {"I": 1}]}, {"text": "운전 중, 네비게이션이 예상과 다른 길로 안내하기 시작했다. 당신은 이럴 때 어떻게 할까?", "choices": ["일단 안내를 따라가면서 확인한다.", "스스로 지도를 보고 판단한다."], "scores": [{"P": 1, "N": 1}, {"J": 1, "S": 1}]}, {"text": "친구가 당신에게 깜짝 파티를 준비했다. 하지만 당신은 이런 깜짝 이벤트가 어색할 수도 있다.", "choices": ["놀라면서도 고마워하며 즐긴다.", "기쁘지만 속으로 부담을 느낀다."], "scores": [{"E": 1, "F": 1}, {"I": 1, "T": 1}]}, {"text": "팀 프로젝트에서 팀장이 갑자기 방향을 바꾸기로 했다. 당신은 이 변화를 어떻게 받아들일까?", "choices": ["새로운 방향에 적응하며 팀의 흐름을 따른다.", "이전 계획을 유지하는 게 낫다고 주장한다."], "scores": [{"P": 1, "N": 1}, {"J": 1, "S": 1}]}, {"text": "식당에서 음식을 시켰는데, 주문한 것과 다른 음식이 나왔다. 이럴 때 당신은 어떻게 할까?", "choices": ["바로 직원에게 이야기해 교환 요청을 한다.", "크게 신경 쓰지 않고 그냥 먹는다."], "scores": [{"J": 1, "T": 1}, {"P": 1, "F": 1}]}, {"text": "SNS에서 친구가 올린 글을 봤는데, 논란이 될 수 있는 내용이었다. 당신은 어떻게 할까?", "choices": ["조용히 넘어가고 신경 쓰지 않는다.", "개인적으로 연락해서 의견을 나눈다."], "scores": [{"I": 1, "T": 1}, {"E": 1, "F": 1}]}];

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

    // 진행률 표시 업데이트
    let progressPercent = ((currentStory + 1) / 28) * 100;
    document.getElementById("progress-text").textContent = `질문 ${currentStory + 1} / 28`;
    document.getElementById("progress-bar").style.width = progressPercent + "%";
}

function showResult() {
    let mbti = (scores.E >= scores.I ? "E" : "I") +
               (scores.S >= scores.N ? "S" : "N") +
               (scores.T >= scores.F ? "T" : "F") +
               (scores.J >= scores.P ? "J" : "P");

    document.getElementById("story-container").style.display = "none";
    document.getElementById("progress-container").style.display = "none";
    document.getElementById("result-container").innerHTML = `<h2>당신의 MBTI 유형: ${mbti}</h2>`;
    document.getElementById("result-container").style.display = "block";
}

window.onload = () => loadStory();
