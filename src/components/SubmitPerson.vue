<template>
  <div class="submit">
    <div class="description">
      Is there anyone else you would want us to add?
    </div>
    <div class="button-action">Submit a Name</div>
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
.submit {
  background: url('../assets/icons/banner-layer.png') no-repeat;
  background-size: inherit;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333333;
}

.description {
  width: 70%;
  width: 733px;
  font-size: 30px;
  font-weight: 300;
  text-align: left;
  color: #333333;
}
</style>
