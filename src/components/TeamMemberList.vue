<template>
  <section class="team-member-list">
        <div class="container">
            <div class="row">
                <slot />
            </div>
        </div>
  </section>
</template>

<script>
export default {
    name: "TeamMemberList"
}
</script>

<style scoped>
.text-secondary{
  color: var(--custom-secondary-color) !important;
}
.team-member-list {
    padding: 60px 0;
    text-align: center;
    /*background-color: var(--custom-primary-color);*/
    color: #fff;
}
.team-member-list h2 {
    position: relative;
    padding: 0px 0px 15px;
}
.team-member-list p {
    /*font-size: 15px;
    font-style: italic;*/
    padding: 0px;
    margin: 25px 0px 40px;
}
</style>