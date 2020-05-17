<template>
  <img :alt="title" :title="title" :src="src" >
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    title: String,
    icon: String,
  },
  computed: {
    src() {
      return require(`@/assets/icons/${this.icon}.png`);
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
