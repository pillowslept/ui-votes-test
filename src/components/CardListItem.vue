<template>
  <div class="person-card" :style="backgroundUrl">
    <div class="card-content">
      <div class="top-data">
        <div class="actual-vote primary">
          <img alt="Up" src="../assets/icons/thumbs-up.png" >
        </div>
        <div class="name">
          {{ person.name }}
        </div>
      </div>
      <div class="information">
        <div class="subtitle">
          <b>1 Month ago</b> in {{ person.area }}
        </div>
        <div class="description">
          Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aen
        </div>
        <div class="actions">
          <div class="active button-vote primary">
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
    backgroundUrl() {
      return `background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 35%), url('${require(`@/assets/people/${this.person.cover}`)}') no-repeat`;
    },
  },
  props: {
    person: Object,
  }
}
</script>

<style lang="scss" scoped>
$icon-size: 40px;
$default-margin: 1rem;

.person-card {
  background-size: 100% auto;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 90%;

  .top-data {
    display: flex;

    .actual-vote {
      width: $icon-size;
      padding: 3px 0px;
      align-self: flex-end;

      img {
        width: 25px;
        height: 25px;
      }
    }

    .name {
      font-size: 45px;
      width: calc(100% - #{$icon-size});
      margin-left: 1rem;
      text-align: left;
      color: #ffffff;
      font-weight: 400;
    }
  }

  .information {
    width: 90%;
    margin-top: 1rem;
    margin-left: calc(#{$default-margin} + #{$icon-size});
    text-align: left;

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
  align-self: flex-end;
  width: 100%;
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
  flex-wrap: wrap;

  .button-vote {
    cursor: pointer;
    width: $icon-size;
    padding: 3px 0px;
    text-align: center;
    margin-right: 1rem;

    img {
      width: 25px;
      height: 25px;
    }

    &.active {
      border: 2px solid #fffffF;
    }

  }
}

.button-action {
  font-size: 24px;
  padding: 0.4rem 1rem;
  color: #ffffff;
  border-color: #ffffff;
  border-width: 1px;
}

@media (max-width: 1100px) {
  .card-content {
    .top-data {
      .name {
        font-size: 35px;
      }
    }
  }
}

@media (max-width: 500px) {
  .results {
    img {
      width: 25px;
    }
  }
}

@media (max-width: 340px) {
  .actions {
    margin-top: 1rem;

    .button-action {
      margin-top: 1rem;
    }
  }
}
</style>
