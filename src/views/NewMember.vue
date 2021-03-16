<template>
  <div class="container-fluid w-100">
      <h1 class="text-success w-100 text-center font-weight-bold" style="color: var(--custom-primary-color) !important;"> BECOME A MEMBER OF OYALD </h1>
      <br />
      <center class="w-100">
        <img width="250" src="@/assets/img/add-user.svg" alt="new member" />
      </center>
      <br />
      <p class="w-100 text-center"><span class="p-1 bg-danger text-white font-weight-bold rounded">Note:</span> Fields labelled with asterisk (*) are mandatory, the rest are optional</p>
      
      
      
      
      <new-member-form :action="submitNewMemberForm" />




      <br />

  </div>
</template>

<script>
import NewMemberForm from "../components/NewMemberForm.vue";
import generateRandomSequence from "../utils/generateRandomSequence";

export default {
    name: "NewMember",
    data(){
      return {
        submitNewMemberForm(params){

          if (params.passport.size > (1024 * 1024 * 5)) {
            alert("The file-size of the passport photograph must not exceed 5 megabytes")
          } else {
            console.log(params);
            const seq = `${generateRandomSequence()}`;
            const extName = params.passport.name.toString().split(".")[1];
            const fileName = `${seq}.${extName}`;
            
            const cloudRef = this.$firebase.storage().ref(`members/${fileName}`);

            const collectionRef = this.$firebase.firestore().collections("members");

            collectionRef
              .add({ ...params, imgURL: fileName })
              .then(() => {
                cloudRef.put(params.passport);
              })
              .catch(e => {
                console.trace(e);
              });
          }

        }
      }
    },
    components: {
      NewMemberForm
    }
}
</script>

<style scoped>
:root{
	--custom-primary-color: #002200;
	--custom-secondary-color: #b99e00;
	--custom-gradient: linear-gradient(to right, var(--custom-green), var(--custom-gold) 80%);
}

.bg-success{
  background-color: var(--custom-primary-color) !important;
}

.text-success{
  color: var(--custom-primary-color) !important;
}

.box-shadow{
  box-shadow: 5px 5px 5px 5px #999  !important;
}
</style>