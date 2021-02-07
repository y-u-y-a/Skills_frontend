<template>
  <div class="base-wrapper">
    <TheHeader />
    <main class="base-container">
      <Nuxt />
    </main>
    <TheFooter />

    <TheModal />
    <TheLoading v-if="$store.state.common.loading" />
  </div>
</template>

<script>
export default {
  // TODO:
  // middleware: 'authenticated',
  created () {
    this.$store.strict = false
    console.log('$store', this.$store)
  }
}
</script>
