<template>
  <div class="main-card">
    <div class="description">
      <div class="subtitle">What's your opinion on</div>
      <span class="name">Pope Francis?</span>
      <div class="detail">
        He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
      </div>
      <div class="wiki">
        <img alt="Wiki icon" src="../assets/icons/wiki.png" >
        <a href="#">More information</a>
      </div>
      <div class="veredict">
        What's your veredict
      </div>
    </div>
    <div class="actions">
      <div class="action primary">
        <img alt="Up" src="../assets/icons/thumbs-up.png" >
      </div>
      <div class="action secondary">
        <img alt="Down" src="../assets/icons/thumbs-down.png" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCard',
}
</script>

<style lang="scss" scoped>

.main-card {
  color: white;
  background-image: linear-gradient(0deg, rgba(51,51,51,0) 0%, rgba(51,51,51,0.5294117647058824) 100%);
  margin-top: 6rem;
  width: 50%;
}

.description {
  padding: 2rem;
  text-align: left;

  .subtitle {
    font-size: 16px;
  }

  .name {
    font-size: 60px;
  }

  .detail {
    margin-top: 1rem;
    font-size: 21px;
  }

  .wiki {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-size: 14px;

    a {
      color: white;
      margin-left: 5px;
    }
  }

  .veredict {
    margin-top: 3rem;
    font-size: 20px;
    font-weight: 700;
  }
}

.actions {
  display: flex;

  .action {
    cursor: pointer;
    width: 50%;
    padding: 0.7rem;
  }
}

</style>
