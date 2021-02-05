<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // created() {
  //   const stoken = this.$cookies.get("stoken")
  //   if (stoken == null) {
  //     this.$router.push('/login');
  //     console.log("stoken is null")
  //   }else {
  //     this.$router.push('/register');
  //     console.log("stoken is not null")
  //   }
  //
  // }
}


</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
