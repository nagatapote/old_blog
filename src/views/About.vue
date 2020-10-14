<template>
<div id="about">
<center>
    <h1>Profile</h1>
<div class="circle-image">
</div>
<table border="1">
<tr>
<td>名前</td>
<td>永田浩晃(Hiroaki Nagata)</td>
</tr>
<tr>
<td>あだ名</td>
<td>ぽて(pote)</td>
</tr>
<tr>
<td>趣味</td>
<td>ウクレレ・よさこい</td>
</tr>
<tr>
<td>目標</td>
<td>SIDE FIRE</td>
</tr>
</table>
</center>
</div>
</template>
<style>

.circle-image {
    background-image: url("../assets/profile.png");  /* 表示する画像 */
    width:  160px;       /* ※縦横を同値に */
    height: 160px;       /* ※縦横を同値に */
    border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
    background-position: left top;  /* 横長画像の左上を基準に表示 */
    display: inline-block;
}

</style>
