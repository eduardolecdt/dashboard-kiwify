<template>
  <div class="grafico">
    <div class="seletores">
      <div class="seletor">
        <select v-model="filtros.periodo">
          <option value="todo">Todo o período</option>
          <option value="7dias">Últimos 7 dias</option>
          <option value="30dias">Últimos 30 dias</option>
          <option value="90dias">Últimos 90 dias</option>
        </select>
        <Icones nome="setinha" />
      </div>
      <div class="seletor">
        <select v-model="filtros.moeda">
          <option value="todas">Todas as moedas</option>
          <option value="pix">PIX</option>
          <option value="cartao">Cartão</option>
          <option value="boleto">Boleto</option>
        </select>
        <Icones nome="setinha" />
      </div>
      <div class="seletor">
        <select v-model="filtros.produto">
          <option value="todos">Todos os produtos</option>
          <option value="produto1">Produto 1</option>
          <option value="produto2">Produto 2</option>
          <option value="produto3">Produto 3</option>
        </select>
        <Icones nome="setinha" />
      </div>
    </div>
    <div class="chart-container">
      <apexchart type="area" height="240" :options="chartOptions" :series="series" />
    </div>
    <div class="quadrinhos">
      <div class="quadrinho" v-for="(dado, index) in state.dados" :key="index">
        <Icones :nome="dado.icone" />
        <h3>{{ dado.titulo }}</h3>
        <p>{{ dado.valor }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const apexchart = VueApexCharts

const state = reactive({
  dados: [
    { icone: 'notas', titulo: 'Total em vendas', valor: 'R$ 15.252,00' },
    { icone: 'moeda', titulo: 'Vendas realizadas', valor: '9' },
    { icone: 'kiwify', titulo: 'Venda 1-click rede Kiwify', valor: 'R$ 525,00' },
    { icone: 'seta-curva', titulo: 'Reembolso', valor: '2%' },
    { icone: 'bloquear', titulo: 'Chargeback', valor: '6%' },
    { icone: 'cartao', titulo: 'Aprovação Cartão', valor: '100%' },
    { icone: 'porcentagem', titulo: 'Conversão Boleto', valor: '23%' },
    { icone: 'boleto', titulo: 'Boletos Gerados', valor: '4' }
  ]
})

const filtros = reactive({
  periodo: 'todo',
  moeda: 'todas',
  produto: 'todos'
})

const series = [
  {
    name: 'Vendas',
    data: [0, 3000, 1000, 9000, 7000, 11000, 500, 3000, 9000, 5000, 12500, 3000]
  }
]

const chartOptions = {
  chart: {
    height: 240,
    type: 'area',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  colors: ['#00E396'],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.5,
      gradientToColors: ['#00E396'],
      inverseColors: false,
      opacityFrom: 0.6,
      opacityTo: 0.1,
      stops: [0, 100]
    }
  },
  grid: {
    borderColor: '#D4D4D4',
    strokeDashArray: 3
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true
    },
    labels: {
      style: {
        colors: '#8e8da4',
        fontSize: '9px',
        fontFamily: 'Inter'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#8e8da4',
        fontSize: '9px',
        fontFamily: 'Inter'
      },
      formatter: function (val) {
        return val >= 1000 ? val / 1000 + 'k' : val
      }
    }
  },
  tooltip: {
    x: {
      format: 'MMM'
    },
    y: {
      formatter: function (val) {
        return 'R$ ' + val.toLocaleString('pt-BR')
      }
    }
  }
}
</script>

<style scoped>
div.grafico {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  background-color: var(--cor-branco);
  padding: 20px;
  border-radius: 10px;
}
.seletores {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}
.seletor {
  position: relative;
  width: calc(33.33% - 10px);
}
.seletor select {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border-radius: 8px;
  background-color: var(--cor-gelo);
  border: 1px solid var(--cor-gelo);
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-preto);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
}
.seletor select:hover {
  background-color: var(--cor-branco);
  border: 1px solid var(--cor-marca);
}
.seletor select:focus {
  border-color: var(--cor-marca);
}
.seletor svg {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  pointer-events: none;
  fill: var(--cor-cinza-2);
  transition: transform 0.2s ease;
}
.seletor:hover svg {
  fill: var(--cor-preto);
}
.chart-container {
  width: 100%;
  font-size: var(--f1);
  border: 1px solid var(--cor-cinza-1);
  border-radius: 10px;
}
.quadrinhos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.quadrinho {
  display: flex;
  flex-direction: column;
  width: calc(25% - 8px);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid var(--cor-cinza-1);
  margin: 15px 0 0 0;
}
.quadrinho svg {
  width: 20px;
  min-width: 20px;
  max-height: 20px;
  fill: var(--cor-cinza-2);
  margin-bottom: auto;
}
.quadrinho h3 {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-preto);
  margin: 10px 0 0 0;
}
.quadrinho p {
  font-family: var(--bold);
  font-size: var(--f2);
  color: var(--cor-preto);
  margin: 8px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1140px) {
}
</style>
