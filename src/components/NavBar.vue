<template>
  <nav
    class="flex bg-purple-900 h-20 px-8 justify-between items-center text-white"
  >
    <div>
      <router-link class="logo font-bold text-xl tracking tight" to="/"
        >TheLogin</router-link
      >
    </div>
    <div>
      <span v-if="user" class="text-white font-bold mr-8"
        >Welcome <span class="font-normal">{{ user.displayName }}</span></span
      >
      <router-link
        v-if="!user"
        class="p-2 mx-1 hover:text-purple-900 hover:bg-gray-300"
        to="/login"
        >Login</router-link
      >
      <button
        v-if="user"
        class="p-2 mx-1 hover:text-purple-900 hover:bg-gray-300"
        @click="logOut"
      >
        Logout
      </button>
      <router-link
        class="p-2 mx-1 hover:text-purple-900 hover:bg-gray-300"
        to="/public"
        >Public</router-link
      >
      <router-link
        v-if="user"
        class="p-2 mx-1 hover:text-purple-900 hover:bg-gray-300"
        to="/private"
        >Private</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    logOut() {
      this.$firebase.auth().signOut()
      this.$store.dispatch("setUser", "")
      this.$router.push("/")
    }
  }
};
</script>

<style lang="scss" scoped>
:not(.logo).router-link-exact-active {
  @apply font-bold text-purple-900 bg-white;
}
</style>