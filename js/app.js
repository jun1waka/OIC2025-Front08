// 即時実行関数でグローバルスコープの汚染を防ぎます
(function() {
    'use strict';

    // 課題を格納する配列
    const challenges = [
        // 1. Hello Worldの表示
        { title: '1. Hello Worldの表示', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 2. 数値の足し算
        { title: '2. 数値の足し算', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 3. 文字列の結合
        { title: '3. 文字列の結合', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 4. 定数の利用
        { title: '4. 定数の利用', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 5. 配列の作成と要素の取得
        { title: '5. 配列の作成と要素の取得', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 6. オブジェクトの作成とプロパティの取得
        { title: '6. オブジェクトの作成とプロパティの取得', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 7. if/else文による条件分岐
        { title: '7. if/else文による条件分岐', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 8. forループによる繰り返し処理
        { title: '8. forループによる繰り返し処理', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 9. 配列の全要素を出力
        { title: '9. 配列の全要素を出力', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 10. FizzBuzz問題
        { title: '10. FizzBuzz問題', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 11. 関数の定義と呼び出し
        { title: '11. 関数の定義と呼び出し', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 12. 引数を持つ関数
        { title: '12. 引数を持つ関数', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 13. 戻り値を持つ関数
        { title: '13. 戻り値を持つ関数', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 14. 配列の要素数を取得
        { title: '14. 配列の要素数を取得', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 15. 配列に要素を追加 (push)
        { title: '15. 配列に要素を追加 (push)', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 16. 配列の最後の要素を削除 (pop)
        { title: '16. 配列の最後の要素を削除 (pop)', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 17. for...ofループによる配列処理
        { title: '17. for...ofループによる配列処理', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 18. 配列の各要素を2倍にする (map)
        { title: '18. 配列の各要素を2倍にする (map)', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 19. 配列から奇数の要素のみを抽出 (filter)
        { title: '19. 配列から奇数を抽出 (filter)', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 20. 配列の全要素を合計する (reduce)
        { title: '20. 配列の全要素を合計 (reduce)', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 21. オブジェクトのプロパティを変更
        { title: '21. オブジェクトのプロパティを変更', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 22. オブジェクトに新しいプロパティを追加
        { title: '22. オブジェクトにプロパティを追加', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 23. 文字列の長さを取得
        { title: '23. 文字列の長さを取得', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 24. 文字列を逆にする
        { title: '24. 文字列を逆にする', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 25. 2つの数値のうち大きい方を返す関数
        { title: '25. 大きい方の数値を返す', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 26. 数値が偶数か奇数かを判定する関数
        { title: '26. 偶数か奇数かを判定', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 27. 1から100までの数値を合計する
        { title: '27. 1から100までの合計', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 28. 九九の表を生成
        { title: '28. 九九の表を生成', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 29. 簡単な電卓機能（switch文）
        { title: '29. 簡単な電卓機能（switch文）', func: () => { 
            /* ここにコードを書いてください */ 
            return ''; 
        }},
        // 30. DOM操作：ボタンクリックでテキストを変更
        { title: '30. DOM操作：ボタンクリックでテキスト変更', func: (cardElement) => { 
            /* ここにコードを書いてください */ 
            // この課題は表示用のテキストを返しません
            return null; 
        }}
    ];

    // --- ここから下は変更しないでください ---
    // 結果を表示するロジック
    const resultsContainer = document.getElementById('results-container');
    if (!resultsContainer) {
        console.error('結果を表示するためのコンテナが見つかりません。');
        return;
    }

    challenges.forEach(challenge => {
        const card = document.createElement('div');
        card.className = 'challenge-card';

        const title = document.createElement('h3');
        title.textContent = challenge.title;
        card.appendChild(title);

        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        card.appendChild(resultDiv);

        resultsContainer.appendChild(card);
        
        try {
            const result = challenge.func(card);
            if (result !== null) {
                if (typeof result === 'object' && result !== null) {
                    resultDiv.textContent = JSON.stringify(result, null, 2);
                } else {
                    resultDiv.textContent = result;
                }
            }
        } catch (error) {
            console.error(`課題 "${challenge.title}" でエラーが発生しました:`, error);
            resultDiv.textContent = `エラーが発生しました: ${error.message}`;
            resultDiv.style.color = '#f87171';
        }
    });

})();