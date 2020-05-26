<template>
  <main>
    <form @submit.prevent="handleSubmit">
      <label for="email">E-mail</label>
      <input type="email" v-model="email" name="email" id="email">
      <label for="password">Senha</label>
      <input type="password" v-model="password" name="password" id="password">
      <input type="submit" value="Login">
    </form>
  </main>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      const formData = {
        user: {
          email: this.email,
          password: this.password
        }
      }
      this.$store.dispatch('login', formData)
    }
  }
}
</script>

<style>

</style>
