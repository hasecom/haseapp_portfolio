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
      siteInfo:Object
    }
  },
  created(){
    this.siteInfo = siteInfo;
  }
}
</script>

<style>
body {
  background:rgba(243,243,243);
}
</style>
