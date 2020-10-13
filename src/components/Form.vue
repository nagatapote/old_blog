<template>
<div>
  <form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" /> 
  <label>Your Name: <input type="text" name="name" /></label>   
  <label>Your Email: <input type="email" name="email" /></label>
  <label>Message: <textarea name="message"></textarea></label>
  <button type="submit">Send</button>
</form>
</div>
</template>
