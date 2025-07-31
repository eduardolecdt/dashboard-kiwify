<template>
  <div class="financeiro">
    <div class="parte">
      <div class="texto">
        <p>Financeiro</p>
        <h3>R$ 3.512,00</h3>
      </div>
      <Icones nome="seta" />
    </div>
    <div class="parte">
      <button class="ativo">Sacar agora</button>
      <button>Seu extrato</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
div.financeiro {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--cor-branco);
  padding: 30px;
  border-radius: 10px;
  margin: 20px 0;
}
.parte {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.parte .texto {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.parte .texto p {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-preto);
}
.parte .texto h3 {
  font-family: var(--bold);
  font-size: var(--f5);
  color: var(--cor-preto);
  margin: 8px 0 0 0;
}
.parte svg {
  width: 10px;
  min-width: 10px;
  fill: var(--cor-cinza-2);
}
.parte button {
  font-family: var(--regular);
  font-size: var(--f1);
  padding: 20px 20px;
  border-radius: 13px;
  width: calc(50% - 10px);
  background-color: var(--cor-gelo);
  border: 1px solid var(--cor-gelo);
  color: var(--cor-preto);
  margin: 15px 0 0 0;
  transition: all 0.3s;
}
.parte button.ativo {
  font-family: var(--bold);
  background-color: var(--cor-marca);
  border: 1px solid var(--cor-marca);
  color: var(--cor-branco);
}
.parte button:hover {
  border: 1px solid var(--cor-marca);
  color: var(--cor-marca);
  background-color: var(--cor-branco);
}
.parte button.ativo:hover {
  border: 1px solid var(--cor-marca);
  color: var(--cor-branco);
  background-color: var(--cor-marca-escuro);
}
/* Responsivo */
@media screen and (max-width: 1140px) {
}
</style>
