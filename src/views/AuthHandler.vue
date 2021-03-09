<template>
  <div class="w-100 h-100 container-lg d-flex flex-column align-items-center justify-content-around">
      <br />
      <br />
  </div>
</template>

<script>
export default {
    name: "AuthHandler",

    mounted(){
        const $this = this;
        const query = this.$route.query;
        const auth = this.$firebase.auth();

        const mode = query.mode;
        const lang = query.lang || "en";
        const oobCode = query.oobCode;
        const continueUrl = query.continueUrl;

        switch (mode) {
            case "resetPassword":
                (() => {})();
                break;

            case "recoverEmail":
                (() => {})();
                break;

            case "verifyEmail":
                (() => {})();
                break;
        
            default:
                (() => {
                    alert("Invalid action");
                    $this.$router.push("/home-page")
                })();
                break;
        }
    }
}
</script>

<style>

</style>