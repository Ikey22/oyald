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

      <b-modal v-model="$store.state.isUploading">
        <template #modal-title>
          <p class="w-100 h2 text-center text-primary-color">Uploading</p>
        </template>
          <center>
            <img src="/img/mail.svg" width="150">
            <br />
            <br />
            <br />
            <progress max="100" :value="$store.state.uploadProgress" />
            <p class="w-100 text-center">{{ $store.state.uploadProgress }}% complete</p>
          </center>
        <template #modal-footer> - </template>
      </b-modal>




      <br />

  </div>
</template>

<script>
import NewMemberForm from "../components/NewMemberForm.vue";
import generateRandomSequence from "../utils/generateRandomSequence";

export default {
    name: "NewMember",
    methods: { 
        submitNewMemberForm(params){
          const $this = this;
          $this.$store.commit('setUploadProgress', 0);
          $this.$store.commit('showIsUploadingModal', true);
          console.log("upload started");

          if (params.passport.size > (1024 * 1024 * 5)) {
            $this.$store.commit('showIsUploadingModal', false);
            alert("The file-size of the passport photograph must not exceed 5 megabytes");
          } else {
            const seq = `${generateRandomSequence()}-${params.passport.name}`;
            const fileName = `${seq}`;
            
            const cloudRef = this.$firebase.storage().ref(`members/${fileName}`);

            const collectionRef = this.$firebase.firestore().collection("members");

            const imgURL = `members/${fileName}`;

            collectionRef
              .add({ ...params, passport: null, imgURL })
              .then(() => {

                $this.$store.commit("showSuccessModal", true);
                $this.$store.commit('showIsUploadingModal', true);
                const uploadTask = cloudRef.put(params.passport);
                uploadTask.on("state_changed", snapshot => {
                    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    $this.$store.commit('setUploadProgress', percentage);

                    if (percentage == 100) {
                        $this.$store.commit('showIsUploadingModal', false);
                        $this.$store.commit('setUploadProgress', 0);
                        console.log('upload completed');
                      }

                    switch (snapshot.state) {
                      case $this.$firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                      case $this.$firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    }
                  }, error => {
                    $this.$store.commit('showIsUploadingModal', false);
                    $this.$store.state.commit("showNetworkErrorModal", true);
                    console.trace(error);
                  });

              })
              .catch(e => {
                $this.$store.commit('showIsUploadingModal', false);
                $this.$store.state.commit("showNetworkErrorModal", true);
                console.trace(e);
              });
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