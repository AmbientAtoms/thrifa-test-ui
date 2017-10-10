<template>
  <div>
    <md-toolbar>
      <h2 class="md-title"
          style="flex: 1"
          v-text="'Test app'" />

      <div v-if="$route.name !== 'Login'">
        <router-link :to="{ name: 'List' }">
          <md-button v-text="'View'" />
        </router-link>

        <router-link :to="{ name: 'Edit' }">
          <md-button v-text="'Create'" />
        </router-link>

        <md-button v-text="'Logout'"
                   @click="logout()" />
      </div>

      <router-link :to="{ name: 'Login' }"
                   v-else >
        <md-button class="md-raised"
                   v-text="'Login'" />
      </router-link>
    </md-toolbar>
    <notifications md-elevation="8" />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState({
      errorMessage: state => state.questions.error
    })
  },
  methods: {
    ...mapActions(['logout'])
  },
  watch: {
    errorMessage: {
      handler: function (message) {
        this.$notify({
          title: 'Server error',
          type: 'error',
          text: 'See console'
        })
      },
      immediate: true,
      deep: true
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
.notifications {
  margin-top: 70px;
  overflow: visible;
}
.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
  border-left: none;
  box-shadow: 0 4px 8px rgba(0,0,0,.2);
}
.notification-title {
  font-weight: normal;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
}

.vue-notification.error {
  background: #E54D42;
  border-left-color: #B82E24;
}

.vue-notification.success {
  background: #68CD86;
  border-left-color: #42A85F;
}
</style>
