# vue.jsでじゃんけんゲームを作ってみた

## 前提
vue.js v2.6.12

vue cli v4.5.7

node  v12.18.4

## 目的
vue.jsの理解を深めるため。

## 完成物
<a href="https://objective-jepsen-153d71.netlify.app/" target="_blank">https://objective-jepsen-153d71.netlify.app/</a>

## 参考サイト
１．<a href="https://www.actzero.jp/developer/report-19774.html" target="_blank">https://www.actzero.jp/developer/report-19774.html</a>

２．<a href="https://qiita.com/Mitsuzara/items/fccdb17ba14c0c9be20c" target="_blank">https://qiita.com/Mitsuzara/items/fccdb17ba14c0c9be20c</a>

## 完成コード
各説明は、コード内に書いています。

**Game.vue**
```html
<template>
  <div id='Game'>
    <p>じゃんけん！</p>

    <div v-if="pon">
    <img height="100px" v-if="this.bot === 0" src="@/assets/gu.png">
    <img height="100px" v-if="this.bot === 1" src="@/assets/choki.png">
    <img height="100px" v-if="this.bot === 2" src="@/assets/par.png">
    </div>
    /* 相手側の手の画像。v-ifを使って、botの値のよって表示させる画像を分けています。 */

    <div v-if="you">
    <img height="100px" v-if="this.player === 0" src="@/assets/gu.png">
    <img height="100px" v-if="this.player === 1" src="@/assets/choki.png">
    <img height="100px" v-if="this.player === 2" src="@/assets/par.png">
    </div>
    /* 自分側の手の画像。v-ifを使って、playerの値によって表示させる画像を分けています。 */

    <div v-else>
    <img width="150px" src="@/assets/facep.png">
    </div>
    <br>
    /* じゃんけん開始時の表示画像。v-elseでbotとplayerに値が入っていないとき、表示させるようにしています。 */

    <button v-show="shows" v-for="item in items" :key="item.key" @click="select(item.key)">
      <img :src="item.src" height="100px"/>
    </button>
    /* 自分の手の選択ボタン。v-showでボタンを押したら消えるようにしています。v-forで配列を繰り返し、selectで配列のkeyを取得しています。 */

    <p>この勝負…<span v-html="resultText"></span></p>
    /* 勝敗結果を表示します。勝敗によって文字を色分けしているため、{{ resultText }}ではなく、v-htmlを使用しています。 */

    <button v-show="show" @click="retry"><h1>もう一度！</h1></button>
    /* もう一度じゃんけんをするためのボタン。v-showでじゃんけん後のみ表示させるようにしています。 */

  </div>
</template>
```

```javascript
<script>
export default {
  name: 'Game',
  data () {
    return {
      items: [
        { src: require('@/assets/gu.png'), key: 0 },
        { src: require('@/assets/choki.png'), key: 1 },
        { src: require('@/assets/par.png'), key: 2 }
        /* v-forで表示させる配列(画像と数値)　*/  
      ],   
      resultText: '',
      player: '',
      you: false,
      pon: false,
      show: false,
      shows: true
      /* デフォルトの値です */
    }
  },
  methods: {
    select (key) {
      this.you = true
      this.pon = true
      this.player = key
      this.result()
      this.show = true
      this.shows = false
      /* じゃんけんボタンを押したときに実行するmethodsです。 */
    },
    retry () {
      this.you = false
      this.pon = false
      this.resultText = ''
      this.player = ''
      this.show = false
      this.shows = true
      /* もう１度ボタンを押したときに実行するmethodsです。 */
    },
    result () {
      this.bot = Math.floor(Math.random() * 3)
      switch (((this.player - this.bot + 3) % 3)) {
        case 0:
          this.resultText = '引き分けっ'
          break
        case 1:
          this.resultText = '<span style="color: blue">あなたの負け…</span>'
          break
        case 2:
          this.resultText = '<span style="color: red">あなたの勝ち！</span>'
          break
    　/* じゃんけんボタンを押したときに実行されている、勝敗を決めるmethodsです。
     this.bot = Math.floor(Math.random() * 3)で0〜2の値(相手の手)をランダムで出力しています。*/
      }
    }
  }
}
</script>
```

```html
<style>
button {
  -webkit-appearance: none;
  border-radius: 0;
}
/* スマホブラウザのデフォルトcssを無効にします。iphoneのsafariブラウザで開いたときに、指定したcssが反映されていなかったため。 */

</style>
```

以上
