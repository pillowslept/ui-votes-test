<template>
  <div class="person-card">
    <div class="card-content">
      <div class="actual-vote primary">
        <img alt="Up" src="../assets/icons/thumbs-up.png" >
      </div>
      <div class="information">
        <div class="name">
          {{ person.name }}
        </div>
        <div class="subtitle">
          <b>1 Month ago</b> in {{ person.area }}
        </div>
        <div class="description">
          Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aen
        </div>
        <div class="actions">
          <div class="button-vote primary">
            <img alt="Up" src="../assets/icons/thumbs-up.png" >
          </div>
          <div class="button-vote secondary">
            <img alt="Down" src="../assets/icons/thumbs-down.png" >
          </div>
          <div class="button-action">Vote now</div>
        </div>
      </div>
    </div>
    <div class="results">
      <div class="likes primary flex-center" v-bind:style="{ width: person.likes + '%' }">
        <img alt="Up" src="../assets/icons/thumbs-up.png" > {{ person.likes }}%
      </div>
      <div class="dislikes secondary flex-center" v-bind:style="{ width: person.dislikes + '%' }">
        <img alt="Down" src="../assets/icons/thumbs-down.png" > {{ person.dislikes }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardListItem',
  computed: {
    backgroundCover() {
      return `background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 35%), url('${this.person.cover}') no-repeat`;
    }
  },
  props: {
    person: Object,
  }
}
</script>

<style lang="scss" scoped>

.person-card {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 35%),
    url('../assets/people/mark.png') no-repeat;
  width: 50%;
}

.card-content {
  display: flex;
  align-items: flex-start;
  margin-top: 12rem;

  .actual-vote {
    width: 40px;
    padding: 3px 0px;

    img {
      width: 25px;
      height: 25px;
    }
  }

  .information {
    margin-left: 1rem;
    text-align: left;

    .name {
      font-size: 45px;
      color: #ffffff;
      font-weight: 400;
    }

    .subtitle {
      color: #ffffff;
      font-size: 13px;
    }

    .description {
      margin-top: 1rem;
      font-size: 16px;
      color: #ffffff;
      font-weight: 300;
    }
  }
}

.results {
  display: flex;
  margin-top: 3rem;
  font-size: 29px;
  color: #ffffff;
  font-weight: 300;
  opacity: 0.9;

  .likes, .dislikes {
    display: flex;
    align-items: center;
    padding: 0.3rem;

    img {
      margin-right: 0.5rem;
    }
  }

  .dislikes  {
    justify-content: flex-end;
  }
}

.flex-center {
  display: flex;
  align-items: center;
}

.actions {
  margin-top: 2rem;
  display: flex;
  align-items: center;

  .button-vote {
    cursor: pointer;
    width: 40px;
    padding: 3px 0px;
    text-align: center;
    margin-right: 1rem;

    img {
      width: 25px;
      height: 25px;
    }
  }
}

.button-action {
  font-size: 24px;
  padding: 0.4rem 1rem;
  color: #ffffff;
  border-color: #ffffff;
}

</style>
