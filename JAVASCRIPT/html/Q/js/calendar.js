window.onload = function(){
    var now = new Date();                                           // 현재시각 yyyy년 mm월 mm일 h시 mm분 ss초
    var nowMonth = new Date(now.getFullYear(), now.getMonth);       // 위의 yy년 mm월 1일 0시 0분 0초

    changehead(nowMonth);           //현재 년월 기록
    buildCalendar(nowMonth);        //달력 작성
}

function selectMonth(){
    var yearMonth = document.getElementById('selectMonth').value;
    var selectYearMonth = new Date(yearMonth);
    changehead(selectYearMonth);        // 입력된 년월 기록
    buildCalendar(selectYearMonth);     // 달력 작성
}


function changehead(){
    document.getElementById('head').innerHTML
        = selectDate.getFullYear()+'년 '+(selectDate.getMonth()+1)+'월';
}

function buildCalendar(){
    // alert('달력 작성');
    var calendar = document.getElementById('calendarBody');
    calendar.innerHTML='';

    var monthLastDay = lastDate(selectDate); // 해당 월의 마지막 날짜 정보
    var weekInfo = selectDate.getDay();      // 주(week) 정보 가져오기 일요일0, 월1~토6
    var dateCnt = selectDate.getDate()-weekInfo;

    while(true){    // 주간 반복 : 행
        var weekLine = document.createElement('tr');
        for(var WeekCnt=0;WeekCnt<7;WeekCnt++){ // 날짜 반복(7번 반복)
            var weekDay = document.createElement('td');
            if(0<dateCnt && dateCnt <= monthLastDay){
                weekDay.innerHTML = dateCnt;    // 날짜 기록
            }
            dateCnt++;
            weekLine.appendChild(weekDay);
        }
    }

}


function lastDate(selectDate){ //각 달의 마지막 날짜를 반환하는 함수
    var year = selectDate.getFullYear();
    var month = selectDate.getMonth();

    var monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(year%4==0 && year%100!=0 && year%400==0){
        monthArr[1] = 29;
    }

    return monthArr[month];
}