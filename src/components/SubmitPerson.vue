<template>
  <div class="submit">
    <div class="informaiton-content flex-between-center">
      <div class="description">
        Is there anyone else you would want us to add?
      </div>
      <div class="button-action">Submit a Name</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitPerson',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.submit {
  background: url('../assets/icons/banner-layer.png') no-repeat;
  background-position: center;
  background-size: auto auto;
}

.informaiton-content {
  padding: 0.5rem 1rem 1rem;
  height: 100%;
  background-color: $white-color;
  opacity: 0.8;
}

.description {
  width: 70%;
  font-size: 30px;
  font-weight: 300;
  text-align: left;
  color: $main-color;
}

.button-action {
  font-weight: bold;
  padding: 10px 25px;
}

@media (max-width: 1100px) {
  .description {
    font-size: 20px;
  }
}

@media (max-width: 900px) {
  .button-action {
    font-size: 15px;
  }
}

@media (max-width: 600px) {
  .description {
    font-size: 14px;
  }

  .button-action {
    padding: 5px 12px;
    font-size: 12px;
  }
}
</style>
