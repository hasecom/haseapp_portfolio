<template>
  <div id="app">
    <Header></Header>
    <div id="wrap">
      <div id="mokuji">
        <Mokuji :siteinfo="siteInfo"></Mokuji>
      </div>
      <div id="content" class="shadow-sm">
        <span class="page_title">{{pageTitle}}</span>
        <div>
          <router-view></router-view>
        </div>
      </div>
      <div id="footer">
        <Footer :footerinfo="footerInfo"></Footer>
      </div>
    </div>
    <div id="bgImage">
      <img src="./assets/images/background.png" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Mokuji from "@/components/mokuji"
import Footer from "@/components/footer"

import * as siteInfo from "./assets/js/siteinfo.js"
import * as myInfo from "./assets/js/myinfo.js"
import * as skillInfo from "./assets/js/skillinfo.js"
import * as productionInfo from "./assets/js/productionInfo.js"
import * as footerInfo from "./assets/js/footerinfo.js"


export default {
  name: 'App',
  components:{
    Header,
    Mokuji,
    Footer
  },
  watch: {
    '$route' () {
      this.changePath();
    }
  },
  data(){
    return{
      siteInfo:Object,
      myInfo:Object,
      skillInfo:Object,
      productionInfo:Object,
      footerInfo:Object,
      pageTitle:""
    }
  },
  created(){
    this.siteInfo = siteInfo;
    this.myInfo = myInfo['myinfo'];
    this.skillInfo = skillInfo['skillInfo'];
    this.productionInfo = productionInfo;
    this.footerInfo = footerInfo['footerinfo'];
  },
  mounted(){
    this.changePath();
  },
  methods:{
    changePath(){
      siteInfo['siteInfo'].forEach(el => {
        if(el.path == this.$route.path){
          this.pageTitle = el.name
          }
    });
    }
  }
}
</script>

<style>
#bgImage img{
  position: fixed;
  width:100%;
  height:100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background: inherit;/*.bgImageで設定した背景画像を継承する*/
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
.pointer{
  cursor: pointer;
}
#content{
    background:rgba(255,255,255,0.2);
    width:80%;
    margin:0 auto;
    font-size:14px;
    border-radius: 30px;
    padding-top:15px;
    margin-bottom:100px;
}
#content > .page_title {
  padding:0px 50px;
  font-size:20px;
  font-weight: bold;
  color:white;
}
#content > div {
  background:white;
  border-radius:0px 0px 30px 30px;
}
#content > div > div {
  padding:50px 50px;
}
#mokuji{
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#mokuji::-webkit-scrollbar {
  display:none;
}
#footer{
  width:100%;
  height:350px;
  background:#2d3436;
  padding:30px 20%;
}
@media screen and (max-width:768px){ 
  #content{
      width:90%;
  }
  #content > div > div {
    padding:25px 10px;
  }
  #content > .page_title {
    padding:0px 30px;
  }
  #footer{
    padding:30px 10%;
  }
}
</style>
