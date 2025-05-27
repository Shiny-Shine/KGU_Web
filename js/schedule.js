document.addEventListener('DOMContentLoaded', function() {    
    const matchSchedule = [
        {
            date: '2025-06-01',
            time: '19:00',
            home: '김천 상무',
            away: '수원FC',
            stadium: '김천 종합경기장'
        },
        {
            date: '2025-06-01',
            time: '19:00',
            home: '포항 스틸러스',
            away: '강원FC',
            stadium: '포항 스틸야드'
        },
        {
            date: '2025-06-01',
            time: '19:00',
            home: '대구FC',
            away: '광주FC',
            stadium: '대구IM뱅크파크'
        },
        {
            date: '2025-06-13',
            time: '19:30',
            home: '강원FC',
            away: '전북 현대',
            stadium: '춘천 송암'
        },
    ];

    function renderSchedule(selectedDate = null) {
        const tbody = document.getElementById('scheduleBody');
        let filteredSchedule = matchSchedule;

        if (selectedDate) {
            filteredSchedule = matchSchedule.filter(match => match.date === selectedDate);
        }

        tbody.innerHTML = filteredSchedule.length > 0 
            ? filteredSchedule.map(match => `
                <tr>
                    <td>${match.date}</td>
                    <td>${match.time}</td>
                    <td>${match.home}</td>
                    <td>vs</td>
                    <td>${match.away}</td>
                    <td>${match.stadium}</td>
                </tr>
            `).join('')
            : `<tr><td colspan="6" style="text-align: center;">해당 날짜에 경기가 없습니다.</td></tr>`;
    }

    renderSchedule();

    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function(dateText) {
            renderSchedule(dateText);
        }
    });
});
