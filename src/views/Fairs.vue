<template>
  <div>
    Total de feiras: {{fairs.length}}
    <article v-for="fair in fairs" v-bind:key="fair.id">
      {{fair.name}}
    </article>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getAllFairs')
  },
  computed: {
    fairs () {
      return this.$store.getters.fairs
    }
  }
}
</script>

<style>

</style>
