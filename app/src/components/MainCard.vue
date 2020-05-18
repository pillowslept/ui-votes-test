<template>
  <div class="main-card">
    <div class="description">
      <div class="information">
        <div class="subtitle">What's your opinion on</div>
        <span class="name">Pope Francis?</span>
      </div>
      <div class="detail">
        He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
      </div>
      <div class="opinion">
        <div class="wiki">
          <BaseImage title="Wiki" icon="wiki" />
          <a href="#">More information</a>
        </div>
        <div class="veredict">
          What's your veredict
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="action pointer primary">
        <BaseImage title="Up" icon="thumbs-up" />
      </div>
      <div class="action pointer secondary">
        <BaseImage title="Down" icon="thumbs-down" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseImage from '@/components/BaseImage';

export default {
  name: 'MainCard',
  components: {
    BaseImage,
  }
};
</script>

<style lang="scss" scoped>

.main-card {
  color: white;
  margin-top: 6rem;
  width: 50%;
  background-color: #4E4C4D;
  opacity: 0.7;
}

.description {
  padding: 2rem;
  text-align: left;

  .subtitle {
    font-size: 16px;
  }

  .name {
    font-size: 60px;
  }

  .detail {
    margin-top: 1rem;
    font-size: 21px;
  }

  .opinion {
    margin-top: 1rem;

    .wiki {
      display: flex;
      align-items: center;
      font-size: 14px;

      a {
        color: white;
        margin-left: 5px;
      }
    }
  }

  .veredict {
    margin-top: 3rem;
    font-size: 20px;
    font-weight: 700;
  }
}

.actions {
  display: flex;

  .action {
    width: 50%;
    padding: 0.7rem;
  }
}

@media (max-width: 1100px) {
  .main-card {
    margin-top: 1rem;
    width: 70%;
  }

  .description {
    padding: 1rem;

    .name {
      font-size: 40px;
    }

    .detail {
      margin-top: 0.1rem;
      font-size: 15px;
    }

    .veredict {
      margin-top: 1rem;
      font-size: 16px;
    }
  }

  .actions {
    .action {
      padding: 0.2rem;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
}

@media (max-width: 950px) {
  .main-card {
    margin-top: 0.5rem;
    width: 100%;
  }

  .description {
    padding: 0.5rem;
  }
}

@media (max-width: 700px) {
  .description {
    .name {
      font-size: 25px;
    }

    .detail {
      font-size: 12px;
    }
  }

  .opinion {
    margin-top: 0.1rem !important;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .veredict {
      margin-top: 0;
    }
  }

  .information {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 500px) {
  .main-card {
    margin-top: 0.2rem;
  }

  .description {
    padding-top: 0.1rem;
  }
}

@media (max-width: 400px) {
  .opinion {
    .wiki, .veredict {
      font-size: 12px !important;
    }
  }

  .description {
    .detail {
      font-size: 10px;
    }
  }
}


</style>
