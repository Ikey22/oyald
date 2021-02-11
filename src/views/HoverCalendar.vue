<template>
  <center>
      <br />
      <br />
      <b-calendar @mouseleave="mouseLeave" @mouseout="mouseLeave" @mouseend="mouseLeave" :date-info-fn="dateClass" />
      <br />
      <div class="d-block hidden-popover text-black ont-weight-bold h3 p-3 bg-white rounded-lg card-lg" id="hidden-popover">
        Hi There
      </div>
      <br />
      <br />
  </center>
</template>

<script>
export default {
    name: "HoverCalender",
    mounted(){

      //
      
      const addListeners = async () => {
        const arr = document.querySelectorAll('.custom-class');
        const elems = Array.from(arr);
        elems.forEach(elem => { 
          elem.onmouseover = event => {
            const xPos = event.clientX;
            const yPos = event.clientY;
            const popOver = document.querySelector('#hidden-popover'); 
            popOver.style.display = 'block';
            popOver.style.position = 'fixed';
            popOver.style.top = `${yPos}px`;
            popOver.style.left = `${xPos}px`;
          };

          elem.onmousleave = () => {
            document.querySelector('#hidden-popover').style.display = 'none !important'
          }
        });

        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame)(addListeners);
      };

      return addListeners();
    },
    methods: {
        dateClass(_ymd, date) {
        const day = date.getDate()
        return day >= 10 && day <= 20 ? 'custom-class' : '';
      },
      mouseLeave(){
        document.querySelector('#hidden-popover').style.display = 'none !important'
      }
    }
}
</script>

<style>
.custom-class{
  background: orange !important;
}
.hidden-popover{
  position: fixed;
  /*clip-path: polygon(0% 0%, 10% 16%, 1% 26%, 1% 100%, 100% 100%, 100% 24%, 28% 23%);*/
  clip-path: polygon(0% 1%, 8% 14%, 0% 14%, 0% 100%, 99% 99%, 99% 16%, 22% 14%);
}
</style>