<template>
  <div class="col-12 col-sm-12 col-lg-6 col-md-6">
                    <div class="member">
                      <div class="member-img">
                          <img
                            :src="downloadImgURL || '/img/loading.svg'"
                            width="400"
                            height="400"
                            class="img-fluid team-member-avatar"
                            alt="Team mate"
                            />
                      </div>
                        <div
                            class="member-info"
                            :style="{bottom: $route.path == '/__admin'}"
                            >
                            <h4>{{ name }}</h4>
                            <span>{{ role }}</span>
                            <div v-if="socials" class="social-links">
                                <a v-if="socials.linkedin" target="_blank" :href="socials.linkedin || null"><b-icon icon="linkedin"></b-icon></a>
                                <a v-if="socials.facebook" target="_blank" :href="socials.facebook || null"><b-icon icon="facebook"></b-icon></a>
                                <a v-if="socials.twitter" target="_blank" :href="socials.twitter || null"><b-icon icon="twitter"></b-icon></a>
                                <a v-if="socials.instagram" target="_blank" :href="socials.instagram || null"><b-icon icon="instagram"></b-icon></a>
                                <a v-if="socials.youtube" target="_blank" :href="socials.youtube || null"><b-icon icon="youtube"></b-icon></a>
                            </div>
                            <div
                                class="admin-desicion"
                                v-if="$route.path == '/__admin'"
                                >
                                <br />
                                <center>
                                <b-button-toolbar class="w-100">
                                    <b-button-group class="w-100">
                                        <b-button
                                            variant="warning"
                                            class="w-50"
                                            size="sm"
                                            >
                                            Edit
                                            <b-icon icon="file-earmark-person-fill" />
                                        </b-button>
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
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    name: "TeamMember",
    data(){
        return {
            downloadImgURL: ""
        }
    },
    mounted(){
        if (this.imgURL) {
            const storage = this.$firebase.storage();
            storage.ref(this.imgURL).getDownloadURL()
                .then(url => {
                    this.downloadImgURL = url;
                })
                .catch(e => {
                    console.error(e);
                });
        }
    },
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
    object-fit: cover !important;
    max-height: 400px !important;
}
 .member {
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 15px 0px 15px 0px;
    border: 1px solid #004400;
    box-shadow: 0px 1px 6px 0px rgba(187, 153, 153, 0.4);
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
}
 .member .social-links a {
    transition: all;
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