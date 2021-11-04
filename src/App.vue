<template>
  <div id="nav" v-if="$route.path.indexOf('/auth')<0">
      <Navigator />
  </div>
  <router-view/>
  <div v-if="$route.path.indexOf('/auth')<0">
    <Footer />
  </div>
</template>

<script>
import Navigator from '@/components/navigator/Navigator.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  data() {
    return {
      isLogin: true
    }
  },

  components: {
    Navigator,
    Footer,
  }
}
</script>

<style>
html {
  background-color: whitesmoke;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 40px;
}
</style>
