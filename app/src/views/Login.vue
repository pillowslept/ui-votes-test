<template>
  <div class="login">
    <input type="checkbox" v-model="haveAccount"> <label>I have an account</label>
    <div class="authenticate" v-if="haveAccount">
      <h1>Welcome to the login page</h1>
      <input v-model="email" placeholder="Enter a valid email" name="email" >
      <input v-model="password" placeholder="Enter your password" type="password" name="password" >
      <button type="button" @click="login">Login</button>
    </div>
    <div class="register" v-if="!haveAccount">
      <h1>Please fill all the fields</h1>
      <input v-model="email" placeholder="Enter a valid email" type="email" name="email" >
      <input v-model.number="age" placeholder="Enter your age" type="number" name="age" >
      <input v-model="marriageStatus" placeholder="Enter your marriage status" type="text" name="age" >
      <input v-model="password" placeholder="Type a password" type="password" name="password" >
      <button type="button" @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      haveAccount: true,
      email: '',
      password: '',
      age: 0,
      marriageStatus: '',
    };
  },
  computed: {
    ...mapGetters(['isLogged'])
  },
  methods: {
    register() {
      if (this.email && this.password && this.age && this.marriageStatus) {
        this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          age: this.age,
          marriageStatus: this.marriageStatus
        });
        this.clearFields();
      }
    },
    login() {
      if (this.email && this.password) {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        });
        this.clearFields();
      }
    },
    clearFields() {
      this.email = '';
      this.password = '';
      this.age = 0;
      this.marriageStatus = '';
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>
.authenticate, .register {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
