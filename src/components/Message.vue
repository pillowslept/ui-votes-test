<template>
  <div class="message flex-between-center">
    <div class="text-container flex-between-center">
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
    </div>
    <BaseImage class="pointer" title="Close" icon="close" />
  </div>
</template>

<script>
import BaseImage from '@/components/BaseImage';

export default {
  name: 'Message',
  components: {
    BaseImage,
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.message {
  padding: 1rem;
  background-color: #ebebeb;
}

.text-container {
  color: $main-color;
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
  width: 75%;
  font-size: 15px;
  font-weight: 300;
  text-align: left;
}

@media (max-width: 1200px) {
  .title {
    font-size: 15px;

    .strong {
      font-size: 25px;
    }
  }

  .description {
    font-size: 14px;
  }
}

@media (max-width: 800px) {
  .title {
    font-size: 12px;

    .strong {
      font-size: 18px;
    }
  }

  .description {
    font-size: 10px;
  }
}

@media (max-width: 700px) {
  .text-container {
    flex-direction: column;

    .title {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .description {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .text-container {
    .title {
      width: 90%;
    }
  }
}
</style>
