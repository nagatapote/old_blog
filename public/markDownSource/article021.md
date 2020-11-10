# Vue と Netlify で問い合わせフォームを作成する方法

## 前提

vue.js v2.6.12

vue cli v4.5.6

node v12.18.4

## 参考サイト

・問い合わせフォームの HTML と CSS

<a href="https://yuyauver98.me/contactform-coding-capok/" target="_blank">https://yuyauver98.me/contactform-coding-capok/</a>

・Netlify Form の使い方

<a href="https://gurutaka-log.com/netlify-nuxt-contact-form" target="_blank">https://gurutaka-log.com/netlify-nuxt-contact-form</a>

## 目的

Netlify Form を使って、お問い合わせフォームを設置したかった。

## 完成物

<a href="https://nagatapote.work/Form" target="_blank">https://nagatapote.work/Form</a>

## 手順

index.html の`<body>`内に以下を追記します。

```html
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
```

参考サイトのお問い合わせフォームに以下を追記しています。
これにより、Netlify Form でお問い合わせを受け取ることができます。

```html
<form name="contact" method="post" netlify data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
</form>
```

以下のコードで、お問い合わせフォームの全ての項目に情報を入力しないと、送信が押せないようにしました。

```javascript
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  computed: {
    valid() {
      if (this.name !== "" && this.email !== "" && this.message !== "") {
        return false;
      } else {
        return true;
      }
    },
  },
};
```

**完成コード**

```html
<template>
  <div>
    <center>
      <h1>Contact</h1>
      <div class="Form">
        <form name="contact" method="post" netlify data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div class="Form-Item">
            <p class="Form-Item-Label">
              <span class="Form-Item-Label-Required">必須</span>氏名
            </p>
            <input
              v-model="name"
              type="text"
              name="name"
              class="Form-Item-Input"
              placeholder="例）山田太郎"
            />
          </div>
          <div class="Form-Item">
            <p class="Form-Item-Label">
              <span class="Form-Item-Label-Required">必須</span>メールアドレス
            </p>
            <input
              v-model="email"
              type="email"
              name="email"
              class="Form-Item-Input"
              placeholder="例）example@gmail.com"
            />
          </div>
          <div class="Form-Item">
            <p class="Form-Item-Label isMsg">
              <span class="Form-Item-Label-Required">必須</span>お問い合わせ内容
            </p>
            <textarea
              v-model="message"
              name="message"
              class="Form-Item-Textarea"
            ></textarea>
          </div>
          <button :disabled="valid" type="submit" class="Form-Btn">
            送信する
          </button>
        </form>
      </div>
    </center>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        message: "",
      };
    },
    computed: {
      valid() {
        if (this.name !== "" && this.email !== "" && this.message !== "") {
          return false;
        } else {
          return true;
        }
      },
    },
  };
</script>

<style>
  .Form {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 40px;
    max-width: 720px;
  }
  @media screen and (max-width: 480px) {
    .Form {
      margin-top: 40px;
    }
  }
  .Form-Item {
    border-top: 1px solid #ddd;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    .Form-Item {
      padding-left: 14px;
      padding-right: 14px;
      padding-top: 16px;
      padding-bottom: 16px;
      flex-wrap: wrap;
    }
  }
  .Form-Item:nth-child(5) {
    border-bottom: 1px solid #ddd;
  }
  .Form-Item-Label {
    width: 100%;
    max-width: 248px;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Label {
      max-width: inherit;
      display: flex;
      align-items: center;
      font-size: 15px;
    }
  }
  .Form-Item-Label.isMsg {
    margin-top: 8px;
    margin-bottom: auto;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Label.isMsg {
      margin-top: 0;
    }
  }
  .Form-Item-Label-Required {
    border-radius: 6px;
    margin-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 48px;
    display: inline-block;
    text-align: center;
    background: #5bc8ac;
    color: #fff;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Label-Required {
      border-radius: 4px;
      padding-top: 4px;
      padding-bottom: 4px;
      width: 32px;
      font-size: 10px;
    }
  }
  .Form-Item-Input {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 48px;
    flex: 1;
    width: 100%;
    max-width: 410px;
    background: #eaedf2;
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Input {
      margin-left: 0;
      margin-top: 18px;
      height: 40px;
      flex: inherit;
      font-size: 15px;
    }
  }
  .Form-Item-Textarea {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 216px;
    flex: 1;
    width: 100%;
    max-width: 410px;
    background: #eaedf2;
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Textarea {
      margin-top: 18px;
      margin-left: 0;
      height: 200px;
      flex: inherit;
      font-size: 15px;
    }
  }
  .Form-Btn {
    border-radius: 6px;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 280px;
    display: block;
    letter-spacing: 0.05em;
    background: #717171;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
  button:valid {
    background-color: #5bc8ac;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    .Form-Btn {
      margin-top: 24px;
      padding-top: 8px;
      padding-bottom: 8px;
      width: 160px;
      font-size: 16px;
    }
  }
</style>
```

以上
