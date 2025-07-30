<template>
  <section class="atalhos">
    <button class="atalho" v-for="(atalho, index) in state.atalhos" :class="{ ativo: atalho.ativo }" :key="index">
      <Icones :nome="atalho.icone" />
      <p>{{ atalho.nome }}</p>
    </button>
  </section>
</template>

<script setup>
const state = reactive({
  atalhos: [
    {
      nome: 'Dashboard',
      icone: 'casa',
      ativo: true
    },
    {
      nome: 'Produtos',
      icone: 'tag'
    },
    {
      nome: 'Marketplace',
      icone: 'carrinho'
    },
    {
      nome: 'KiwiMembers',
      icone: 'kiwimembers'
    },
    {
      nome: 'Afiliados',
      icone: 'afiliados'
    },
    {
      nome: 'Vendas',
      icone: 'vendas'
    },
    {
      nome: 'Assinatura',
      icone: 'assinatura'
    },
    {
      nome: 'Financeiro',
      icone: 'financeiro'
    },
    {
      nome: 'Relatórios',
      icone: 'relatorio'
    },
    {
      nome: 'Colaborador',
      icone: 'colaborador'
    },
    {
      nome: 'Ajuda',
      icone: 'chat'
    }
  ]
})
</script>

<style scoped>
section.atalhos {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 80px 60px 20px 60px;
}
button.atalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  min-width: 130px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid var(--cor-branco);
  background-color: var(--cor-branco);
  margin: 0 20px 0 0;
  transition: all 0.3s;
}
button.atalho.ativo {
  border: 1px solid var(--cor-marca);
  pointer-events: none;
}
button.atalho.ativo svg {
  fill: var(--cor-marca);
}
button.atalho.ativo p {
  color: var(--cor-marca);
}
button.atalho svg {
  width: 30px;
  min-width: 30px;
  max-height: 30px;
  fill: var(--cor-cinza-2);
  margin: 0 0 20px 0;
}
button.atalho p {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-preto);
}
button.atalho:hover {
  transform: scale(1.1);
}
/* Responsivo */
@media screen and (max-width: 1140px) {
}
</style>
