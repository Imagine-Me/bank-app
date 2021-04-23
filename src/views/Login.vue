<template>
  <div
    v-if="isLoading"
    class="h-full p-5 bg-secondary flex justify-center items-center"
  >
    <svg
      width="80"
      height="80"
      class="animate-ping"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 17.625C30.6632 17.625 31.2992 17.3616 31.7681 16.8926C32.2371 16.4237 32.5005 15.7877 32.5005 15.1245C32.5005 14.4613 32.2371 13.8253 31.7681 13.3564C31.2992 12.8875 30.6632 12.624 30 12.624C29.3368 12.624 28.7008 12.8875 28.2319 13.3564C27.763 13.8253 27.4995 14.4613 27.4995 15.1245C27.4995 15.7877 27.763 16.4237 28.2319 16.8926C28.7008 17.3616 29.3368 17.625 30 17.625Z"
        fill="#FF4580"
      />
      <path
        d="M48 40.02V24H48.279C50.958 24 52.059 20.559 49.869 19.008L32.316 6.552C31.6397 6.072 30.8308 5.81415 30.0015 5.81415C29.1721 5.81415 28.3633 6.072 27.687 6.552L10.131 19.008C7.94999 20.559 9.04199 24 11.721 24H12V40.02C10.197 41.178 8.99999 43.2 8.99999 45.501V49.5C8.99999 49.8978 9.15803 50.2794 9.43933 50.5607C9.72064 50.842 10.1022 51 10.5 51H49.5C49.8978 51 50.2794 50.842 50.5607 50.5607C50.842 50.2794 51 49.8978 51 49.5V45.501C51 43.2 49.806 41.178 48 40.023V40.02ZM29.424 9C29.5928 8.8804 29.7946 8.81616 30.0015 8.81616C30.2084 8.81616 30.4102 8.8804 30.579 9L47.496 21H12.507L29.424 9ZM45 24V39.018C44.8343 39.0057 44.6682 38.9997 44.502 39H39V24H45ZM15 39.018V24H21V39H15.501C15.3338 38.9996 15.1667 39.0056 15 39.018ZM15.501 42H44.502C46.434 42 48 43.566 48 45.501V48H12V45.501C12 43.566 13.569 42 15.501 42ZM28.5 39H24V24H28.5V39ZM31.5 39V24H36V39H31.5Z"
        fill="#FF4580"
      />
    </svg>
  </div>
  <div v-else class="h-full p-5 bg-secondary flex justify-center items-center">
    <div class="max-w-sm w-full bg-white p-3">
      <h3 class="text-xl text-center">Login</h3>
      <form @submit.prevent="login">
        <input
          type="email"
          class="w-full border mt-2 rounded p-2"
          placeholder="Enter Email"
          :value="email"
          required
        />
        <input
          type="password"
          class="w-full border mt-2 rounded p-2"
          placeholder="Enter Password"
          :value="password"
          required
        />
        <button
          type="submit"
          class="mt-3 block w-full rounded px-4 py-2 bg-primary text-white"
        >
          Login
        </button>
        <p class="mt-2 text-center">
          New user? Signup
          <router-link class="text-blue-500" to="/signup">here</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isLoading: function () {
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    login() {
      console.log("FORM submitted");
    },
  },
};
</script>