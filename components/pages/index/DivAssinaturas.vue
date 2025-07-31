<template>
  <div class="assinaturas">
    <h3>Assinaturas</h3>
    <div class="linha">
      <div class="icone">
        <Icones nome="usuario" />
      </div>
      <h3>Seus assinantes</h3>
      <p>3</p>
    </div>
    <div class="linha">
      <div class="icone">
        <Icones nome="grafico" />
      </div>
      <h3>MRR</h3>
      <p>R$ 2.310,50</p>
    </div>
    <div class="linha">
      <div class="icone">
        <Icones nome="seta-baixo" />
      </div>
      <h3>Churn último mês</h3>
      <p>15%</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
div.assinaturas {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: var(--cor-branco);
  padding: 30px;
  border-radius: 10px;
}
h3 {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-preto);
}
.linha {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 15px 0 0 0;
}
.linha .icone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: var(--cor-gelo);
  margin: 0 10px 0 0;
}
.linha .icone svg {
  width: 13px;
  min-width: 13px;
  max-height: 13px;
  fill: var(--cor-cinza-2);
}
.linha h3 {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-preto);
}
.linha p {
  font-family: var(--bold);
  font-size: var(--f2);
  color: var(--cor-preto);
  margin-left: auto;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
  div.assinaturas {
    padding: 20px;
  }
  .linha {
    margin: 10px 0 0 0;
  }
  h3 {
    font-family: var(--regular);
    font-size: var(--f2);
    color: var(--cor-preto);
  }
}
</style>
