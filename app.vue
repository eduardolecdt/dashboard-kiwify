<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

useSeoMeta({
  // Default
  charset: 'utf-8',
  xUaCompatible: 'IE=edge',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',

  // Title and Description
  title: 'Kiwify - Plataforma Completa para Criadores de Conteúdo',
  ogTitle: 'Kiwify - Plataforma Completa para Criadores de Conteúdo',
  description: 'Crie, venda e gerencie seus cursos online, produtos digitais e infoprodutos com a Kiwify. A plataforma mais completa para empreendedores digitais.',
  ogDescription: 'Crie, venda e gerencie seus cursos online, produtos digitais e infoprodutos com a Kiwify. A plataforma mais completa para empreendedores digitais.',
  robots: 'index, follow',
  googlebot: 'max-image-preview',
  author: 'Kiwify',

  // Favicons
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],

  // Theme
  themeColor: '#02B168',
  msapplicationTileColor: '#02B168',
  appleMobileWebAppStatusBarStyle: 'default',

  // Site URL
  ogType: 'website',
  ogImageType: 'image/jpeg',
  ogImage: '',
  ogUrl: 'https://kiwify.com.br',
  ogSiteName: 'Kiwify',
  ogLocale: 'pt_BR',
  applicationName: 'Kiwify',
  appleMobileWebAppTitle: 'Kiwify'
})

watch(router.afterEach, () => {
  window.scrollTo(0, 0) // Rola o scroll para o topo ao navegar
})
</script>
