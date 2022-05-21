const btn = document.querySelectorAll("input");
/* 인풋태그 가져오기 */

let a = 0, b = 0, c = 0, d = 0;
let timetStop = false;
/* 타이머 스탑 상태 초반 비활성화 */

function startBtnClick() {
    timetStop = false;
    /* 타이머 스탑 상태 비활성화 */
    document.getElementById("startBtn").disabled = true;
    /* 스탑버튼 중복 클릭시 빨라지는 걸 방지한 버튼 비활성화 */
    let interval = setInterval(function () {
        /* 스타트 버튼 클릭시 실행 */
        if (!timetStop ) {
            /* timetStop이 false일때 실행 */
            hour = d;
            min = c;
            sec = b;
            ms = a;
            /* 시간, 분, 초 각각 정하기 */

            document.getElementById("timer").innerHTML = hour + "시간" + min + "분" + sec + '.' + ms + "초";
            /* 아이디 타이머에 입력해주기 */
            a++;
            /* 10ms마다 실행 "10ms = 0.01s" a는 ms가 0.01초 마다 1씩늘어남 */
            if (a > 99) {
                /* ms자리가 100이되면 1초가됨 ms를 0으로 초기화후 s를 1추가 */
                b++;
                a = 0;
            } else if (b > 59) {
                /* s자리가 60이 되면 1min이 됨 s를 0으로 초기화후 min을 1추가 */
                c++;
                b = 0;
            } else if (c > 59) {
                /* min자리가 60이 되면 1hour이 됨 min을 0으로 초기화후 hour을 1추가 */
                d++;
                c = 0;
            }
        } else {
            /* timetStop true일때 시간흐름을 멈춤 */
            clearInterval(interval);
        }
    }, 10);

};

function stopBtnClick() {
    /* stop버튼 */
    document.getElementById("startBtn").disabled = false;
    /* stop버튼을 클릭 시 start버튼 활성화 */
    return timetStop = true;
    /* stop버튼을 클릭 시 timetStop이 true가 됨 */
};

function resetBtnClick() {
    /* reset버튼 */
    document.getElementById("startBtn").disabled = false;
    /* reset버튼을 클릭 시 start버튼 활성화 */
    a = 0, b = 0, c = 0, d = 0;
    document.getElementById("timer").innerHTML = d + "시간" + c + "분" + b + '.' + a + "초";
    /* 시, 분, 초를 모두 0으로 초기화 */
    return timetStop = true;
    /* stop버튼을 클릭 시 timetStop이 true가 됨 */
};

btn[0].addEventListener("click", startBtnClick);
btn[1].addEventListener("click", stopBtnClick);
btn[2].addEventListener("click", resetBtnClick);

/* 버튼 0~2까지의 클릭 이벤트를 받아옴 */