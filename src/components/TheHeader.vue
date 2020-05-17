<template>
  <div class="nav-container">
    <span class="title">Rule of thumb.</span>
    <div class="menu-actions">
      <router-link to="/past-trials">Past trials</router-link>
      <router-link to="/about">How It Works</router-link>
      <router-link to="/login">Log In / Sign Up</router-link>
      <img alt="Search icon" src="../assets/icons/search.png" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
.nav-container {
  margin-top: 1.2rem;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    color: #ffffff;
  }

  img {
    cursor: pointer;
  }
}

</style>
