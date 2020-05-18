<template>
  <div class="footer flex-between-center">
    <div class="left-side">
      <router-link to="/terms-and-conditions">Terms and Conditions</router-link>
      <router-link to="/privacy-policy">Privacy policy</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </div>
    <div class="right-side">
      <span>Follow us</span>
      <BaseImage class="pointer" title="Twitter" icon="twitter" />
      <BaseImage class="pointer" title="Facebook" icon="facebook" />
    </div>
  </div>
</template>

<script>
import BaseImage from '@/components/BaseImage';

export default {
  name: 'TheFooter',
  components: {
    BaseImage,
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.footer {
  font-size: 12px;
  color: $main-color;
  font-weight: 300;
  border-top: 1px dashed #979797;
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
  }
}

@media (max-width: 910px) {
  .footer {
    flex-direction: column;
  }

  .left-side {
    margin-bottom: 1rem;
  }
}
</style>
