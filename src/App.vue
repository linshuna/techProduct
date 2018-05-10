<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <ul>
      <li v-for="item in companyList">联系人：{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
// import Qs from 'qs'
export default {
  name: 'App',
  data(){
      return {
        companyList:[]
      }
  },
  mounted: function(){
      this.$nextTick(this.initData)
  },
  methods:{
      initData: function(){
          this.$http.post("apis/api.php/apiForCompanys/getTechlistcompany",{vid: 53})
          .then((result)=>{
              const res = result.data; 
              this.companyList = res.data.Techlist              
          })
          // this.$axios({
          //   method:'post',
          //   url:"apis/api.php/apiForCompanys/getTechlistcompany",
          //   data: Qs.stringify({vid:53})
          // }).then((res)=>{
          //     console.log(res)
          //     this.companyList = res.data.data.Techlist
          // })

      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
