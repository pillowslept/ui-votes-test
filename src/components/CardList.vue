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
        cover: '../assets/people/kanye.png',
      },
      mark: {
        name: 'Mark Zuckerberg',
        area: 'Business',
        likes: 36,
        dislikes: 64,
        cover: '../assets/people/mark.png',
      },
      cristina: {
        name: 'Cristina Fernández de Kirchner',
        area: 'Politics',
        likes: 36,
        dislikes: 64,
        cover: '../assets/people/cristina.png',
      },
      malala: {
        name: 'Malala Yousafzai',
        area: 'Entertaimnent',
        likes: 64,
        dislikes: 36,
        cover: '../assets/people/malala.png',
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
  width: 48%;
  margin-bottom: 1rem;
}
</style>
