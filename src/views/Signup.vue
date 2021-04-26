<template>
  <div class="h-full p-5 bg-secondary flex justify-center items-center">
    <div class="max-w-sm w-full bg-white p-3">
      <h3 class="text-xl text-center">Login</h3>
      <form>
        <input
          type="text"
          class="w-full border mt-2 rounded p-2"
          placeholder="Name"
          v-model="name"
          required
        />
        <input
          type="email"
          class="w-full border mt-2 rounded p-2"
          placeholder="Enter Email"
          v-model="email"
          required
        />
        <input
          type="password"
          class="w-full border mt-2 rounded p-2"
          placeholder="Enter Password"
          v-model="password"
          required
        />
        <p class="text-red-500" v-if="errors.passwordMismatch">
          Password not matching
        </p>
        <input
          type="password"
          class="w-full border mt-2 rounded p-2"
          placeholder="Re-enter Password"
          v-model="password1"
        />
        <button
          type="button"
          @click="signup"
          class="mt-3 block w-full rounded px-4 py-2 bg-primary text-white"
        >
          <Spinner v-if="loader" />
          Login
        </button>
        <p class="mt-2 text-center">
          Already have account? Login
          <router-link class="text-blue-500" to="/login">here</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import AuthMixinVue from "../mixins/AuthMixin.vue";
export default {
  mixins: [AuthMixinVue],
  data() {
    return {
      name: "",
      password1: "",
      errors: {
        passwordMismatch: false,
      },
    };
  },
  methods: {
    ...mapActions(["signUpWithEmail"]),
    signup() {
      if (this.password !== this.password1) {
        const errors = { ...errors };
        errors.passwordMismatch = true;
        this.errors = errors;
        return;
      }
      this.loader = true;
      this.signUpWithEmail({
        email: this.email,
        password: this.password,
        name: this.name,
      });
    },
  },
};
</script>
