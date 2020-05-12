<template>
  <div id="app">
    <Header></Header>
    <div id="mokuji">
      <Mokuji :siteinfo="siteInfo"></Mokuji>
    </div>
    <div id="profile">
      <Profile></Profile>
    </div>
    <div id="skill">
      <Skill></Skill>
    </div>
    <div id="production">
      <Production></Production>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Mokuji from "@/components/mokuji"
import Production from "@/components/production"
import Profile from "@/components/profile"
import Skill from "@/components/skill"

import * as siteInfo from "./assets/js/siteinfo.js"

export default {
  name: 'App',
  components:{
    Header,
    Mokuji,
    Production,
    Profile,
    Skill
  },
  data(){
    return{
      siteInfo:Object,
      width:window.innerWidth,
      height:window.innerHeight
    }
  },
  created(){
    this.siteInfo = siteInfo;
  },
  mounted:function(){
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy:function(){
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize: function() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      }
  },
  computed:{
    screenSize(){
      return{
        'width':this.width + "px",
        'height':this.height + "px"
      }
    }
  }
}
</script>

<style>
body {
  background:#2d3436 !important;
}
#app {
  background:rgba(243,243,243) !important;
}
.pointer{
  cursor: pointer;
}
</style>
