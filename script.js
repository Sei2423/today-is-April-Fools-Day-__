document.addEventListener('DOMContentLoaded', function() {
    // 今日の日付を取得
    const today = new Date();
    // 現在の年のエイプリルフールの日付を設定
    let aprilFoolsDay = new Date(today.getFullYear(), 3, 1); // 4月は0から始まるため、3を使用

    // 今日が4月1日より前の日付の場合、去年のエイプリルフールを設定
    if (today < aprilFoolsDay) {
        aprilFoolsDay.setFullYear(aprilFoolsDay.getFullYear() - 1);
    }

    // エイプリルフールから今日までの日数を計算
    const timeDifference = today - aprilFoolsDay;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

    // 結果を表示
    document.getElementById('days-count').textContent = `エイプリルフール${daysDifference}日目`;
});
