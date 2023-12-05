<template>
  <main-master-page>
    <h1>Оберіть постачальника</h1>
    <div class="list">
      <card-item v-for="supplier in suppliers" :key="supplier.id" :card-data="supplier">
        <div class="icons-list">
          <img v-for="icon in supplier.icons" :key="icon.id" :src="icon.src" class="icon" />
        </div>
      </card-item>
    </div>
    <template #statistics>
      <p>Найбільш популярний: <span>Економ</span></p>
    </template>
  </main-master-page>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'SuppliersView',

  components: {
    MainMasterPage,
    CardItem,
  },

  computed: {
    ...mapGetters('suppliers', ['suppliers']),
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-between;
}
.icons-list {
  display: flex;
  gap: 0 0.625rem;
}
.icon {
  max-width: 3rem;
}

span {
  color: green;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
