<template>
  <div class="footer">
    <div class="left-side">
      <router-link to="/terms-and-conditions">Terms and Conditions</router-link>
      <router-link to="/privacy-policy">Privacy policy</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </div>
    <div class="right-side">
      <span>Follow us</span>
      <img alt="Twitter icon" src="../assets/icons/twitter.png" >
      <img alt="Facebook icon" src="../assets/icons/facebook.png" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px dashed gray;
  padding: 2rem 0px;
  margin-top: 1rem;
}

.left-side {
  display: flex;
  align-items: center;

  a {
    color: inherit;
    margin-right: 1.5rem;
  }
}

.right-side {
  display: flex;
  align-items: center;

  img {
    margin-left: 1.5rem;
    cursor: pointer;
  }
}
</style>
