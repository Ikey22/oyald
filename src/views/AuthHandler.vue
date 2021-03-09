<template>
  <div class="w-100 h-100 container-lg d-flex flex-column align-items-center justify-content-around">
      <br />
      <p class="w-100 text-center text-primary-color h2">Authentication handler, follow the prompts</p>
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
        // const lang = this.$store.state.language || query.lang || "en";
        const oobCode = query.oobCode;
        const continueUrl = query.continueUrl;

        switch (mode) {
            case "resetPassword":
                (() => {
  // Localize the UI to the selected language as determined by the lang
  // parameter.

  // Verify the password reset code is valid.
  auth.verifyPasswordResetCode(oobCode).then((email) => {
      console.log("succesful password reset for  email: ", email);

    // TODO: Show the reset screen with the user's email and ask the user for
    // the new password.
    const newPassword = prompt("Type your new password");

    // Save the new password.
    auth.confirmPasswordReset(oobCode, newPassword).then((resp) => {
      auth.signInWithEmailAndPassword(email, newPassword);
      console.log(resp);
      if (continueUrl) {
          $this.$routr.push(continueUrl);
      } else $this.$router.push("/__admin");

    }).catch((error) => {
      alert("Password is to weak.\nPassword must be atleast 7 characters long and must contain atleast one number.\nNote: pAssword is case senitive");
      console.error(error);
    });
  }).catch((error) => {
    const email = prompt("The OTP you provided has expired.\nplease type in your email and we will resend the link");
    console.log(error, email);
  });
})();
                break;

            case "recoverEmail":
                (() => {
                    alert("Not implemented");
                })();
                break;

            case "verifyEmail":
                (() => {
                    alert("Not implemented");
                })();
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