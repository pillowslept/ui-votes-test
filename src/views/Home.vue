<template>
  <div class="home">
    <MainBanner />
    <div class="content">
      <Message />
      <div class="title-separator">Votes</div>
      <CardList />
      <SubmitPerson />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import MainBanner from '@/components/MainBanner';
import Message from '@/components/Message';
import CardList from '@/components/CardList';
import SubmitPerson from '@/components/SubmitPerson';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'Home',
  components: {
    MainBanner,
    Message,
    CardList,
    SubmitPerson,
    TheFooter,
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';
$margin: 2rem;
$small-margin: 0.5rem;

.content {
  .title-separator {
    margin-top: $margin;
    margin-bottom: $margin;
    text-align: left;
    font-size: 40px;
    color: $main-color;
    font-weight: 300;
  }
}

@media (max-width: 950px) {
  .content {
    .title-separator {
      font-size: 30px;
      margin-top: $small-margin;
      margin-bottom: $small-margin;
    }
  }
}

</style>
