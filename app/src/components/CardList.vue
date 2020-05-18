<template>
  <div class="cards">
    <CardListItem
      v-for="person in persons"
      v-bind:key="person.id"
      class="card"
      v-bind:person="person"
    />
  </div>
</template>

<script>
import CardListItem from '@/components/CardListItem';
import personData from '@/json/data.json';

export default {
  name: 'CardList',
  data () {
    return {
      persons: personData,
    };
  },
  components: {
    CardListItem,
  }
};
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

@media (max-width: 700px) {
  .cards {
    justify-content: center;
  }

  .card {
    width: 80%;
  }
}

@media (max-width: 500px) {
  .card {
    width: 100%;
  }
}
</style>
