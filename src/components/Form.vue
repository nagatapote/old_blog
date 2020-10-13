<template>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <label>Your Name: <input type="text" name="name" /></label>
    <label>Your Email: <input type="email" name="email" /></label>
    <label>Message: <textarea name="message"></textarea></label>
    <button type="submit">Send</button>
  </form>
</template>
