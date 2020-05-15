<template>
    <div id="profile">
        <div class="row">
            <div class="col-md-6 iconWrap">
                <img class="icon" src="@/assets/images/icon.jpg" alt="">
            </div>
            <div class="col-md-6">
                <p class="user_name text-md-left text-center">
                    <ruby>
                        {{myinfo['name']}}<rt>{{myinfo['ruby']}}</rt>
                    </ruby>
                    ({{myinfo['age']}})
                </p>
                <p>
                    {{myinfo['profile']}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            myinfo:[]
        }
    },
    mounted(){
        this.myinfo = this.$parent.myInfo;
    }
}
</script>
<style scoped>
.icon{
    width:150px;
}
.iconWrap{
    text-align: center;
}
.user_name{
    font-size:25px;
    font-weight:bold;
    padding:15px 0px 15px 0px;
}
@media screen and (max-width:768px){ 
.icon{
    width:130px;
}
.user_name{
    font-size:18px;
}
}
</style>