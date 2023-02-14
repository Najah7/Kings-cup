# Kings cup
Project for Final Project of CS50

# Link
[Kings cup](https://kings-cup-two.vercel.app/)

# Demonstration
https://www.youtube.com/embed/NKrSDzT5ZwY

# Kings Cupのルール

### 1. トランプを引いて、出たカードの数字に対応した罰ゲームを
### 2. ４枚のKingがすべて出たらゲーム終了

<br>

## 前提
- ### 基本的に、飲みの席で行うと仮定して作ったゲームである。
- ### ルールに関してはお酒の強さで適宜変えることをお勧めする。
- ### 下記のルールでやる場合は小さめコップをお勧めする。

<br>

## トランプに対応するルール  (My original)
1. 右隣の人が飲むのを止めるまで飲み続ける。
1. カードを引いた人が2人指名。指名された２人が飲む。
1. 自分一人で飲む。
1. 女子だけ飲む。
1. カードを引いた人の両隣が飲む。
1. 男子だけ飲む。
1. 手あげるの一番遅かった人が飲む。（ニョッキゲーム的な感じ）
1. 相棒（相棒を決めれる。その人が飲むときは一緒に飲む必要がある。ゲームが終了まで継続（∞に続くだから８））
1. 好きな飲みゲーム指定。みんなでゲームをし、負けた人が飲む。
1. 山手線。負けた人が飲む。
1. 他の数字の中から１つ選ぶ。選ばれた数字の罰ゲーム実行。
1. クエスチョンマスター（引いた人以外は、このカード引いた人の質問に答えてはいけない。答えてしまったら、一杯飲む。次の人がクイーンを引くまで継続）
1. パス（飲む必要なし）。4枚目出たらゲーム終了。しかし、4枚目の人は２杯飲む。<br>
1. Joker：２杯飲む

# 開発の背景情報

## 概要
- 飲み会で使えるゲームのWebアプリ

## 対象ユーザー
- 楽しくない飲み会（ハズレ飲み会）に参加してしまった日本人。

## 解決したい課題
1. ハズレ飲み会に参加してしまったときの「どうしよう」、「どう盛り上げよう」と悩む状態
1. ハズレ飲み会に参加してしまったという後々に感じる残念感

## 目的（何を作るか）
- 飲みの席で使えるゲーム(<strong>「Kings cup」</strong>というトランプゲーム)

## 動機
- 21歳になり、成人して1年ちょっと経ち、様々な飲み会に参加する中で、何回かに一度、ハズレ飲み会に参加してまう。<br>
そして、これをどうにか解決する一つの手段としてこのゲームをつくることに決めた。<br>
なので、ユーザーは自分自身でもあり、自分と同じように思っている人を想定して作る。

## 背景（自分なりのハズレ飲み会への考え）

### ハズレ飲み会の定義（原因）
- 喋る共通の話題がない
- ノリが合わない
- 全体的にかなりshyでみんなあまり話さない
- 上記の３つなどが原因で余計気を使って頑張る必要が...

### 解決策
- そもそも飲み会を避ける
- ゲームをする
- コミュニケーションをスキル考え、研究し、練習を重ね、どんな相手でも楽しくコミュニケーションをとれるようにする

### まとめ（解決策に対する）
根本的な解決には、コミュニケーション能力を高めることがベストな解決策だと考える。<br>
しかし、研究と練習をするのには、時間がかかり、センスなども関係してくると考える。<br>
そのため、すぐにできる対応（応急処置）という形でゲームを使うのはいい選択であると思う。<br>
そして、ゲームには、道具を使うゲーム（トランプやジェンガなど）と、使わないゲーム（しりとり、山手線ゲーム）などがある。<br>
道具を使わないゲームも良いが、ルール覚える必要がなく、道具に進行をまかせられるので（進行を任せられる分、会話やゲーム自体に入り込める）、道具を使うゲームをおすすめする。<br>
まとめると、ゲームをすることでハズレ飲み会をハズレではなくさせる可能性がある。<br>なので、ゲームをするためのツールを今回のプロジェクトを通して開発して、提供する

