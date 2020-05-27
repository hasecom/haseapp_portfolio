<template>
  <div id="profile">
    <div class="row">
      <div class="col-md-6 iconWrap">
        <img class="icon" src="@/assets/images/icon.jpg" alt />
      </div>
      <div class="col-md-6">
        <p class="user_name text-md-left text-center">
          <ruby>
            {{myinfo['name']}}
            <rt>{{myinfo['ruby']}}</rt>
          </ruby>
          ({{myinfo['age']}})
        </p>
        <p>{{myinfo['profile']}}</p>
        <div>
          <div class="introduction_title">
            <p>趣味・最近ハマっていること<font-awesome-icon icon="chevron-right" class="pl-1" /></p>
          </div>
          <div class="hobbyTags px-1 py-1" v-for="tag in myinfo['hobby'].split(',').length" :key="tag">
            <div class="hobbyTag rounded-pill d-inline-block px-2 py-1 my-1 small">{{myinfo['hobby'].split(',')[tag - 1]}}</div>
          </div>
        </div>
        <div>
          <div class="introduction_title">
            <p>好き・尊敬する方<font-awesome-icon icon="chevron-right" class="pl-1" /></p>
          </div>
          <div class="hobbyTags px-1 py-1" v-for="tag in myinfo['respect'].split(',').length" :key="tag">
            <div class="hobbyTag rounded-pill d-inline-block px-2 py-1 my-1 small">{{myinfo['respect'].split(',')[tag - 1]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myinfo: []
    };
  },
  mounted() {
    this.myinfo = this.$parent.myInfo;
  }
};
</script>
<style scoped>
.icon {
  width: 150px;
}
.iconWrap {
  text-align: center;
}
.user_name {
  font-size: 25px;
  font-weight: bold;
  padding: 15px 0px 15px 0px;
}
.introduction_title p {
  color: white;
  background: rgba(45, 52, 54, 0.8);
  display: inline-block;
  border-radius: 15px;
  padding: 3px 10px;
  margin:20px 0px 10px 0px;
  font-size: 16px;
}
.hobbyTags {
  display: inline;
}
.hobbyTag {
  background: #dfe6e9;
  color: #2d3436;
}
@media screen and (max-width: 768px) {
  .icon {
    width: 130px;
  }
  .user_name {
    font-size: 18px;
  }
}
</style>