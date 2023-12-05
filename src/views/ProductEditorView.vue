<template>
  <div class="editor">
    <label class="label">
      Назва товару
      <input v-model="productObject.title" type="text" />
    </label>
    <label class="label">
      Ціна
      <input v-model="productObject.price" type="text" />
    </label>
    <label class="label">
      Посилання на картинку
      <input v-model="productObject.imgSrc" type="text" />
    </label>
    <button :disabled="!isFilled" @click="onAdd">Додати</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductEditorView',

  data() {
    return {
      productObject: {},
    }
  },

  computed: {
    isFilled() {
      return this.productObject.title && this.productObject.imgSrc && this.productObject.price
    },
  },

  methods: {
    ...mapActions('products', ['addProduct']),

    onAdd() {
      this.addProduct(this.productObject)
      this.productObject = {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
