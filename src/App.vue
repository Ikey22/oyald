<template>
  <div class="root w-100 h-100 m-0 p-0">

    <pre-header />

    <header-component />

    <br />

    <keep-alive>
      <router-view />
    </keep-alive>

    <br v-for="x in 3" :key="`pre-footer-line-break-${x}`" />

  <!-- begin newtork error modal -->
  <b-modal v-model="$store.state.networkErrorModal" ok-only ok-variant="success" size="xl" centered>
    <div class="w-100 h-100">
      <p class="h3 text-center w-100 font-weight-bold text-danger">Network error!!!</p>
    </div>
  </b-modal>
  <!-- #end network error modal -->

      <!-- begin upload progres modal -->
      <b-modal v-model="$store.state.isUploading" no-close-on-esc ok-only ok-title="Continue in background" no-close-on-backdrop hide-header-close>
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
        <!--<template #modal-footer> - </template>-->
      </b-modal>
      <!-- end upload progress modal -->

  <!-- begin success modal -->
  <b-modal v-model="$store.state.successModal" ok-only ok-variant="success" centered>
    <div class="w-100 h-100">
      <p class="h3 text-center w-100 font-weight-bold text-primary-color">Successful!!!!</p>
    </div>
  </b-modal>
  <!-- #end success modal -->

  <!-- begin email already in newsletter modal -->
  <b-modal v-model="$store.state.emailAlreadyInNewsletterModal" ok-only ok-variant="success" size="xl" centered>
    <div class="w-100 h-100">
      <p class="h3 text-center w-100 font-weight-bold text-primary-color">You've already signed up for our newsletter!!!!</p>
    </div>
  </b-modal>
  <!-- #end email already in newsletter modal -->

  <!-- #begin toc modal -->
  <b-modal v-model="$store.state.tocModal" id="toc-modal" ok-only ok-variant="success" size="xl" centered scrollable>
    <template #modal-title><header class="h1" style="color: var(--custom-primary-color) !important;">Terms and Conditions</header></template>
    <p>Membership of OYALD is open to all citizens of African countries and all persons of African descent who:</p>
    <br />
    <ul>
      <li>Are aged between the minimum legal age of maturity in their respective countries of citizenship, and 50 years.</li>
      <li>Have functional literacy in English or French.</li>
      <li>Are engaged professionally, or as volunteers, in development related activities, or who have demonstrated credible support for sustainable development in Africa.</li>
    </ul>
    <br />
    <p>The membership categories are:</p>
    <br />
    <ul>
      <li><b>Active Members:</b> These shall be dues-paying members who undertake, and are obliged, to participate, as much as possible, in all activities of OYALD.</li>
      <li><b>Associate Members:</b> These shall be dues paying members who may not be able to participate in all activities of OYALD.</li>
      <li><b>Honorary Members:</b> These shall be persons who might not satisfy all the criteria for OYALD membership, but who have demonstrated a record of sustainable development practice, and who are supportive of OYALD and its objectives. Honorary members shall not be obliged to pay dues.</li>
    </ul>
    <br />
    <p>While all members of OYALD are obliged to pay registration fees of five US Dollars ($5) once, within the three (3) months following their acceptance into OYALD, Active and Associate members shall pay annual dues of five ($5) USD, to be paid by March of each year. In the case of a new member, the annual dues shall be pro-rated, and shall be paid within 3 months from the date of acceptance into OYALD.</p>
    <br />
    <p>In addition to the above, all members of OYALD are obliged to abide by the provisions in OYALD's constitution and regulations.</p>
  </b-modal>
  <!-- #end toc modal -->


    <footer-component />

  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import PreHeader from '@/components/PreHeader.vue';

export default {
  components: {
    FooterComponent,
    PreHeader,
    HeaderComponent
    },
  name: "App"
}
</script>

<style>
:root{
  --custom-primary-color: #002200;
  --custom-secondary-color: #b99e00;
  --custom-gradient: linear-gradient(to right, var(--custom-green), var(--custom-gold) 80%);
}

@font-face{
  font-family: 'PT Sans Narrow', sans-serif;
  src: url('/font/sans-narrow.ttf');
}

::-webkit-scrollbar{
  background: #999 !important;
  border: 1px solid #004400 !important;
  width: 15px !important;
}

::-webkit-scrollbar-button{
  background: #004400 !important;
  border: 1px solid #fff !important;
}

::-webkit-scrollbar-thumb{
  background: linear-gradient(to bottom right, #004400, #012001, #008800) !important;
  border-radius: 100px !important;
  border: 1px solid #fff !important;
}

*{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  box-sizing: border-box;
}

.bg-success, .bg-primary-color, .bg-green{
  background-color: var(--custom-primary-color) !important;
  }

.text-success, .text-primary-color, .text-green{
  color: var(--custom-primary-color) !important;
}

.bg-secondary{
  background-color: var(--custom-secondary-color) !important;
}

input, textarea, select{
  border-bottom: 1px solid green !important;
}

a, button, .btn, [type=button], [type=submit]{
  cursor: pointer;
}

hr{
  border-top: 1px dotted var(--custom-primary-color) !important;
  border-bottom: 1px dotted #ffffff !important;
}

.box-shadow{
  box-shadow: 5px 5px 5px 5px #999  !important;
}

#root{
  animation-name: fadeIn;
  animation-duration: .45s;
  animation-delay: 0s;
  animation-timing-function: ease-in;

  top: 0;
  left: 0;
  position: relative;
  transform-origin: top left;
}

@keyframes fadeIn {
	from{
		opacity: 0;
		transform: translate3d(0px, 0px, 2px);
		perspective: 1000;
	}
	to{
		opacity: 1;
		transform: translate3d(0px, 0px, 0px);
	}
}

@-webkit-keyframes fadeIn {
	from{
		opacity: 0;
		transform: translate3d(0px, 0px, 2px);
		perspective: 1000;
	}
	to{
		opacity: 1;
		transform: translate3d(0px, 0px, 0px);
	}
}
</style>