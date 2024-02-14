// 曲のデータを定義します
const songs = [
    { title: "ないものねだり,またね", artist: "コーギー", category: "red" },
    { title: "奏,水流のロック,グッドな音楽を,オー!リバル", artist: "Cadence keynotes", category: "green" },
    { title: "言って。 晴る", artist: "嘘つき達", category: "blue" },
    { title: "飛行艇", artist: "Reach", category: "orange" },
    { title: "ロストワンの号哭", artist: "θ", category: "orange" },
    { title: "かわE,Tank top of the world,あつまれ☆パーティーピーポー,ハッピーウェディング前ソング", artist: "たつしくる", category: "orange" },
    { title: "ちゅ、多様性,瞬間センチメンタル", artist: "Fumpy", category: "orange" },
    { title: "曲名4", artist: "MAD BATTERS", category: "orange" },
    { title: "曲名4", artist: "シャッフルA", category: "orange" },
    { title: "曲名4", artist: "センサーシップ", category: "orange" },
    { title: "曲名4", artist: "逆ら番", category: "orange" },
    { title: "曲名4", artist: "キラキラ共和国", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "skept", category: "orange" },
    { title: "曲名4", artist: "IMO", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "coincidence", category: "orange" },
    { title: "曲名4", artist: "のこったーず", category: "orange" },
    { title: "曲名4", artist: "からあげどっぐ", category: "orange" },
    { title: "曲名4", artist: "シークレッツ", category: "orange" },
    { title: "曲名4", artist: "シリウス", category: "orange" },
    { title: "曲名4", artist: "照照様", category: "orange" },
    { title: "曲名4", artist: "KOF団", category: "orange" },
    { title: "曲名4", artist: "はくちゅうむ", category: "orange" },
    { title: "曲名4", artist: "Gnu Brain", category: "orange" },
    { title: "曲名4", artist: "いいえ", category: "orange" },
    { title: "曲名4", artist: "鉄腕BiSH", category: "orange" },
    { title: "曲名4", artist: "非力ハムスター", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "渦潮ぽてと+", category: "orange" },
    { title: "曲名4", artist: "Bocci", category: "orange" },
    { title: "曲名4", artist: "霞草", category: "orange" },
    { title: "曲名4", artist: "無", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "未定", category: "orange" },
    { title: "曲名4", artist: "Who's ", category: "orange" },
    { title: "曲名4", artist: "Amber", category: "orange" },

    
    // 他の曲も同様に追加
];

// HTMLに曲のデータを反映する関数を定義します
function renderTimetable() {
    const timetableContainer = document.getElementById('timetable-container');
    songs.forEach(song => {
        const cell = document.createElement('div');
        cell.className = `timetable-cell ${song.category}`;
        cell.innerHTML = `<p>${song.artist} - ${song.title}</p>`;
        timetableContainer.appendChild(cell);
    });
}

// ページが読み込まれたときに曲表を生成します
window.onload = function() {
    renderTimetable();
};