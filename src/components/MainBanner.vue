<template>
  <div class="main-banner">
    <div class="content">
      <TheHeader />
      <MainCard />
    </div>
    <div class="closing">
      <div class="in">
        Closing in
      </div>
      <div class="days">
        <b>22</b> days
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import MainCard from '@/components/MainCard';

export default {
  name: 'MainBanner',
  components: {
    TheHeader,
    MainCard,
  }
}
</script>

<style lang="scss" scoped>
.main-banner {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 35%),
    url('../assets/people/pope.png') no-repeat;
  background-size: 100% auto;
}

.closing {
  margin-top: 2rem;
  display: flex;
  font-weight: 400;

  .in {
    text-transform: uppercase;
    font-size: 13px;
    color: #ffffff;
    text-align: right;
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1rem;
    background-color: rgba(112,112,112,0.30196078431372547);
  }

  .days {
    font-size: 37px;
    color: #464646;
    text-align: left;
    width: 70%;
    padding-left: 1rem;
    background-color: rgba(255,255,255,0.7019607843137254);
  }
}

@media (max-width: 750px) {
  .closing {
    margin-top: 0.2rem;

    .in {
      font-size: 10px;
    }

    .days {
      font-size: 25px;
    }
  }
}

</style>
