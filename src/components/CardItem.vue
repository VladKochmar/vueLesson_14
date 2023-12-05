<template>
  <div class="card">
    <img :src="cardData.imgSrc" class="card__image" />
    <h4 class="card__title">{{ cardData.title }}</h4>
    <slot
      ><p>{{ cardData.price }}грн</p></slot
    >
    <button class="card__button">Купити</button>
  </div>
</template>

<script>
export default {
  name: 'CardItem',

  props: {
    cardData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 0.3125rem;
  border: 2px solid green;
  padding: 1.25rem;
  display: grid;
  gap: 0.625rem 0;
  // .card__image
  &__image {
    max-width: 12.5rem;
  }
  // .card__title
  &__title {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  // .card__button
  &__button {
    cursor: pointer;
    color: blue;
    border: 2px solid blue;
    padding: 0.625rem 0.9375rem;
    transition: all 0.3s ease 0s;
    @media (any-hover: hover) {
      &:hover {
        color: #fff;
        background-color: blue;
      }
    }
  }
}
</style>
