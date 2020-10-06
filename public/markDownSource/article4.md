# vue.jsとfirebaseで認証機能実装
　

## やってみたこと
***

vue.jsとfirebaseで認証機能を実装してみた

## 理由
***

会社で認証関係の仕事をしているので、気になってやってみた

## 前提
***

vue.jsをインストールしている

firebaseに登録し、プロジェクトを作成している

## 完成物
***

[https://dazzling-hawking-9f2edf.netlify.app](https://dazzling-hawking-9f2edf.netlify.app)

## ■手順
***

### ▼firebase設定
***

![Authentication](./img/article4/Authentication.png)

プロジェクトの左メニューバーの「Authentication」をクリック。

![Authentication](./img/article4/Authentication01.png)

「Sign-in method」の「メール/パスワード」を「有効」にします。

### ▼設定（src/main.jsに追記）
***

```
import firebase from 'firebase'

const config = {
    apiKey: "`***************`",
    authDomain: "`***`.firebaseapp.com",
    databaseURL: "https://`***`.firebaseio.com",
    projectId: "`***`",
    storageBucket: "`***`.appspot.com",
    messagingSenderId: "`********`",
    appId: "`*****************`"
};

firebase.initializeApp(config);
```

中身は、firebaseの以下の場所から確認することができます。

![Authentication](./img/article4/Authentication02.png)

### ▼登録画面（src/components/signup.vue）
***

```
<template>
 <div class="signup">
   <center>
   <table>
     <tr>
       <th>メールアドレス:</th> 
     </tr>
     <tr>
       <td><input type="email" v-model="mailaddress" /></td>
     </tr>
     <tr>
       <th>パスワード</th>
    </tr>
    <tr>
      <td><input type="password" v-model="password" /></td>
    </tr>
    </table></center>
    <button @click="signup">登録</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default{
methods: {
  signup: function() {
    firebase.auth().createUserWithEmailAndPassword(this.mailaddress,this.password)
    .then(user => {
      alert('アカウント登録が完了しました。サインイン画面に飛びます',user.email)
      this.$router.push('/signin')
    })
    .catch(error => {
      alert(error.message)
    })
  }
}
};
</script>
```

登録画面から作成すると、以下firebaseの画面にユーザが追加されます。（firebaseからもユーザの追加が可能です。）

ここに登録があるユーザのみログイン可能となります。

![Authentication](./img/article4/Authentication03.png)

### ▼ログイン画面（src/components/signin.vue）
***

```
<template>
    <div class="signin">
        <center><table>
            <tr>
                <th>メールアドレス：</th>
            </tr>
            <tr>
        <td><input type="email" v-model="mailaddress"/></td>
            </tr>
            <tr>
                <th>パスワード:</th>
            </tr>
            <tr>
                <td><input type="password" v-model="password"/></td>
            </tr>
        </table></center>
        <button @click="login">ログイン</button>
        <p>新しいアカウントを作成しますか？
            <router-link to="/signup">新規登録</router-link>
        </p>
    </div>      
</template>

<script>
import firebase from 'firebase'
export default{
methods: {
    login: function(){
        firebase.auth().signInWithEmailAndPassword(this.mailaddress, this.password).then(
            user => {
            alert('ログイン成功',user.email)
            this.$router.push('/success')
         },
        err => {
            alert(err.message)
        }
        )
    }
}
}
</script>
```

### ▼ログイン成功画面（src/components/success.vue）
***

```
<template>
    <div class='success'>
        <h1 class='mt-5'>
            ログイン済
        </h1>
        <button
            @click='signOut'
            class='btn btn-primary mt-5'
        >SignOut</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'success',
    methods: {
        signOut: function () {
            firebase.auth().signOut().then(() => {
                alert("ログアウト！")
                this.$router.push('/signin')
            })
        }
    }
}
</script>
```

### ▼ログイン成功画面へ直接アクセスできないようにする設定
***

/src/router/index.jsに以下を追記する

```
import firebase from 'firebase'
〜省略〜
,
  {
    path: '/success',
    name: 'Success',
    component: Success,
    meta: { requiresAuth: true } 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {

    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
```

以上

<style>
img {
    border: 5px solid green;
    max-width: 100%;
}
</style>
