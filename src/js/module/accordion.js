// アコーディオン
const accordion = () => {
    const triggerList = document.querySelectorAll('.js_accordion_trigger');

    // アコーディオンのトリガーが存在しない場合処理しない
    if (!triggerList.length) return;

    // トリガーをクリックした時の処理
    const doWhenClicked = (e) => {
        const trigger = e.target; //トリガー
        const target = trigger.nextElementSibling; //アコーディオン中身

        // 次の要素がjs_accordion_bodyクラスを持っていない場合は処理しない
        if (!target.classList.contains('js_accordion_body')) return;

        // 開閉
        if (!target.classList.contains('is_active')) {
            open(trigger, target);
        } else {
            close(trigger, target);
        }
    }

    // トリガーにクリックイベントを設定
    triggerList.forEach(el => el.addEventListener('click', doWhenClicked));
}

// アコーディオンを開く
const open = (trigger, target) => {
    const targetH = target.scrollHeight; //アコーディオン中身の高さ
    trigger.classList.add('is_active');
    target.classList.add('is_active');
    target.style.height = `${targetH}px`;
}

// アコーディオンを閉じる
const close = (trigger, target) => {
    trigger.classList.remove('is_active');
    target.classList.remove('is_active');
    target.style.height = '0';
}

export default accordion;
export { open, close };