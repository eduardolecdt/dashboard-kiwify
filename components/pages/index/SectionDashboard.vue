<template>
  <section class="dashboard">
    <DivGrafico />
    <div class="coluna">
      <DivRanking />
      <DivFinanceiro />
      <DivAssinaturas />
    </div>
  </section>
</template>

<script setup>
import DivGrafico from './DivGrafico.vue'
import DivRanking from './DivRanking.vue'
import DivAssinaturas from './DivAssinaturas.vue'
import DivFinanceiro from './DivFinanceiro.vue'
</script>

<style scoped>
section.dashboard {
  display: flex;
}
/* Responsivo */
@media screen and (max-width: 1140px) {
}
</style>
