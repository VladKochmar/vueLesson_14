<template>
  <main-master-page>
    <template #default>
      <div class="home">
        <h1>Вітаємо</h1>
        <p>Сподіваюсь ви будете чемними і обов'язково щось купите</p>
      </div>
    </template>
    <template #status>
      <div class="owner-info">
        <p>Власник: Баба Галя</p>
        <img :src="ownerImageSrc" alt="Баба Галя" />
      </div>
    </template>
  </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'

export default {
  name: 'HomeView',

  components: {
    MainMasterPage,
  },

  computed: {
    ownerImageSrc() {
      return 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34199/grandmother-old-mother-clipart-md.png'
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
}
.owner-info {
  display: flex;
  gap: 0 1.25rem;
  align-items: center;
  img {
    max-width: 3.75rem;
  }
}
</style>
