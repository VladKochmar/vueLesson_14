<template>
  <div>
    <label>
      Введіть назву продукту:
      <input v-model="currentSearchValue" type="text" class="input" />
    </label>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductsFilterView',

  computed: {
    ...mapGetters('products', ['inputValue']),

    currentSearchValue: {
      get() {
        return this.inputValue
      },
      set(newValue) {
        this.setInputValue(newValue)
      },
    },
  },

  methods: {
    ...mapActions('products', ['setInputValue']),
  },
}
</script>

<style lang="scss" scoped>
.input {
  padding: 0.625rem 1.25rem;
}
</style>
