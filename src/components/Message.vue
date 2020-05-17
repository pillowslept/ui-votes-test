<template>
  <div class="message">
    <div class="title">
      <span>
        Speak out. Be heard.
      </span>
      <span class="strong">
        Be counted
      </span>
    </div>
    <div class="description">
      <span>
        Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
      </span>
    </div>
    <img alt="Close icon" src="../assets/icons/close.png" >
  </div>
</template>

<script>
export default {
  name: 'Message',
}
</script>

<style lang="scss" scoped>
.message {
  padding: 1rem;
  background-color: #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333333;
}

.title {
  width: 20%;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-weight: 300;

  .strong {
    font-size: 37px;
    font-weight: 700;
  }
}

.description {
  width: 70%;
  width: 733px;
  font-size: 15px;
  font-weight: 300;
  text-align: left;
}

img {
  cursor: pointer;
}
</style>
