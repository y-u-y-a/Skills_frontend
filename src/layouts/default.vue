<template>
  <div class="base-wrapper">
    <TheHeader />
    <main class="base-container">
      <Nuxt />
    </main>
    <TheFooter />

    <transition name="fade">
      <!-- TheSidebar -->
      <BaseModal v-if="$store.state.common.isSidebar">
        <template v-slot:content>
          <TheSidebar />
        </template>
      </BaseModal>
    </transition>
    <!-- TheLoading -->
    <TheLoading v-if="$store.state.common.loading" />
  </div>
</template>

<script>
export default {
  // TODO:
  // middleware: 'authenticated',
  mounted () {
    console.log(this.$store.state.common.isSidebar)
    console.log(this.$store.state)
  }
}
</script>
