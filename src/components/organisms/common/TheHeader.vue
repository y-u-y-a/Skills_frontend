<template>
  <div>
    <header>
      <div class="container row justify-content-between align-items-center">
        <h1>
          <NuxtLink to="/">
            {{ $env.APP_NAME }}
            <span class="pc">ブラウザでスキルシートを作成・共有</span>
          </NuxtLink>
        </h1>
        <NavList class="nav">
          <template v-slot:content>
            <!-- ログイン時 -->
            <template v-if="!$store.state.auth.loginUser">
              <BorderButton
                @click="$store.commit('common/togglePreview')"
                button_name="プレビュー"
                sp_icon="eye" />
              <BorderButton
                @click="$store.commit('common/toggleSidebar')"
                button_name="設定"
                sp_icon="bars" />
            </template>
            <!-- 未ログイン時 -->
            <template v-else-if="$store.state.auth.loginUser">
              <BorderLink
                link_name="ログインする"
                link="/auth/Login"
                sp_icon="sign-in-alt" />
            </template>
          </template>
        </NavList>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  padding: 0.5rem 0 2rem;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  span {
    font-size: 12px;
  }
}
.nav button {
  margin-left: 0.5rem;
  font-size: 16px;
}
</style>
