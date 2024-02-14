// 曲のデータを定義します
const songs = [
    { title: "曲名1", artist: "バンド名1", category: "red" },
    { title: "曲名2", artist: "バンド名2", category: "green" },
    { title: "曲名3", artist: "バンド名3", category: "blue" },
    { title: "曲名4", artist: "バンド名4", category: "orange" },
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