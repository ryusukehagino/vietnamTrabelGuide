
import scrollTo from './scrollTo';

// スムーススクロール
const smoothScroll = () => {
    // hrefに「#」を含むaタグを全て取得
    const smoothScrollTrigger = document.querySelectorAll('a[href*="#"]');

    // ロード・リサイズ時に実行
    const doWhenLoaded = () => {
        for (let i = 0; i < smoothScrollTrigger.length; i++) {
            const trigger = smoothScrollTrigger[i];
            const href = trigger.getAttribute('href'); // hrefを取得
            
            // aタグにそれぞれクリックイベントを設定
            trigger.addEventListener('click', (e) => {
                let targetPos; //スクロール位置
                
                // ターゲットの位置を取得
                if (href === '#') {
                    targetPos = 0; //「#」のみの場合はTOPに移動
                } else {
                    const targetEl = document.getElementById(href.split('#')[1]); // 遷移先の要素を取得
                    if (!targetEl) return; //ページ内に対象要素がない場合は終了

                    const rectTop = targetEl.getBoundingClientRect().top; // 対象要素ブラウザからの高さを取得
                    targetPos = rectTop + window.scrollY; //最終的な位置の計算  
                }
    
                // スクロール
                if (targetPos !== undefined) {
                    e.preventDefault(); // リンクの遷移を無効化
                    scrollTo(targetPos);
                }
            });
        }
    }

    window.addEventListener('load', doWhenLoaded);
    window.addEventListener('resize', doWhenLoaded);
}

export default smoothScroll