<template>
  <div class="home">
    <MainBanner />
    <div class="components">
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
import SubmitPerson from '@/components/SubmitPerson.vue';
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
.components {
  padding: 2rem 10rem;

  .title-separator {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
    font-size: 40px;
    color: #333333;
    font-weight: 300;
  }
}

</style>
