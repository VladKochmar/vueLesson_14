<template>
  <div>
    <nav>
      <router-link to="/">Головна</router-link> | <router-link :to="{ name: 'products' }">Товари</router-link> |
      <router-link :to="{ name: 'suppliers' }">Постачальники</router-link> |
      <router-link :to="{ name: 'contacts' }">Контакти</router-link> |
      <router-link :to="{ name: 'shopping-rules' }">Правила Купівлі</router-link>
    </nav>
    <slot></slot>

    <footer class="footer">
      <slot name="statistics"><p>Рейтинг магазину: 54449</p></slot>

      <slot name="status"
        ><p>Статус: <span>відкрито</span></p></slot
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainMasterPage',
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;

  span {
    color: green;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
