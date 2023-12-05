<template>
  <master-contact-rules>
    <template #content>
      <h1>Наші контакти:</h1>
      <p>Адреса магазину: біля будинку Баби Галі</p>
      <p>Менеджер: Дід Петро</p>
      <p>Заступник: онука Софія</p>
    </template>
  </master-contact-rules>
</template>

<script>
import MasterContactRules from '@/masterpages/MasterContactRules.vue'

export default {
  name: 'ContactsView',
  components: { MasterContactRules },
}
</script>

<style lang="scss" scoped></style>
