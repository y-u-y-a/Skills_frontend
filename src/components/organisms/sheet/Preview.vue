<template>
  <BaseForm form_title="業務経歴書（スキルシート）" class="preview">
    <template v-slot:content>
      <ProfileTable class="mb-2" />
      <ProjectTable />
    </template>
  </BaseForm>
</template>

<style lang="scss" scoped>
.preview {
  padding-bottom: 5rem;
  background: $white;
  cursor: default;
}
</style>
