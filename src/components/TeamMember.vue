<template>
  <div class="col-lg-3 col-md-6">
                    <div class="member">
                      <div class="member-img">
                          <img
                            :src="imgURL || '/img/logo.jpeg'"
                            width="200"
                            height="200"
                            class="img-fluid team-member-avatar"
                            alt="Team mate"
                            />
                      </div>
                        <div class="member-info">
                            <h4>{{ name }}</h4>
                            <span>{{ role }}</span>
                            <div class="social-links">
                                <a v-if="socials.linkedin" :href="socials.linkedin.url || null"><b-icon icon="linkedin"></b-icon></a>
                                <a v-if="socials.facebook" :href="socials.facebook.url || null"><b-icon icon="facebook"></b-icon></a>
                                <a v-if="socials.twitter" :href="socials.twitter.url || null"><b-icon icon="twitter"></b-icon></a>
                                <a v-if="socials.instagram" :href="socials.instagram.url || null"><b-icon icon="instagram"></b-icon></a>
                            </div>
                            <div
                                class="admin-desicion"
                                v-if="$route.path == '/__admin'"
                                >
                                <br />
                                <b-button-toolbar>
                                    <b-button-group>
                                        <b-button
                                            variant="danger"
                                            class="w-50"
                                            size="sm"
                                            >
                                            Remove
                                            <b-icon icon="person-x" class="text-white" />
                                        </b-button>
                                    </b-button-group>
                                </b-button-toolbar>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    name: "TeamMember",
    props: {
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        imgURL: {
            type: String,
            required: false
        },
        socials: {
            type: Object,
            required: false
        }
    }
}
</script>

<style scoped>
.text-secondary{
  color: var(--custom-secondary-color) !important;
}
.team-member-avatar{
    /*object-fit: cover !important;*/
    max-height: 200px !important;
}
 .member {
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 15px 0px 15px 0px;
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.4);
}
 .member .member-info {
    display: block;
    position: absolute;
    bottom: 0px;
    bottom: -50px !important;
    transition: 0.4s ease-in;
    padding: 15px 0;
    left: 0px;
    right: 0px;
    background: #0e2401d2;
}
 .member:hover .member-info {
    bottom: 0px !important;
    background: #000;
}
 .member h4 {
    font-weight: 700;
    margin-bottom: 2px;
    font-size: 18px;
    color: #fff;
}
 .member span {
    font-style: italic;
    display: block;
    font-size: 13px;
}
 .member .social-links {
    margin-top: 15px;
}
 .member .social-links a {
    transition: none;
    color: #fff;
}
 .member .social-links a:hover {
    color: #ffc107;
}
 .member .social-links i {
    font-size: 18px;
    margin: 0 2px;
}
</style>