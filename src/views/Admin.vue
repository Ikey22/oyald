<template>
  <div class="w-100 m-0 p-0">

    <!-- begin auth admin section -->
    <div class="w-100 container-fluid" v-if="($firebase.auth().currentUser !== null) && ($firebase.auth().currentUser !== undefined)">
    <p class="h1 text-primary-color text-center w-100 font-weight-bold">
      Admin
      </p>
    <center>
      <b-list-group style="max-width: 300px;">
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar class="mr-3" :src="$firebase.auth().currentUser.photoURL || null"></b-avatar>
                <span class="mr-auto">{{ $firebase.auth().currentUser.displayName }}</span>
              </b-list-group-item>
           </b-list-group>
           <br />
           <b-button
            variant="danger"
            type="submit"
            @click="adminLogout"
            >Logout</b-button>
           <br />
    </center>
    <br />

    <hr />

    <b-tabs align="center" pills fill justified>

      <!-- Begin Overview -->
      <b-tab active>
        <template #title>
          <b-icon icon="bar-chart-fill" />
          Overview
        </template>
        <hr />

        <div class="py-4">
          <p class="text-primary-color font-weight-bold h3'">Overview</p>
          <center>
            <bar-chart
            v-if="shouldRender"
            :height="400"
            :labels="labels" 
             datasetLabel="Statistical overview"
            :datasetData="[this.members.length, this.membership_requests.length, this.partners.length, this.partnership_requests.length, this.newsletter_subscribtion.length]"
             style="max-width: 950px !important;"
            />
            <center v-else class="w-100 text-center">
              <p class="w-100 h3 text-center text-primary-color font-weight-bold">Loading...</p>
              <br />
              <b-spinner variant="success" />
            </center>
          </center>

          <br />

          <center>
          <table
            class="table table-striped table-bordered table-hover"
            style="max-width: 950px !important;"
            >
            <thead class="thead-light">
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Active Members</th>
                <th scope="row">{{ members.slice(0).filter(member => member.membership_type === "active").length }}</th>
              </tr>
              <tr>
                <th scope="row">Honorary Members</th>
                <th scope="row">{{ members.slice(0).filter(member => member.membership_type === "honorary").length }}</th>
              </tr>
              <tr>
                <th scope="row">Members (Total)</th>
                <th scope="row">{{ members.length }}</th>
              </tr>
              <tr>
                <th scope="row">New membersip requests</th>
                <th scope="row">{{ membership_requests.length }}</th>
              </tr>
              <tr>
                <th scope="row">New partnership requests</th>
                <th scope="row">{{ partnership_requests.length }}</th>
              </tr>
              <tr>
                <th scope="row">Newsletter subscribtions</th>
                <th scope="row">{{ newsletter_subscribtion.length }}</th>
              </tr>
            </tbody>
          </table>
          </center>

        </div>

      </b-tab>
      <!-- #End Overview -->

      <!-- Begin Members -->

      <b-tab>
        <template #title>
          <b-icon icon="people-fill" />
          Members
          <b-badge variant="danger"> {{ members.length }} </b-badge>
        </template>
        <hr />

        <div class="py-4">
          
          <br />

          <b-button
          @click="addMemberModal = true"
          class="bg-primary-color"
          >Add new member <b-icon icon="person-plus" class="text-white" /></b-button>

          <br />
          <br />

          <team-member-list>
            <team-member
                    v-for="(x, index) in members.filter(m => m.category == 'general-secretariat')"
                    :key="`general-secretariat-member-${index + 1}`"
                    :name="`${x.firstName + ' ' + (x.middleName || '') + ' ' + (x.surName || '')}`"
                    :role="x.role"
                    :imgURL="x.imgURL"
                    :socials="x.socials || {}"
                    />
          </team-member-list>

        </div>
      </b-tab>
      <!-- #End Members -->

      <!-- Begin Partners -->
      <b-tab>
        <template #title>
          <b-icon icon="people" />
          Partners
          <b-badge variant="danger"> {{ partners.length }} </b-badge>
        </template>
        <hr />

        <div class="py-4">
          
          <br />

          <b-button
          @click="addPartnerModal = true"
          class="bg-primary-color"
          >Add new partner <b-icon icon="person-plus-fill" class="text-white" /></b-button>

          <br />
          <br />
          
          <team-member-list>
            <team-member
                    v-for="x in 4"
                    :key="`team-partner-${x}`"
                    name="Aleko Media"
                    role="Media Compant"
                    :socials="{
                        facebook: true,
                        linkedin: true,
                        twitter: true,
                        instagram: true
                    }" 
                    />
          </team-member-list>

        </div>
      </b-tab>
      <!-- #End Partners -->

      <!-- Begin Newsletter subscribtion -->
      <b-tab>
        <template #title>
          <b-icon icon="book-half" />
          Newsletter subcriptions
          <b-badge variant="danger"> {{ newsletter_subscribtion.length }} </b-badge>
        </template>
        <hr />

        <div class="py-4">
          
          <center>
            <b-table
            v-if="shouldRender"
            striped
            class="w-100"
            bordered
            outlined
            caption-top
            sort-icon-left
            caption="List of individuals who signed up for the Newsletter"
            responsive="sm"
            hover
            selectable
            select-mode="multi"
            :fields="newsletterTableFields"
            :items="newsletter_subscribtion"
            > 
              <template #cell(subscribed_on)="data" >
                {{ new Date(data.value) || 'unknown' }}
              </template>
            </b-table>
          </center>

        </div>
      </b-tab>
      <!-- End Newsletter subscribion -->

    </b-tabs>

  </div>
  <!-- #end auth admin section -->

















  <!-- begin login form -->
  <div class="w-100 container-fluid" v-else >
    <br />
    <p class="text-center w-100 font-weight-bold text-primary-color h1">
      Admin section. login!
      <b-icon icon="key-fill" />
    </p>
    <br />

    <center>
      <b-form
      @submit.prevent="adminLogin"
      style="max-width: 550px;"
      class="card shadow-lg rounded p-3 d-block text-left"
      >
        <b-form-row>
          <b-form-group
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <label for="email">Email</label>
            <b-form-input
              id="email"
              type="email"
              v-model="adminLoginDetails.email"
              class="w-100"
              placeholder="Type here..."
              :required="true"
            />
            <b-form-text class="font-weight-bold text-danger">Please fill out this field, it's mandatory</b-form-text>
          </b-form-group>

          <b-form-group
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <label for="password">Password</label>
            <b-form-input
              id="password"
              type="password"
              v-model="adminLoginDetails.password"
              class="w-100"
              placeholder="Type here..."
              :required="true"
            />
            <b-form-text class="font-weight-bold text-danger">Please fill out this field, it's mandatory</b-form-text>
          </b-form-group>
        </b-form-row>

        <br />
        
        <b-form-row>
          <b-button
            type="button"
            variant="danger"
            @click="showSendPasswordResetEmailModal = true"
            class="col-6 font-weight-bold"
            >Forgotten password?</b-button>

          <b-overlay
            :show="isLoggingIn"
            rounded
            opacity="0.6"
            spinner-small
            class="d-inline-block col-6">
              <b-button
                  type="submit"
                  class="bg-primary-color font-weight-bold w-100 h-100"
                  >Login</b-button>
            </b-overlay>
        </b-form-row>
      </b-form>
    </center>

  </div>
  <!-- #end login form -->

  <!-- #begin send password reset modal -->
  <b-modal v-model="showSendPasswordResetEmailModal" ize="md">
    <template #modal-title>
      <p class="h4 text-center w-100 font-weight-bold">Type your email below, we will send you a reset link</p>
    </template>
    <b-form class="w-100 h-100 p-0 m-0" @submit.prevent="sendPasswordResetEmail">
      <b-form-group>
        <label for="password-reset-email">Email Address</label>
        <b-form-input 
          id="password-reet-email"
          type="email"
          placeholder="Type your email here"
          v-model="passwordResetDetails.email"
        />
      </b-form-group>
      <br />
      <b-overlay
          :show="passwordResetDetails.isSending"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="succes"
          class="d-inline-block w-100"
          >
            <b-button
              variant="succes"
              type="submit"
              block
              class="bg-primary-color text-white">Submit</b-button>
        </b-overlay>
    </b-form>
    <template #modal-footer> - &nbsp; </template> 
  </b-modal>
  <!-- #end send password reset modal -->

  <!-- begin invalid credentials modal -->
  <b-modal v-model="showInvalidLoginDetailsModal" ok-only ok-variant="success" size="md" centered> 
    <template #modal-title>
      <p class="h3 text-center w-100 text-center w-100 font-weight-bold text-danger">Invalid credentials!!!</p>
    </template>
  </b-modal>
  <!-- #end invalid credentials modal -->

  <!-- #begin add new member form -->
  <b-modal v-model="addMemberModal" size="xl" centered scrollable>
    <template #modal-title><center class="w-100 h1 text-center text-primary-color">Add new member</center></template>
    <new-member-form />
    <template #modal-footer> - &nbsp;</template>
  </b-modal>
  <!-- #end add new member form -->

  <!-- #begin add new partner form -->
  <b-modal v-model="addPartnerModal" size="xl" centered scrollable>
    <template #modal-title><center class="w-100 h1 text-center text-primary-color">Add new partner</center></template>
    <new-partner-form />
    <template #modal-footer> - &nbsp;</template>
  </b-modal>
  <!-- #end add new partner form -->

  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import TeamMember from '@/components/TeamMember.vue';
import TeamMemberList from '@/components/TeamMemberList.vue';
import NewMemberForm from '../components/NewMemberForm.vue';
import NewPartnerForm from "../components/NewPartnerForm.vue";

//import Overview from '@/components/Admin/Overview.vue';

export default {
  components: {
    BarChart,
    TeamMember,
    TeamMemberList,
    NewPartnerForm,
    NewMemberForm,
    //Overview
  },
    name: "Admin",
    computed: {
      partners: {
        get(){
          return this.members.filter(member => member.category == 'partner');
        }
      },
      datasetData: {
        get(){
          return [this.members.length, this.membership_requests.length, this.partners.length, this.partnership_requests.length, this.newsletter_subscribtion.length];
        }
      }
    },
    data(){
      return {
        Date,

        addMemberModal: false,
        addPartnerModal: false,

        members: [],
        membership_requests: [],
        partnership_requests: [],
        newsletter_subscribtion:  [],
        capacity_building: [],

        shouldRender: true, 

        unsubscribeListeners: [],

        adminLoginDetails: {
          email: "",
          password: ""
        },
        showInvalidLoginDetailsModal: false,
        showPasswordResetModal: false,
        showSendPasswordResetEmailModal: false,
        isLoggingIn: false,

        passwordResetDetails: {
          email: "",
          isSending: false,
          sent: false
        },
        
        labels: [`Members`, `New Membership Requests`, `Partners`, `New Partnership Requests`, `Newsletter subscribtions`],
        newsletterTableFields: [
          {
            key: "email",
            sortable: true
          },
          {
            key: "subscribed_on:",
            sortable: true,
          }
        ]
      }
    },

    beforeDestroy(){
      this.unSubscribe();
    },

    mounted(){
      if (this.$firebase.auth().currentUser) this.subscribe();
      this.reRender();
    },

    /* updated(){
      if (this.$firebase.auth().currentUser) this.subscribe();
    }, */

    methods: {
      adminLogout(){
        const $this = this;
        this.$firebase.auth().signOut().then(() => {
              $this.$store.commit('setAuthAdmin', null);
              console.clear();
              // $this.$firebase.auth().currentUser = null;
              console.log($this.$firebase.auth().currentUser);
              $this.$store.commit('showSuccessModal', true);
              $this.$router.push("/home-page");
              window.location.reload();
              $this.unSubscribe();
              $this.$firebase.analytics().logEvent("admin_logout", { ...$this.$store.state.authAdmin, date: (Date.now() || (new Date()).getTime()) });
          }).catch((error) => {
            console.trace(error);
            $this.$store.commit("showNetworkErrorModal", true);
          });
      },

      sendPasswordResetEmail(){
        const $this = this;

        $this.passwordResetDetails.isSending = true;

            this.$firebase.auth().sendPasswordResetEmail($this.passwordResetDetails.email).then(function() {
              $this.passwordResetDetails.isSending = false;
              alert("a link has been sent to your email address")
            }).catch(function(error) {
              $this.passwordResetDetails.isSending = false;
              console.error(error);
               if (error.code == "auth/network-request-failed") {
                 $this.showNetworkErrorModal = true;
               } else alert("an error occurred")
            });
      },

      subscribe(){
        const $this = this; 

              $this.unsubscribeListeners.push($this.subscribeTo('members'));
              $this.unsubscribeListeners.push($this.subscribeTo('membership_requests'));
              $this.unsubscribeListeners.push($this.subscribeTo('partnership_requests'));
              $this.unsubscribeListeners.push($this.subscribeTo('newsletter_subscribtion'));
              $this.unsubscribeListeners.push($this.subscribeTo('capacity_building'));
              $this.reRender();
      },

      unSubscribe(){
        if (this.unsubscribeListeners.length) this.unsubscribeListeners.forEach(listener => listener());
      },

      subscribeTo(collectionName){
        const $this = this;

                  const ref = $this.$firebase.firestore()
                                    .collection(collectionName);

                    /* ref.get().then(res => {
                                                    const newArray = [];

                                                    res.docs.forEach(doc => {
                                                      newArray.push(doc.data());
                                                    });

                                                    $this[collectionName] = [...newArray];
                                                    reRender();
                                                  }).catch(error => {
                                                      reRender();
                                                      if ($this.$store.state.authAdmin && $this.$firebase.auth().currentUser) $this.unsubscribeListeners.push(subscribeTo(collectionName));
                                                      console.error(error);
                                                    }); */

      //


                    const unsubscribeListener = ref.onSnapshot(snapshot => {

                                                    const newArray = [];

                                                    if (snapshot.docs.length) snapshot.docs.forEach(doc => {
                                                      newArray.push(doc.data());
                                                    });

                                                    $this[collectionName] = [...newArray];
                                                    $this.reRender();
                                                  }, error => {
                                                    console.error(error)
                                                    $this.reRender();
                                                    if ($this.$store.state.authAdmin && $this.$firebase.auth().currentUser) $this.unsubscribeListeners.push($this.subscribeTo(collectionName));
                                                  });


                    return unsubscribeListener;

                },

      reRender(){
        const $this = this;

                  $this.shouldRender = false;
                  setTimeout(() => {$this.shouldRender = true}, 150);
                },

      adminLogin(){

        const $this = this;
        $this.isLoggingIn = true;

        const commitAdmin = matchedUser => {
          
                const prevettedUser =  JSON.parse(JSON.stringify(matchedUser));
                const vettedUser = { ...prevettedUser }
                vettedUser.password = null;
                $this.$store.commit('setAuthAdmin', vettedUser);
                $this.$firebase.analytics().logEvent('admin_login', { ...vettedUser, date: (Date.now() || (new Date()).getTime())});
                $this.$store.commit('showSuccessModal', true);
                $this.isLoggingIn = false;
                $this.adminLoginDetails.password = '';

              $this.subscribe();

              };

              //

        const { email, password } = $this.adminLoginDetails;
        const matchPromise = $this.$firebase.firestore()
                                    .collection('members')
                                    .where('email', '==', email.toString().toLowerCase())
                                    .where('password', '==', password.toString().toLowerCase())
                                    .get();

        matchPromise.
          then(match => {
          const matchedUser = match.docs[0];

          if(matchedUser && matchedUser.exists){
                $this.$firebase.auth().signInWithEmailAndPassword(email, password)
                  .then((userCredentials) => {
                    // Signed in
                    // const user = userCredentials.user;
                    const _user = { ...matchedUser.data(), firebaseUser: userCredentials.user };
                    if ($this.$firebase.auth().currentUser !== null) {
                      commitAdmin(_user);
                    } else {
                      $this.$store.state.commit("setAuthAdmin", null);
                      $this.adminLogin();
                    }
                  })
                  .catch((error) => {
                    console.trace(error);
                    $this.isLoggingIn = false;
                    $this.$store.commit('showNetworkErrorModal', true);
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                  });
          } if (!matchedUser.exists) {
            $this.isLogingIn = false;
            $this.showInvalidLoginDetailsModal = true;
          } else {
            switch (matchedUser) {
            case undefined:
              (() => {
                $this.showInvalidLoginDetailsModal = true;
                $this.isLoggingIn = false;
              })();
              break;

            case null:
              (() => {
                  alert('invalid login credentials');
                  $this.isLoggingIn = false;
                })();
              break;
          
            default:
              //commit(matchedUser.data());
              (() => {
                console.error("unable to login");
                alert("Unable to login for an unknown reason, it could be due to poor internet or a proxy");
                $this.isLoggingIn = false;
              })()
              break;
          }
          }

        })
          .catch(err => {
            $this.$store.commit('showNetworkErrorModal', true);
            console.error(err);
            $this.adminLoginDetails.password = '';
            $this.isLoggingIn = false;
          });


      }

    }
}
</script>

<style scoped>
</style>