<template />
<script>
export default {
  created() {
    this.redirectLogin()
  },
  methods: {
    redirectLogin() {
      const callbackUrl = process.env.VUE_APP_LOGIN_REDIRECT_URL
      const loginUrl = process.env.VUE_APP_LOGIN_URL + '?response_type=code&client_id=135028421&redirect_uri=' + encodeURIComponent(callbackUrl)
      location.href = loginUrl
    }
  }
}
</script>

<style>

</style>

