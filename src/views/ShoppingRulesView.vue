<template>
  <master-contact-rules>
    <template #content>
      <h1>Правила купівлі:</h1>
      <ul class="list">
        <li class="list__item">Купуємо багато</li>
        <li class="list__item">Платимо швидко</li>
        <li class="list__item">Насолоджуємось товаром</li>
      </ul>
    </template>
  </master-contact-rules>
</template>

<script>
import MasterContactRules from '@/masterpages/MasterContactRules.vue'

export default {
  name: 'ShoppingRulesView',
  components: { MasterContactRules },
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  gap: 0.625rem 0;
  // .list__item
  &__item {
    position: relative;
    padding-left: 0.625rem;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      widows: 0.3125rem;
      height: 0.3125rem;
      background-color: green;
      border-radius: 50%;
      transform: translate(-50%, 0);
    }
  }
}
</style>
