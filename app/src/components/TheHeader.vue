<template>
  <div class="nav-container flex-between-center">
    <span class="title">Rule of thumb.</span>
    <div class="menu-actions">
      <router-link to="/past-trials">Past trials</router-link>
      <router-link to="/about">How It Works</router-link>
      <router-link to="/login">Log In / Sign Up</router-link>
      <BaseImage class="pointer" title="Search" icon="search" />
    </div>
  </div>
</template>

<script>
import BaseImage from '@/components/BaseImage';

export default {
  name: 'TheHeader',
  components: {
    BaseImage,
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.nav-container {
  margin-top: 1.2rem;
  color: $white-color;

  .title {
    font-size: 32px;
    font-family: "Lato";
    font-weight: 400;
  }
}

.menu-actions {
  display: flex;
  align-items: center;

  a {
    color: $white-color;
  }
}

@media (max-width: 950px) {
  .nav-container {
    flex-wrap: wrap;
    margin-top: 0.1rem;

    .title {
      font-size: 25px;
    }
  }

  a {
    margin-right: 1rem;
  }

  img {
    width: 22px;
  }
}

</style>
