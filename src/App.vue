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

.primary {
  background-color: rgba(28,187,180,0.9019607843137255);
}

.secondary {
  background-color: rgba(255,173,29,0.9019607843137255);
}

a {
  text-decoration: none;
  margin-right: 3rem;

  &:hover {
    text-decoration: underline;
  }
}

.button-action {
  cursor: pointer;
  font-size: 20px;
  color: #333333;
  font-weight: 400;
  text-align: center;
  background-color: rgba(255,255,255,0.14901960784313725);
  border: 3px solid #333333;
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
