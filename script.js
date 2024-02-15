// 曲のデータを定義
const songs = [
    { title: "ないものねだり,またね", artist: "コーギー", category: "red" },
    { title: "奏,水流のロック,グッドな音楽を,オー!リバル", artist: "Cadence keynotes", category: "green" },
    { title: "言って。 晴る", artist: "嘘つき達", category: "blue" },
    { title: "飛行艇", artist: "Reach", category: "orange" },
    { title: "ロストワンの号哭", artist: "θ", category: "orange" },
    { title: "かわE,Tank top of the world,あつまれ☆パーティーピーポー,ハッピーウェディング前ソング", artist: "たつしくる", category: "orange" },
    { title: "ちゅ、多様性,瞬間センチメンタル", artist: "Fumpy", category: "orange" },
    { title: "かくれんぼ,impulse", artist: "MAD BATTERS", category: "orange" },
    { title: "トウキョウシャンディランデヴ", artist: "シャッフルA", category: "orange" },
    { title: "HE IS MINE,愛の標識,インフェルノ,Mela!", artist: "センサーシップ", category: "orange" },
    { title: "SPECIALS", artist: "逆ら番", category: "orange" },
    { title: "ロビンソン", artist: "キラキラ共和国", category: "orange" },
    { title: "stardom", artist: "未定", category: "orange" },
    { title: "ホワイトノイズ", artist: "skept", category: "orange" },
    { title: "青春コンフリクト,DAYBREAK FRONTLINE", artist: "IMO", category: "orange" },
    { title: "秒針を噛む", artist: "未定", category: "orange" },
    { title: "Rapport", artist: "未定", category: "orange" },
    { title: "青のすみか,Thee Beginning", artist: "coincidence", category: "orange" },
    { title: "群青讃歌,アカシア", artist: "のこったーず", category: "red" },
    { title: "シンデレラボーイ,DENKOUSEKKA,女神", artist: "からあげどっぐ", category: "red" },
    { title: "バトンロード,栞", artist: "シークレッツ", category: "red" },
    { title: "レイメイ", artist: "シリウス", category: "red" },
    { title: "テレキャスタービーボーイ", artist: "照照様", category: "red" },
    { title: "God knows...,ギターと孤独と青い惑星", artist: "KOF団", category: "red" },
    { title: "お勉強しといてよ", artist: "はくちゅうむ", category: "red" },
    { title: "快晴", artist: "Gnu Brain", category: "red" },
    { title: "StaRt", artist: "いいえ", category: "red" },
    { title: "PAiNT it BLACK", artist: "鉄腕BiSH", category: "red" },
    { title: "ベノム,ヒバナ", artist: "非力ハムスター", category: "red" },
    { title: "くらべられっ子", artist: "未定", category: "red" },
    { title: "絆の奇跡", artist: "未定", category: "red" },
    { title: "夕暮れ沿い、", artist: "未定", category: "red" },
    { title: "未定", artist: "未定", category: "red" },
    { title: "灼熱にて純情", artist: "未定", category: "red" },
    { title: "曖昧劣情lover", artist: "未定", category: "red" },
    { title: "Stand out fit in", artist: "未定", category: "red" },
    { title: "心做し,ただ声一つ", artist: "渦潮ぽてと+", category: "orange" },
    { title: "HANABI", artist: "Bocci", category: "orange" },
    { title: "未定", artist: "霞草", category: "orange" },
    { title: "欲望に満ちた少年団", artist: "Who's ", category: "orange" },
    { title: "灰色と青", artist: "Amber", category: "orange" },
    { title: "春を待つ feat.倚水", artist: "無", category: "red" },
    { title: "未定", artist: "未定", category: "red" },
    { title: "part of me", artist: "未定", category: "red" },
    { title: "なんか", artist: "未定", category: "red" },


    
    // 他の曲も同様に追加
];

// HTMLに曲のデータを反映する関数を定義
function renderTimetable() {
    const timetableContainer = document.getElementById('timetable-container');
    songs.forEach(song => {
        const cell = document.createElement('div');
        cell.className = `timetable-cell ${song.category}`;
        cell.innerHTML = `<p>${song.artist} - ${song.title}</p>`;
        timetableContainer.appendChild(cell);
    });
}

// ページが読み込まれたときに曲表を生成
window.onload = function() {
    renderTimetable();
};
