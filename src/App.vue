<template>
  <div>
    <md-toolbar>
      <h2 class="md-title"
          style="flex: 1"
          v-text="'Test app'" />

      <router-link :to="{ name: 'List' }">
        <md-button v-text="'View'" />
      </router-link>

      <router-link :to="{ name: 'Edit' }">
        <md-button v-text="'Create'" />
      </router-link>

      <router-link :to="{ name: 'Login' }">
        <md-button class="md-raised"
                   v-text="'Login'" />
      </router-link>
    </md-toolbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    route () {
      return this.$route.name
    }
  }
}
</script>

<style>
.md-toolbar {
  position: fixed;
  width: 100%;
  z-index: 200;
}
.md-toolbar a .md-button {
  color: #bbb;
}
.md-toolbar .router-link-active .md-button  {
  color: #fff;
}
.height {
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.width {
  width: 100%;
  padding: 70px 0;
}
.md-card {
  width: 400px;
  max-width: 100%;
  margin: 10px auto;
}
.md-switch:before {
  cursor: pointer;
}
</style>
