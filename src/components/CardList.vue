<template>
  <div class="cards">
    <CardListItem class="card" v-bind:person="kanye" />
    <CardListItem class="card" v-bind:person="mark" />
    <CardListItem class="card" v-bind:person="cristina" />
    <CardListItem class="card" v-bind:person="malala" />
  </div>
</template>

<script>
import CardListItem from '@/components/CardListItem';

export default {
  name: 'CardList',
  data () {
    return {
      kanye: {
        name: 'Kanye West',
        area: 'Entertainment',
        likes: 64,
        dislikes: 36,
        cover: 'kanye.png',
      },
      mark: {
        name: 'Mark Zuckerberg',
        area: 'Business',
        likes: 36,
        dislikes: 64,
        cover: 'mark.png',
      },
      cristina: {
        name: 'Cristina Fernández de Kirchner',
        area: 'Politics',
        likes: 36,
        dislikes: 64,
        cover: 'cristina.png',
      },
      malala: {
        name: 'Malala Yousafzai',
        area: 'Entertaimnent',
        likes: 64,
        dislikes: 36,
        cover: 'malala.png',
      },
    }
  },
  components: {
    CardListItem,
  }
}
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(50% - 20px);
  margin-bottom: 40px;
}
</style>
