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
  justify-content: space-between;
  width: 100%;
  padding: 0 60px 60px 60px;
}
.coluna {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  padding: 0 0 0 20px;
}
/* Responsivo */
@media screen and (max-width: 1140px) {
}
</style>
