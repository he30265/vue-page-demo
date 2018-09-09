<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <router-link id="home" to="/home">home</router-link>
      <router-link id="about" to="/about">about</router-link>
      <router-link id="contact" to="/contact">contact</router-link>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://localhost:8080/#/home">home</a></li>
      <li><a href="http://localhost:8080/#/about">about</a></li>
      <li><a href="http://localhost:8080/#/contact">contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
