<template>
  <div class="height">
    <md-card>
      <md-tabs class="md-transparent">
        <md-tab md-icon="account_circle"
                md-label="Sign up">
          <md-input-container :class="{'md-input-invalid': errors.has('email')}">
            <label v-text="'Email'" />
            <md-input v-model="user.email"
                      v-validate="'required|email'"
                      data-vv-name="email"
                      :has-error="errors.has('email')" />
            <span class="md-error">{{errors.first('email')}}</span>
          </md-input-container>
          <md-input-container :class="{'md-input-invalid': errors.has('username')}">
            <label>Username</label>
            <md-input v-model="user.username"
                      v-validate="'required|min:2'"
                      data-vv-name="username"
                      :has-error="errors.has('username')" />
            <span class="md-error">{{errors.first('username')}}</span>
          </md-input-container>
          <md-input-container md-has-password
                              :class="{'md-input-invalid': errors.has('password')}">
            <label v-text="'Password'" />
            <md-input type="password"
                      v-validate="'required|min:5'"
                      data-vv-name="password"
                      :has-error="errors.has('password')"
                      v-model="user.password" />
            <span class="md-error">{{errors.first('password')}}</span>
          </md-input-container>
          <md-card-actions>
            <md-button @click="signup">Signup</md-button>
          </md-card-actions>
        </md-tab>

        <md-tab md-icon="exit_to_app"
                class="md-accent"
                md-label="Login"
                :md-options="{new_badge: 3}">
          <md-input-container :class="{'md-input-invalid': errors.has('email')}">
            <label v-text="'Email'" />
            <md-input v-model="user.email"
                      v-validate="'required|email'"
                      data-vv-name="email"
                      :has-error="errors.has('email')" />
            <span class="md-error">{{errors.first('email')}}</span>
          </md-input-container>
          <md-input-container md-has-password
                              :class="{'md-input-invalid': errors.has('password')}">
            <label v-text="'Password'" />
            <md-input type="password"
                      v-validate="'required|min:5'"
                      data-vv-name="password"
                      :has-error="errors.has('password')"
                      v-model="user.password" />
            <span class="md-error">{{errors.first('password')}}</span>
          </md-input-container>

          <md-card-actions>
            <md-button @click="signin">Login</md-button>
          </md-card-actions>
        </md-tab>
      </md-tabs>
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
        password: null
      },
      newUser: {
        email: null,
        password: null,
        username: null
      }
    }
  },
  methods: {
    ...mapActions(['login', 'register']),
    signin () {
      this.$validator.validateAll(this.user).then((result) => {
        if (result) {
          this.login({user: this.user})
        } else {
          this.$notify({
            title: 'Validation error',
            type: 'error',
            text: 'Check all the fields!'
          })
        }
      })
    },
    signup () {
      this.$validator.validateAll(this.newUser).then((result) => {
        if (result) {
          this.register({user: this.newUser})
        } else {
          this.$notify({
            title: 'Validation error',
            type: 'error',
            text: 'Check all the fields!'
          })
        }
      })
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
