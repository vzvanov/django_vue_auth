<template>
  <div v-if="isLogin" class="row">
    <h3>You are authenticated...</h3>
    <button class="btn" @click="logoutUser">Logout</button>
  </div>

  <div v-else class="row">
    <div class="col s6 offset-s3">
      <h3>Please login...</h3>
      <form @submit.prevent="loginUser">

        <div class="row">
          <div class="input-field col s6 offset-s3">
            <input v-model="username" id="username" type="text" class="validate" required>
            <label for="username">User name</label>
            <span class="helper-text" data-error="User name is required"></span> 
          </div>
        </div>

        <div class="row">
          <div class="input-field col s6 offset-s3">
            <input v-model="password"
              id="password" 
              :type="passwordType"
              class="validate"
              required
            >
            <label for="password">Password</label>
            <i 
              class="small material-icons prefix" 
              :class="{'passworwVisible': passworwVisible}"
              @click="trogglePasswordVision">{{passwordIcon}}
            </i>  
            <span class="helper-text" data-error="Password is required"></span> 
            
          </div>          
        </div>

        <button class="btn" type="submit">Login</button>
        <button class="btn" @click="registrationUser">Registration</button>

      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'auth',

  data: () => ({
      username: '',
      password: '',
      passwordType: 'password',
      passwordIcon: 'visibility_off',
      passworwVisible: false
  }),

  computed: {
    ... mapState({
      isLogin(state) {
        var isLogin = state.auth.isLogin
        if (isLogin) {
          this.username = ''
          this.password = ''
        }    
        return isLogin
      }
    }), 
  },

  methods: {
    loginUser () {
      const user = {
        username: this.username,
        password: this.password,
      }
      this.$store.dispatch('auth/userLogin', user)
    },

    registrationUser () {
      const user = {
        username: this.username,
        password1: this.password,
        password2: this.password,
      }
      this.$store.dispatch('auth/userRegistration', user)
    },

    logoutUser () {
      this.$store.dispatch('auth/userLogout')
    },

    trogglePasswordVision() {
      this.passworwVisible = !this.passworwVisible;

      if (this.passworwVisible) {
        this.passwordType = "text"
        this.passwordIcon = "visibility"
      } else {
        this.passwordType = "password"
        this.passwordIcon = "visibility_off"
      }
    }

  },

}
</script>

<style scoped>
  .btn  {
    margin-right: 10px;
  }

  i {
    cursor:pointer
  }

  i:hover {
    color:#ff3d00;
  }

  .passworwVisible {
    color:#ff3d00;
  }
  
</style>
