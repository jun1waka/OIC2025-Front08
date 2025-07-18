/**
 * JavaScript 30本ノック
 *
 * このファイルには、JavaScriptの基本を学ぶための30個の課題が含まれています。
 * 各課題は `challenges` 配列にオブジェクトとして格納されています。
 * ブラウザで index.html を開くと、各課題の実行結果が画面に表示されます。
 */

// 即時実行関数でグローバルスコープの汚染を防ぎます
(function() {
    'use strict';

    // 課題を格納する配列
    const challenges = [
        // 1. Hello Worldの表示
        {
            title: '1. Hello Worldの表示',
            func: () => {
                return 'Hello, World!';
            }
        },

        // 2. 数値の足し算
        {
            title: '2. 数値の足し算',
            func: () => {
                const num1 = 10;
                const num2 = 5;
                return `${num1} + ${num2} = ${num1 + num2}`;
            }
        },

        // 3. 文字列の結合
        {
            title: '3. 文字列の結合',
            func: () => {
                const str1 = 'こんにちは';
                const str2 = 'JavaScript';
                return `${str1}、${str2}！`;
            }
        },

        // 4. 定数の利用
        {
            title: '4. 定数の利用',
            func: () => {
                const TAX_RATE = 1.1;
                const price = 1000;
                return `価格${price}円の税込価格は${price * TAX_RATE}円です。`;
            }
        },

        // 5. 配列の作成と要素の取得
        {
            title: '5. 配列の作成と要素の取得',
            func: () => {
                const fruits = ['りんご', 'バナナ', 'みかん'];
                return `配列の2番目の要素は「${fruits[1]}」です。`;
            }
        },

        // 6. オブジェクトの作成とプロパティの取得
        {
            title: '6. オブジェクトの作成とプロパティの取得',
            func: () => {
                const user = {
                    name: '山田太郎',
                    age: 28,
                    job: 'エンジニア'
                };
                return `名前: ${user.name}, 年齢: ${user.age}`;
            }
        },

        // 7. if/else文による条件分岐
        {
            title: '7. if/else文による条件分岐',
            func: () => {
                const age = 20;
                let message;
                if (age >= 20) {
                    message = '成人です。';
                } else {
                    message = '未成年です。';
                }
                return `年齢が${age}歳なので、${message}`;
            }
        },

        // 8. forループによる繰り返し処理
        {
            title: '8. forループによる繰り返し処理',
            func: () => {
                let result = '1から5までの数字: ';
                for (let i = 1; i <= 5; i++) {
                    result += i + ' ';
                }
                return result.trim();
            }
        },

        // 9. 配列の全要素を出力
        {
            title: '9. 配列の全要素を出力',
            func: () => {
                const colors = ['赤', '青', '緑'];
                let result = '色のリスト:\n';
                colors.forEach(color => {
                    result += `- ${color}\n`;
                });
                return result.trim();
            }
        },

        // 10. FizzBuzz問題
        {
            title: '10. FizzBuzz問題',
            func: () => {
                let result = '';
                for (let i = 1; i <= 15; i++) {
                    if (i % 15 === 0) {
                        result += 'FizzBuzz ';
                    } else if (i % 3 === 0) {
                        result += 'Fizz ';
                    } else if (i % 5 === 0) {
                        result += 'Buzz ';
                    } else {
                        result += i + ' ';
                    }
                }
                return result.trim();
            }
        },

        // 11. 関数の定義と呼び出し
        {
            title: '11. 関数の定義と呼び出し',
            func: () => {
                function greet() {
                    return 'こんにちは！';
                }
                return greet();
            }
        },
        
        // 12. 引数を持つ関数
        {
            title: '12. 引数を持つ関数',
            func: () => {
                function greetUser(name) {
                    return `${name}さん、こんにちは！`;
                }
                return greetUser('鈴木');
            }
        },

        // 13. 戻り値を持つ関数
        {
            title: '13. 戻り値を持つ関数',
            func: () => {
                function add(a, b) {
                    return a + b;
                }
                const sum = add(5, 3);
                return `5 + 3 の計算結果は ${sum} です。`;
            }
        },

        // 14. 配列の要素数を取得
        {
            title: '14. 配列の要素数を取得',
            func: () => {
                const animals = ['犬', '猫', '鳥', '魚'];
                return `動物の数は ${animals.length} 匹です。`;
            }
        },

        // 15. 配列に要素を追加 (push)
        {
            title: '15. 配列に要素を追加 (push)',
            func: () => {
                const numbers = [1, 2, 3];
                const original = `元の配列: [${numbers.join(', ')}]`;
                numbers.push(4);
                const modified = `push後の配列: [${numbers.join(', ')}]`;
                return `${original}\n${modified}`;
            }
        },
        
        // 16. 配列の最後の要素を削除 (pop)
        {
            title: '16. 配列の最後の要素を削除 (pop)',
            func: () => {
                const numbers = [1, 2, 3, 4];
                const original = `元の配列: [${numbers.join(', ')}]`;
                const popped = numbers.pop();
                const modified = `pop後の配列: [${numbers.join(', ')}]`;
                return `${original}\n削除された要素: ${popped}\n${modified}`;
            }
        },

        // 17. for...ofループによる配列処理
        {
            title: '17. for...ofループによる配列処理',
            func: () => {
                const vegetables = ['トマト', 'きゅうり', 'なす'];
                let result = '野菜リスト:\n';
                for (const vegetable of vegetables) {
                    result += `- ${vegetable}\n`;
                }
                return result.trim();
            }
        },

        // 18. 配列の各要素を2倍にする (map)
        {
            title: '18. 配列の各要素を2倍にする (map)',
            func: () => {
                const numbers = [1, 2, 3, 4, 5];
                const doubled = numbers.map(num => num * 2);
                return `[${numbers.join(', ')}] を2倍にすると [${doubled.join(', ')}]`;
            }
        },

        // 19. 配列から奇数の要素のみを抽出 (filter)
        {
            title: '19. 配列から奇数を抽出 (filter)',
            func: () => {
                const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                const odds = numbers.filter(num => num % 2 !== 0);
                return `[${numbers.join(', ')}] の中の奇数は [${odds.join(', ')}]`;
            }
        },

        // 20. 配列の全要素を合計する (reduce)
        {
            title: '20. 配列の全要素を合計 (reduce)',
            func: () => {
                const numbers = [10, 20, 30, 40];
                const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                return `[${numbers.join(', ')}] の合計は ${sum}`;
            }
        },

        // 21. オブジェクトのプロパティを変更
        {
            title: '21. オブジェクトのプロパティを変更',
            func: () => {
                const book = { title: '吾輩は猫である', author: '夏目漱石', price: 500 };
                const original = `変更前: ${book.price}円`;
                book.price = 600;
                const modified = `変更後: ${book.price}円`;
                return `${original}\n${modified}`;
            }
        },

        // 22. オブジェクトに新しいプロパティを追加
        {
            title: '22. オブジェクトにプロパティを追加',
            func: () => {
                const person = { name: '田中' };
                const original = `追加前: ${Object.keys(person).join(', ')}`;
                person.age = 30;
                const modified = `追加後: ${Object.keys(person).join(', ')}`;
                return `${original}\n${modified}\n追加されたプロパティ: age=${person.age}`;
            }
        },

        // 23. 文字列の長さを取得
        {
            title: '23. 文字列の長さを取得',
            func: () => {
                const text = 'JavaScript';
                return `「${text}」の長さは ${text.length} 文字です。`;
            }
        },

        // 24. 文字列を逆にする
        {
            title: '24. 文字列を逆にする',
            func: () => {
                const text = 'abcdef';
                const reversed = text.split('').reverse().join('');
                return `「${text}」を逆にすると「${reversed}」`;
            }
        },

        // 25. 2つの数値のうち大きい方を返す関数
        {
            title: '25. 大きい方の数値を返す',
            func: () => {
                function getMax(a, b) {
                    return Math.max(a, b);
                }
                const num1 = 18;
                const num2 = 42;
                return `${num1}と${num2}では、${getMax(num1, num2)}の方が大きい。`;
            }
        },

        // 26. 数値が偶数か奇数かを判定する関数
        {
            title: '26. 偶数か奇数かを判定',
            func: () => {
                function checkEvenOrOdd(num) {
                    return num % 2 === 0 ? '偶数' : '奇数';
                }
                const num1 = 7;
                const num2 = 10;
                return `${num1}は${checkEvenOrOdd(num1)}です。\n${num2}は${checkEvenOrOdd(num2)}です。`;
            }
        },

        // 27. 1から100までの数値を合計する
        {
            title: '27. 1から100までの合計',
            func: () => {
                let sum = 0;
                for (let i = 1; i <= 100; i++) {
                    sum += i;
                }
                return `1から100までを合計すると ${sum} です。`;
            }
        },

        // 28. 九九の表を生成
        {
            title: '28. 九九の表を生成 (5の段まで)',
            func: () => {
                let table = '';
                for (let i = 1; i <= 5; i++) { // 見やすくするため5の段まで
                    for (let j = 1; j <= 9; j++) {
                        table += `${i}x${j}=${(i*j).toString().padStart(2, ' ')} | `;
                    }
                    table += '\n';
                }
                return table.trim();
            }
        },
        
        // 29. 簡単な電卓機能（switch文）
        {
            title: '29. 簡単な電卓機能（switch文）',
            func: () => {
                function calculate(operator, a, b) {
                    switch (operator) {
                        case '+': return a + b;
                        case '-': return a - b;
                        case '*': return a * b;
                        case '/': return b !== 0 ? a / b : 'ゼロ除算エラー';
                        default: return '無効な演算子';
                    }
                }
                const op = '*';
                const n1 = 7, n2 = 6;
                return `${n1} ${op} ${n2} = ${calculate(op, n1, n2)}`;
            }
        },

        // 30. DOM操作：ボタンクリックでテキストを変更
        {
            title: '30. DOM操作：ボタンクリックでテキスト変更',
            func: (cardElement) => {
                // この課題は特殊で、HTML要素を直接操作します
                const resultDiv = cardElement.querySelector('.result');
                
                // 初期テキストとボタンを設定
                const textElement = document.createElement('p');
                textElement.id = 'dom-text';
                textElement.textContent = '下のボタンを押してください。';
                
                const button = document.createElement('button');
                button.textContent = 'テキスト変更';
                button.className = 'dom-button';
                
                // addEventListenerを使用してイベントを登録
                button.addEventListener('click', () => {
                    const targetText = document.getElementById('dom-text');
                    targetText.textContent = 'テキストが変更されました！';
                    targetText.style.color = '#67e8f9'; // cyan-300
                    targetText.style.fontWeight = 'bold';
                });
                
                // 結果表示エリアをクリアして新しい要素を追加
                resultDiv.innerHTML = '';
                resultDiv.appendChild(textElement);
                resultDiv.appendChild(button);
                
                // この関数は表示用のテキストを返さない
                return null; 
            }
        }
    ];

    // 結果を表示するコンテナ
    const resultsContainer = document.getElementById('results-container');

    // スクリプトが読み込まれた時点で、各課題を実行して結果を表示
    if (!resultsContainer) {
        console.error('結果を表示するためのコンテナが見つかりません。');
        return;
    }

    challenges.forEach(challenge => {
        // カード要素を作成
        const card = document.createElement('div');
        card.className = 'challenge-card';

        // タイトルを作成
        const title = document.createElement('h3');
        title.textContent = challenge.title;
        card.appendChild(title);

        // 結果表示エリアを作成
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        card.appendChild(resultDiv);

        // コンテナにカードを追加
        resultsContainer.appendChild(card);
        
        try {
            // 関数を実行して結果を取得
            const result = challenge.func(card);

            // 30番目の課題はDOMを直接操作するので、戻り値がnullの場合は何もしない
            if (result !== null) {
                // 結果がオブジェクトや配列の場合、見やすくするためにJSON文字列に変換
                if (typeof result === 'object' && result !== null) {
                    resultDiv.textContent = JSON.stringify(result, null, 2);
                } else {
                    resultDiv.textContent = result;
                }
            }
        } catch (error) {
            console.error(`課題 "${challenge.title}" でエラーが発生しました:`, error);
            resultDiv.textContent = `エラーが発生しました: ${error.message}`;
            resultDiv.style.color = '#f87171'; // text-red-400
        }
    });

})();
