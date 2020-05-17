<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

body {
  margin: 0;
}

#app {
  margin: 0;
  font-family: "Lato";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.content {
  padding: 2rem 10rem;
}

@media (max-width: 1200px) {
  .content {
    padding: 1rem 8rem;
  }
}

@media (max-width: 1000px) {
  .content {
    padding: 1rem 6rem;
  }
}

@media (max-width: 900px) {
  .content {
    padding: 1rem 4rem;
  }
}

@media (max-width: 800px) {
  .content {
    padding: 1rem 1rem;
  }
}
</style>
