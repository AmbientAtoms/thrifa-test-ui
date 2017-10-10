<template>
  <div class="height">
    <md-card>
      <md-card-header>
        <div class="md-title">Signup</div>
      </md-card-header>

      <md-card-content>
        <md-input-container>
          <label>Email</label>
          <md-input v-model="user.email" />
        </md-input-container>
        <md-input-container>
          <label>Username</label>
          <md-input v-model="user.username" />
        </md-input-container>
        <md-input-container md-has-password>
          <label>Password</label>
          <md-input type="password"
                    v-model="user.password" />
        </md-input-container>
      </md-card-content>

      <md-card-actions>
        <md-button @click="signup">Signup</md-button>
        <md-button @click="signin">Login</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: null,
        password: null,
        username: null
      }
    }
  },
  methods: {
    ...mapActions(['login', 'register']),
    signin () {
      this.login({user: this.user})
    },
    signup () {
      this.register({user: this.user})
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
