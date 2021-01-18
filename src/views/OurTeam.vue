<template>
  <div class="w-100 container-fluid">

    <div class="card shadow-lg p-4 text-center">
      <p class="font-weight-bold text-success">Table of contents</p>
      <b-nav align="center" pills>
        <b-nav-item href="#team-tag">Our Team</b-nav-item>
        <b-nav-item href="#partners-tag">Our Partners</b-nav-item>
      </b-nav>
    </div>

    <br />
    <br id="team-tag" />
    <br />
    <br />
    <br />

    <h1 class="w-100 text-success font-weight-bold text-center" style="color: var(--custom-primary-color) !important;">Meet our team</h1>
    <br />
    <p class="text-secondary font-weight-bold w-100 text-center">Admin</p>
    <br >
    <section id="team">
        <div class="container">
            <div class="row">

                <div v-for="x in 4" :key="`team-member-${x}`" class="col-lg-3 col-md-6">
                    <div class="member">
                      <div class="member-img">
                          <img src="@/assets/img/logo.jpeg" class="img-fluid" alt="">
                      </div>
                        <div class="member-info">
                            <h4>Parveen Singh</h4>
                            <span>Web Developer</span>
                            <div class="social-links">
                                <a href="#"><b-icon icon="linkedin"></b-icon></a>
                                <a href="#"><b-icon icon="facebook"></b-icon></a>
                                <a href="#"><b-icon icon="twitter"></b-icon></a>
                                <a href="#"><b-icon icon="instagram"></b-icon></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <br />
    <br />


    <p class="text-secondary font-weight-bold w-100 text-center">Others</p>
    <br >
    <section id="team">
        <div class="container">
            <div class="row">

                <div v-for="x in 12" :key="`team-member-${x}`" class="col-lg-3 col-md-6">
                    <div class="member">
                      <div class="member-img">
                          <img src="@/assets/img/logo.jpeg" class="img-fluid" alt="">
                      </div>
                        <div class="member-info">
                            <h4>Parveen Singh</h4>
                            <span>Web Developer</span>
                            <div class="social-links">
                                <a href="#"><b-icon icon="linkedin"></b-icon></a>
                                <a href="#"><b-icon icon="facebook"></b-icon></a>
                                <a href="#"><b-icon icon="twitter"></b-icon></a>
                                <a href="#"><b-icon icon="instagram"></b-icon></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <br />
    <br id="partners-tag" />
    <br />
    <br />
    <br />

    <h1 class="w-100 text-success font-weight-bold text-center" style="color: var(--custom-primary-color) !important;">Our partners</h1>
    <br />
     <section id="team">
        <div class="container">
            <div class="row">

                <div v-for="x in 4" :key="`team-member-${x}`" class="col-lg-3 col-md-6">
                    <div class="member">
                      <div class="member-img">
                          <img src="@/assets/img/logo.jpeg" class="img-fluid" alt="">
                      </div>
                        <div class="member-info">
                            <h4>Aleko Media</h4>
                            <!--<span>Web Developer</span>-->
                            <div class="social-links">
                                <a href="#"><b-icon icon="linkedin"></b-icon></a>
                                <a href="#"><b-icon icon="facebook"></b-icon></a>
                                <a href="#"><b-icon icon="twitter"></b-icon></a>
                                <a href="#"><b-icon icon="instagram"></b-icon></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <br />
  </div>
</template>

<script>
export default {
    name: "OurTeam"
}
</script>

<style scoped>

.text-secondary{
  color: var(--custom-secondary-color) !important;
}

    #team {
    padding: 60px 0;
    text-align: center;
    background-color: var(--custom-primary-color);
    color: #fff;
}
#team h2 {
    position: relative;
    padding: 0px 0px 15px;
}
#team p {
    font-size: 15px;
    font-style: italic;
    padding: 0px;
    margin: 25px 0px 40px;
}
#team h2::after {
    content: '';
    border-bottom: 2px solid #fff;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    width: 90px;
    margin: 0 auto;
    display: block;
}
#team .member {
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 15px 0px 15px 0px;
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.4);
}
#team .member .member-info {
    display: block;
    position: absolute;
    bottom: 0px;
    left: -200px;
    transition: 0.4s;
    padding: 15px 0;
    background: #0e2401d2;
}
#team .member:hover .member-info {
    left: 0px;
    right: 0px;
}
#team .member h4 {
    font-weight: 700;
    margin-bottom: 2px;
    font-size: 18px;
    color: #fff;
}
#team .member span {
    font-style: italic;
    display: block;
    font-size: 13px;
}
#team .member .social-links {
    margin-top: 15px;
}
#team .member .social-links a {
    transition: none;
    color: #fff;
}
#team .member .social-links a:hover {
    color: #ffc107;
}
#team .member .social-links i {
    font-size: 18px;
    margin: 0 2px;
}
  </style>