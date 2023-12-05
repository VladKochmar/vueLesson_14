<template>
  <div class="container">
    <nav><router-link to="/">На головну</router-link></nav>
    <div class="content">
      <slot name="content"> </slot>
    </div>
    <h2>Галерея</h2>
    <div class="gallery">
      <div v-for="image in gallery" :key="image.id" class="gallery__image">
        <img :src="image.src" />
      </div>
    </div>
  </div>
</template>

<script>
import { gallery } from '@/data/gallery.js'

export default {
  name: 'MasterContactRules',

  data() {
    return {
      gallery: gallery,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: start;
}

.content {
  &:not(:last-child) {
    margin-bottom: 3.75rem;
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem 1.25rem;
  // .gallery__image
  &__image {
    position: relative;
    padding-top: 60%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      widows: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
