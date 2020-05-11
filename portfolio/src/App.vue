<template>
  <div id="app">
    <Header></Header>
    <div id="mokuji">
      <Mokuji></Mokuji>
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
export default {
  name: 'App',
  components:{
    Header,
    Mokuji,
    Production,
    Profile,
    Skill
  }
}
</script>

<style>

</style>
