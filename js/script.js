document.addEventListener('DOMContentLoaded', function() {
    // 로고를 클릭했을 때 aside 창 표시
    const teamLogos = document.querySelectorAll('.team-logo');
    const leftTeamPanel = document.getElementById('leftTeamPanel');
    const rightTeamPanel = document.getElementById('rightTeamPanel');
    const closePanelButtons = document.querySelectorAll('.closePanel');
    
    // 팀 데이터 객체 (2025 K리그1 최신 순위 반영)
    const teamData = {
        'DJ': {
            name: '대전 하나 시티즌',
            logoUrl: './img/emblemDJ.png',
            youtubeId: '5D7Zpwlpg3M?si=iltUm46ZjlyQlzQb',
            rank: 1,
            matches: 15,
            wins: 8,
            draws: 4,
            losses: 3,
            points: 28,
            rankData: [
                {rank: 1, team: 'DJ', teamName: '대전', matches: 15, wins: 8, draws: 4, losses: 3, points: 28},
                {rank: 2, team: 'JB', teamName: '전북', matches: 14, wins: 8, draws: 4, losses: 2, points: 28},
                {rank: 3, team: 'US', teamName: '울산', matches: 16, wins: 7, draws: 4, losses: 5, points: 25}
            ]
        },
        'JB': {
            name: '전북 현대',
            logoUrl: './img/emblemJB.png',
            youtubeId: 'i9unHBI8Auc?si=30DClJJiDZFlvrwQ',
            rank: 2,
            matches: 14,
            wins: 8,
            draws: 4,
            losses: 2,
            points: 28,
            rankData: [
                {rank: 1, team: 'DJ', teamName: '대전', matches: 15, wins: 8, draws: 4, losses: 3, points: 28},
                {rank: 2, team: 'JB', teamName: '전북', matches: 14, wins: 8, draws: 4, losses: 2, points: 28},
                {rank: 3, team: 'US', teamName: '울산', matches: 16, wins: 7, draws: 4, losses: 5, points: 25}
            ]
        },
        'US': {
            name: '울산 현대',
            logoUrl: './img/emblemUS.png',
            youtubeId: 'vGgjJqGA9Jc?si=3vK601t_k9IXGX19',
            rank: 3,
            matches: 16,
            wins: 7,
            draws: 4,
            losses: 5,
            points: 25,
            rankData: [
                {rank: 2, team: 'JB', teamName: '전북', matches: 14, wins: 8, draws: 4, losses: 2, points: 28},
                {rank: 3, team: 'US', teamName: '울산', matches: 16, wins: 7, draws: 4, losses: 5, points: 25},
                {rank: 4, team: 'GC', teamName: '김천', matches: 14, wins: 7, draws: 3, losses: 4, points: 24}
            ]
        },
        'GC': {
            name: '김천 상무',
            logoUrl: './img/emblemGC.png',
            youtubeId: 'dkApFNebz4k?si=QJS8F53_PQ6zyvEl',
            rank: 4,
            matches: 14,
            wins: 7,
            draws: 3,
            losses: 4,
            points: 24,
            rankData: [
                {rank: 3, team: 'US', teamName: '울산', matches: 16, wins: 7, draws: 4, losses: 5, points: 25},
                {rank: 4, team: 'GC', teamName: '김천', matches: 14, wins: 7, draws: 3, losses: 4, points: 24},
                {rank: 5, team: 'GJ', teamName: '광주', matches: 14, wins: 6, draws: 4, losses: 4, points: 22}
            ]
        },
        'GJ': {
            name: '광주 FC',
            logoUrl: './img/emblemGJ.png',
            youtubeId: 'xbzU_eZEPDQ?si=0gGeNh6Sv2hba5tV',
            rank: 5,
            matches: 14,
            wins: 6,
            draws: 4,
            losses: 4,
            points: 22,
            rankData: [
                {rank: 4, team: 'GC', teamName: '김천', matches: 14, wins: 7, draws: 3, losses: 4, points: 24},
                {rank: 5, team: 'GJ', teamName: '광주', matches: 14, wins: 6, draws: 4, losses: 4, points: 22},
                {rank: 6, team: 'PH', teamName: '포항', matches: 14, wins: 5, draws: 4, losses: 5, points: 19}
            ]
        },
        'PH': {
            name: '포항 스틸러스',
            logoUrl: './img/emblemPH.png',
            youtubeId: 'YP5rN_xMb3o?si=uvl9G6tj-A6I4-Q3',
            rank: 6,
            matches: 14,
            wins: 5,
            draws: 4,
            losses: 5,
            points: 19,
            rankData: [
                {rank: 5, team: 'GJ', teamName: '광주', matches: 14, wins: 6, draws: 4, losses: 4, points: 22},
                {rank: 6, team: 'PH', teamName: '포항', matches: 14, wins: 5, draws: 4, losses: 5, points: 19},
                {rank: 7, team: 'SE', teamName: '서울', matches: 14, wins: 4, draws: 6, losses: 4, points: 18}
            ]
        },
        'SE': {
            name: 'FC 서울',
            logoUrl: './img/emblemSE.png',
            youtubeId: 'CCn6PkPfkTg?si=mxVWEnwP9zW1pUPh',
            rank: 7,
            matches: 14,
            wins: 4,
            draws: 6,
            losses: 4,
            points: 18,
            rankData: [
                {rank: 6, team: 'PH', teamName: '포항', matches: 14, wins: 5, draws: 4, losses: 5, points: 19},
                {rank: 7, team: 'SE', teamName: '서울', matches: 14, wins: 4, draws: 6, losses: 4, points: 18},
                {rank: 8, team: 'GW', teamName: '강원', matches: 14, wins: 5, draws: 3, losses: 6, points: 18}
            ]
        },
        'GW': {
            name: '강원 FC',
            logoUrl: './img/emblemGW.png',
            youtubeId: '6we1cOa9D9A?si=cxq34aICJQKWNyVp',
            rank: 8,
            matches: 14,
            wins: 5,
            draws: 3,
            losses: 6,
            points: 18,
            rankData: [
                {rank: 7, team: 'SE', teamName: '서울', matches: 14, wins: 4, draws: 6, losses: 4, points: 18},
                {rank: 8, team: 'GW', teamName: '강원', matches: 14, wins: 5, draws: 3, losses: 6, points: 18},
                {rank: 9, team: 'AY', teamName: '안양', matches: 15, wins: 5, draws: 2, losses: 8, points: 17}
            ]
        },
        'AY': {
            name: 'FC 안양',
            logoUrl: './img/emblemAY.png',
            youtubeId: '7lsgFlLzg00?si=0y0TMdTNJUgruRkw',
            rank: 9,
            matches: 15,
            wins: 5,
            draws: 2,
            losses: 8,
            points: 17,
            rankData: [
                {rank: 8, team: 'GW', teamName: '강원', matches: 14, wins: 5, draws: 3, losses: 6, points: 18},
                {rank: 9, team: 'AY', teamName: '안양', matches: 15, wins: 5, draws: 2, losses: 8, points: 17},
                {rank: 10, team: 'SW', teamName: '수원FC', matches: 14, wins: 3, draws: 5, losses: 6, points: 14}
            ]
        },
        'SW': {
            name: '수원FC',
            logoUrl: './img/emblemSW.png',
            youtubeId: 'EFdlPwh1uns?si=zdjHhO1b9THk3imz',
            rank: 10,
            matches: 14,
            wins: 3,
            draws: 5,
            losses: 6,
            points: 14,
            rankData: [
                {rank: 9, team: 'AY', teamName: '안양', matches: 15, wins: 5, draws: 2, losses: 8, points: 17},
                {rank: 10, team: 'SW', teamName: '수원FC', matches: 14, wins: 3, draws: 5, losses: 6, points: 14},
                {rank: 11, team: 'JJ', teamName: '제주', matches: 14, wins: 3, draws: 3, losses: 8, points: 12}
            ]
        },
        'JJ': {
            name: '제주 유나이티드',
            logoUrl: './img/emblemJJ.png',
            youtubeId: 'tMe4p2nBM-g?si=DtYU4u7MuegK4yQ4',
            rank: 11,
            matches: 14,
            wins: 3,
            draws: 3,
            losses: 8,
            points: 12,
            rankData: [
                {rank: 10, team: 'SW', teamName: '수원FC', matches: 14, wins: 3, draws: 5, losses: 6, points: 14},
                {rank: 11, team: 'JJ', teamName: '제주', matches: 14, wins: 3, draws: 3, losses: 8, points: 12},
                {rank: 12, team: 'DG', teamName: '대구', matches: 14, wins: 3, draws: 2, losses: 9, points: 11}
            ]
        },
        'DG': {
            name: '대구 FC',
            logoUrl: './img/emblemDG.png',
            youtubeId: 'FnS8N8wuWFk?si=dUWOaljbmWWz0SZV',
            rank: 12,
            matches: 14,
            wins: 3,
            draws: 2,
            losses: 9,
            points: 11,
            rankData: [
                {rank: 10, team: 'SW', teamName: '수원FC', matches: 14, wins: 3, draws: 5, losses: 6, points: 14},
                {rank: 11, team: 'JJ', teamName: '제주', matches: 14, wins: 3, draws: 3, losses: 8, points: 12},
                {rank: 12, team: 'DG', teamName: '대구', matches: 14, wins: 3, draws: 2, losses: 9, points: 11}
            ]
        }
    };
    
    // 각 팀 로고에 이벤트 리스너 추가
    teamLogos.forEach(logo => {
        logo.addEventListener('click', function() {
            const teamName = this.getAttribute('data-team');
            const panelSide = this.getAttribute('data-panel');
            
            // 패널 선택
            let targetPanel = (panelSide === 'left') ? leftTeamPanel : rightTeamPanel;
            
            // 팀 정보 업데이트
            updateTeamInfo(teamName, panelSide);
            
            // 패널 표시
            targetPanel.style.display = 'block';
        });
    });
    
    // 닫기 버튼 이벤트
    closePanelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentPanel = this.closest('aside');
            if (parentPanel) {
                parentPanel.style.display = 'none';
            }
        });
    });
    
    // 팀 정보 업데이트 함수
    function updateTeamInfo(teamName, panelSide) {
        let targetPanel, logoElement, titleElement, videoElement, tableBody;
        
        if (panelSide === 'left') {
            targetPanel = leftTeamPanel;
            logoElement = document.getElementById('leftTeamLogo');
            titleElement = document.getElementById('leftTeamName');
            videoElement = document.getElementById('leftTeamVideo');
            tableBody = leftTeamPanel.querySelector('.rank table tbody');
        } else {
            targetPanel = rightTeamPanel;
            logoElement = document.getElementById('rightTeamLogo');
            titleElement = document.getElementById('rightTeamName');
            videoElement = document.getElementById('rightTeamVideo');
            tableBody = rightTeamPanel.querySelector('.rank table tbody');
        }
        
        // 해당 팀 정보가 있으면 업데이트
        if (teamData[teamName]) {
            const team = teamData[teamName];
            
            // 로고와 팀 이름 업데이트
            logoElement.style.backgroundImage = `url(${team.logoUrl})`;
            titleElement.textContent = team.name;
            
            // 응원가 영상 업데이트 (YouTube iframe)
            if (videoElement && team.youtubeId) {
                videoElement.src = `https://www.youtube.com/embed/${team.youtubeId}`;
            }
            
            // 순위표 업데이트
            if (tableBody && team.rankData) {
                tableBody.innerHTML = ''; // 기존 내용 제거
                
                // 새 순위표 내용 추가
                team.rankData.forEach(rankItem => {
                    const row = document.createElement('tr');
                    
                    // 하이라이트 현재 팀
                    const isCurrentTeam = (rankItem.team === teamName);
                    if (isCurrentTeam) {
                        row.classList.add('current-team');
                    }
                    
                    // 팀 로고 경로 계산
                    const teamLogoCode = rankItem.team.substring(0,2).toUpperCase();
                    const logoPath = `./img/emblem${teamLogoCode}.png`;
                    
                    row.innerHTML = `
                        <td>${rankItem.rank}</td>
                        <td>
                            <div class="logoS" style="background-image: url(${logoPath})"></div>
                        </td>
                        <td>${rankItem.teamName}</td>
                        <td>${rankItem.matches}</td>
                        <td>${rankItem.wins}</td>
                        <td>${rankItem.draws}</td>
                        <td>${rankItem.losses}</td>
                        <td>${rankItem.points}</td>
                    `;
                    
                    tableBody.appendChild(row);
                });
            }
        }
    }
});