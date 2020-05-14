<template>
    <div id="mokuji" class="container">
        <div class="row">
            <div class="col-4 font-weight-bold mokuji text-center" v-for="item in siteinfo['siteInfo']" :key="item['param']">
                <router-link :to="item['path']" tag='button' class="btn rounded-pill" :style="selectPage(item['path'])">{{item['name']}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        siteinfo:{
            type:Object
        }
    },
    computed:{
        selectPage:function(){
            return function(path){
                let rtnVal = [];
                if(this.$route.path == path){
                    rtnVal = {
                        "background":"white"
                    }
                }else{
                    rtnVal = {
                        "background":"none",
                        "color":"white"
                    }
                }
                return rtnVal;
            }
        }
    }
    
}
</script>
<style scoped>
#mokuji{
    white-space: nowrap;
    overflow-x: auto;
    padding:10px 5px;
}
.mokuji{
    font-size:20px;
}
.mokuji button{
    background:white;
    color:#636e72;
}
</style>