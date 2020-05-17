<template>
  <div class="person-card" :style="backgroundUrl">
    <div class="card-content">
      <div class="top-data">
        <div class="actual-vote" :class="voteColor">
          <BaseImage title="Actual vote" :icon="isLiked ? 'thumbs-up' : 'thumbs-down'" />
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
          <span v-if="person.description">{{ person.description }}</span>
          <span v-else>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aen</span>
        </div>
        <div class="actions">
          <template v-if="person.description">
            <div class="button-action">Vote again</div>
          </template>
          <template v-else>
            <div class="active button-vote pointer primary">
              <BaseImage title="Up" icon="thumbs-up" />
            </div>
            <div class="button-vote pointer secondary">
              <BaseImage title="Down" icon="thumbs-down" />
            </div>
            <div class="button-action">Vote now</div>
          </template>
        </div>
      </div>
    </div>
    <div class="results">
      <div class="likes primary flex-center" v-bind:style="{ width: person.likes + '%' }">
        <BaseImage title="Up" icon="thumbs-up" /> {{ person.likes }}%
      </div>
      <div class="dislikes secondary flex-center" v-bind:style="{ width: person.dislikes + '%' }">
        <BaseImage title="Down" icon="thumbs-down" /> {{ person.dislikes }}%
      </div>
    </div>
  </div>
</template>

<script>
import BaseImage from '@/components/BaseImage';

export default {
  name: 'CardListItem',
  computed: {
    isLiked() {
      return ((100 * this.person.likes) / (this.person.likes + this.person.dislikes)) > 50;
    },
    voteColor() {
      return this.isLiked ? 'primary' : 'secondary';
    },
    backgroundUrl() {
      return `background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 80%), url('${require(`@/assets/people/${this.person.cover}`)}') no-repeat`;
    },
  },
  props: {
    person: Object,
  },
  components: {
    BaseImage,
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

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
      color: $white-color;
      font-weight: 400;
      margin-bottom: -8px;
    }
  }

  .information {
    width: 90%;
    margin-top: 1rem;
    margin-left: calc(#{$default-margin} + #{$icon-size});
    text-align: left;

    .subtitle {
      color: $white-color;
      font-size: 13px;
    }

    .description {
      margin-top: 1rem;
      font-size: 16px;
      color: $white-color;
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
  color: $white-color;
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
    width: $icon-size;
    padding: 3px 0px;
    text-align: center;
    margin-right: 1rem;

    img {
      width: 25px;
      height: 25px;
    }

    &.active {
      border: 2px solid $white-color;
    }

  }
}

.button-action {
  font-size: 24px;
  padding: 0.4rem 1rem;
  color: $white-color;
  border-color: $white-color;
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
  .person-card {
    min-height: 500px;
  }

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
