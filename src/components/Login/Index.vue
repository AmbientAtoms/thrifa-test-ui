<template>
  <div class="height">
    <md-card>
      <md-card-header>
        <div class="md-title">Login with facebook</div>
      </md-card-header>

      <md-card-content>
        <md-input-container>
          <label>Email</label>
          <md-input v-model="email" />
        </md-input-container>
        <md-input-container>
          <label>Password</label>
          <md-input type="password"
                    v-model="password" />
        </md-input-container>
      </md-card-content>

      <md-card-actions>
        <md-button>Login</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null
    }
  }
}
</script>

<style scoped>
.height .md-card {
  width: 320px;
  max-width: 100%;
}
</style>
