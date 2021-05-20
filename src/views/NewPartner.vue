<template>
  <div class="container-fluid w-100">
      <h1 class="text-success w-100 text-center font-weight-bold" style="color: var(--custom-primary-color) !important;">{{ $store.state.language === 'en' ? 'PARTNER WITH OYALD' : 'S\'Associer Avec l\'OJLAD' }} </h1>
      <br />
      <center class="w-100">
        <img width="250" src="@/assets/img/partner.svg" alt="new partner" />
      </center>
      <br />
      <p class="w-100 text-center"><span class="p-1 bg-danger text-white font-weight-bold rounded">{{ $store.state.language === 'en' ? 'Note:' : 'Noter' }}</span> {{ $store.state.language === 'en' ? 'Fields labelled with asterisk (*) are mandatory, the rest are optional' : 'Les champs marqués d’un astérisque sont obligatoires, les autres sont facultatifs.' }}</p>
      
      
      
      
      <new-partner-form :action="submitNewPartnerForm" />




      <br />

  </div>
</template>

<script>
import NewPartnerForm from "../components/NewPartnerForm.vue";
import generateRandomSequence from '../utils/generateRandomSequence.js';
//import CountryStateCity from '../components/CountryStateCity.vue'
export default {
  components: {
    //CountryStateCity,
    NewPartnerForm
    },
  methods: {
    submitNewPartnerForm(params){
          const $this = this;
          $this.$store.commit('showIsUploadingModal', true);
          $this.$store.commit('setUploadProgress', 0);
          console.log("upload started");

          if (params.companyLogo.size > (1024 * 1024 * 5)) {
            $this.$store.commit('showIsUploadingModal', false);
            alert("The file-size of the passport photograph must not exceed 5 megabytes");
          } else {
            const seq = `${generateRandomSequence()}-${params.companyLogo.name}`;
            const fileName = `${seq}`;
            
            const cloudRef = this.$firebase.storage().ref(`partnership_requests/${fileName}`);

            const collectionRef = this.$firebase.firestore().collection("partnership_requests");

            const imgURL = `partnership_requests/${fileName}`;
            const email = params.companyEmail;

            const run = () => {
              collectionRef
              .add({
                ...params,
                companyLogo: null,
                email,
                socials: {
                  facebook: params.companyFacebook,
                  twitter: params.companyTwitter,
                  youtube: params.companyYoutube,
                  instagram: params.companyIntagram,
                  website: params.companyWebsite
                },
                imgURL
              })
              .then(() => {

                alert('your details have been successfully uploaded to our database,\nplease wait while we upload your passport photograph')

                const uploadTask = cloudRef.put(params.companyLogo);
                uploadTask.on("state_changed", snapshot => {
                    const percentage = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(1);
                    $this.$store.commit('setUploadProgress', percentage);

                    if (percentage == 100) {
                        $this.$store.commit('showIsUploadingModal', false);
                        $this.$store.commit("showSuccessModal", true);  
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
                    alert('unable to upload passport photograph');
                    console.trace(error);
                  });

              })
              .catch(e => {
                $this.$store.commit('showIsUploadingModal', false);
                $this.$store.state.commit("showNetworkErrorModal", true);
                console.trace(e);
              });
            }

            collectionRef
                .where('email', '==', params.email)
                .get()
                .then(snapshot => {
                  if (!snapshot.empty) {  
                    
                    $this.$store.commit('showIsUploadingModal', false);
                    alert('It appears you previously sent in a membership request\nPlease exercise patience while we process your request\nIf you feel this is a mistake, please visit our contact page and file a report\nregards.')
                    $this.$store.commit('setUploadProgress', 0);

                  } else {
                    
                    run();

                  }
                })
                .catch(err => {
                  $this.$store.commit('showNetworkErrorModal', true);
                  console.trace(err)
                })
          
          }

        }
  },
    name: "NewPartner"
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
</style>
