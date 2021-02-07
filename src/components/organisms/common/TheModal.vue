<template>
  <transition name="fade">
    <!-- ## -->
    <div
      v-if="$store.state.common.isSidebar"
      @click.self="$store.commit('common/toggleSidebar')"
      class="modal-window">
      <TheSidebar />
    </div>
    <!-- ## -->
    <div
      v-if="$store.state.common.isPreview"
      @click.self="$store.commit('common/togglePreview')"
      class="modal-window">
      <Preview />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-window{
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  cursor: pointer;
  overflow: scroll; // 追加
}
</style>
