<template>
  <nav>
    <img src="~/assets/images/logo.svg" alt="Logo Kiwify" class="logo" />
    <div class="empresa">
      <img src="~/assets/images/foto-empresa.png" alt="Foto da empresa" />
      <p>Team Lecdt LTDA</p>
      <Icones nome="setinha" />
    </div>
    <div class="busca">
      <Icones nome="lupa" />
      <input type="text" placeholder="Busque na KiwIA" />
    </div>
    <div class="opcoes">
      <button class="opcao">
        <Icones nome="chat" />
      </button>
      <button class="opcao">
        <Icones nome="sino" />
        <span></span>
      </button>
      <button class="perfil">
        <div class="info">
          <h3>Eduardo</h3>
          <p>eduardo@lecdt.com</p>
        </div>
        <img src="~/assets/images/foto-usuario.png" alt="Foto do perfil" />
      </button>
      <button class="menu">
        <Icones nome="menu" />
      </button>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--cor-marca);
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 60px;
  height: 60px;
  z-index: 10;
}
img.logo {
  width: 100%;
  max-width: 100px;
}
.empresa {
  display: flex;
  align-items: center;
  border-left: 1px solid #ffffff45;
  padding: 0 0 0 20px;
  margin: 0 0 0 40px;
  height: 60px;
}
.empresa img {
  width: 100%;
  max-width: 40px;
  border-radius: 10px;
  margin: 0 10px 0 0;
}
.empresa p {
  font-family: var(--bold);
  font-size: var(--f1);
  color: var(--cor-branco);
}
.empresa svg {
  width: 13px;
  min-width: 13px;
  fill: var(--cor-branco);
  margin: 0 0 0 10px;
}
.busca {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 350px;
}
.busca input {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-branco);
  background-color: #ffffff28;
  border-radius: 10px;
  padding: 0 20px 0 40px;
  height: 40px;
  width: 100%;
  transition: all 0.3s;
}
.busca input:focus {
  background-color: #ffffff47;
}
.busca input::placeholder {
  color: #ffffffbe;
}
.busca svg {
  width: 15px;
  min-width: 15px;
  fill: var(--cor-branco);
  position: absolute;
  left: 15px;
}
.opcoes {
  display: flex;
  align-items: center;
  justify-content: center;
}
.opcoes button.opcao {
  background-color: transparent;
  position: relative;
  margin: 0 20px 0 0;
}
.opcoes button.opcao:hover svg {
  fill: #ffffff8e;
}
.opcoes button.opcao svg {
  width: 20px;
  min-width: 20px;
  fill: var(--cor-branco);
  transition: all 0.3s;
}
.opcoes button.opcao span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--cor-vermelho);
  border: 3px solid var(--cor-marca);
  position: absolute;
  top: -3px;
  right: -3px;
}
.opcoes button.perfil {
  display: flex;
  align-items: center;
  background-color: transparent;
}
.opcoes button.perfil:hover img {
  filter: brightness(1.4);
}
.opcoes button.perfil img {
  width: 35px;
  border-radius: 50%;
  margin: 0 0 0 10px;
  transition: all 0.3s;
}
.opcoes button.perfil .info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.opcoes button.perfil .info h3 {
  font-family: var(--bold);
  font-size: var(--f1);
  color: var(--cor-branco);
}
.opcoes button.perfil .info p {
  font-family: var(--regular);
  font-size: var(--f0);
  color: var(--cor-branco);
  margin: 5px 0 0 0;
}
.opcoes button.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ffffff25;
  border-radius: 10px;
  margin: 0 0 0 20px;
  transition: all 0.3s;
}
.opcoes button.menu:hover {
  background-color: #ffffff47;
}
.opcoes button.menu svg {
  width: 20px;
  min-width: 20px;
  fill: var(--cor-branco);
}
</style>
