<template>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <label>Your Name: <input type="text" name="name" /></label>
    <label>Your Email: <input type="email" name="email" /></label>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
    <label>Message: <textarea name="message"></textarea></label>
    <button type="submit">Send</button>
  </form>
</template>
