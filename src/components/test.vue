<template>
  <div>
    <p>主页</p>
    <p>后端传来的随机数: {{ randomNumber }}</p>
    <button @click="getRandom">New random number</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      randomNumber: 0
    }
  },
  methods: {
    getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getRandom () {
      // this.randomNumber = this.getRandomInt(1, 100)
      this.randomNumber = this.getRandomFromBackend()
    },
    getRandomFromBackend () {
      // const path = `http://39.97.120.75/api/random`
      const path = `http://127.0.0.1:5000/api/random`
      axios.get(path)
          .then(response => {
            this.randomNumber = response.data.randomNumber
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  created () {
    this.getRandom()
  }
}
</script>

<style scoped>

</style>
