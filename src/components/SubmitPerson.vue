<template>
  <div class="submit">
    <div class="informaiton-content">
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
.submit {
  background: url('../assets/icons/banner-layer.png') no-repeat;
  background-position: center;
  background-size: auto auto;
}

.informaiton-content {
  padding: 0.5rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #ffffff;
  opacity: 0.8;
}

.description {
  width: 70%;
  width: 733px;
  font-size: 30px;
  font-weight: 300;
  text-align: left;
  color: #333333;
}

.button-action {
  padding: 10px 25px;
}
</style>
