<template>
  <div class="ranking">
    <div class="parte">
      <div class="coluna">
        <div class="texto">
          <p>R$ 15.523</p>
          <p>R$ 100.000</p>
        </div>
        <div class="linha">
          <span></span>
        </div>
      </div>
      <img src="~/assets/images/emblema-ranking.png" />
    </div>
    <div class="proxima">
      <p>Próxima Premiação: Placa Kiwify Gold</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
div.ranking {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--cor-branco);
  border-radius: 10px;
}
.parte {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
}
.parte img {
  width: 100%;
  max-width: 50px;
}
.parte .coluna {
  display: flex;
  flex-direction: column;
  width: calc(100% - 70px);
}
.parte .coluna .texto {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 10px 0;
}
.parte .coluna .texto p {
  font-family: var(--bold);
  font-size: var(--f2);
  color: var(--cor-preto);
}
.parte .coluna .linha {
  width: 100%;
  height: 10px;
  background-color: var(--cor-gelo);
  border-radius: 10px;
  position: relative;
}
.parte .coluna .linha span {
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 10px;
  background-color: var(--cor-laranja);
  border-radius: 10px;
}
.proxima {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px 20px;
  border-top: 1px solid var(--cor-cinza-2);
}
.proxima p {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-preto);
}
/* Responsivo */
@media screen and (max-width: 1000px) {
  .parte {
    padding: 20px;
  }
  .parte img {
    width: 100%;
    max-width: 40px;
  }
  .parte .coluna {
    display: flex;
    flex-direction: column;
    width: calc(100% - 60px);
  }
  .parte .coluna .texto p {
    font-size: var(--f1);
  }
  .proxima {
    padding: 12px 20px;
  }
}
</style>
