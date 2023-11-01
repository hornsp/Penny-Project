<template>
  <div id="clock">
      <p class="date">{{ date }}</p>
      <p class="time">{{ time }}</p>
  </div>
</template>

<script type="text/javascript">
  export default{
      name:'ClockCustom',
      data(){
          return{
              time: "00:00:00",
              date: "00/00/0000"
          }
      },
      methods: {
          ShowDT:function(){
              const dThisNow = this;
              setInterval(function(){
                  var tdATEN = new Date();
                  dThisNow.date = (tdATEN.getMonth() + 1) + "/" + tdATEN.getDate() + "/" + tdATEN.getFullYear();
                  dThisNow.time = tdATEN.getHours() + ":" + tdATEN.getMinutes() + ":" + tdATEN.getSeconds();
              }, 1000)
          }
      },
      mounted(){
          this.ShowDT();
      }
  }
</script>
