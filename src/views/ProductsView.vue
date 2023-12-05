<template>
  <main-master-page>
    <nav>
      <router-link :to="{ name: 'products-filter' }">Фільтр</router-link> |
      <router-link :to="{ name: 'product-editor' }">Додати товар</router-link>
    </nav>
    <router-view />
    <h1>Оберіть продукти</h1>
    <div class="list">
      <card-item v-for="product in filteredProductsList" :key="product.id" :card-data="product" />
    </div>
  </main-master-page>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductsView',

  components: {
    MainMasterPage,
    CardItem,
  },

  computed: {
    ...mapGetters('products', ['filteredProductsList']),
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 0.625rem;
  & > * {
    min-width: 15rem;
  }
}
</style>
