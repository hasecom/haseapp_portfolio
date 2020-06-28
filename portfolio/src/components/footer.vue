<template>
    <div>
        <div class="text-white footer_info" v-for="item in footerinfo" :key="item['param']"> 
            <a :href="item['path']" target="_blank">
                <font-awesome-icon :icon="fontawesomeArr[item['param']]" class="pr-1" />
                {{item['name']}}
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        footerinfo:{
            type:Object
        }
    },
    data(){
        return {
            fontawesomeArr:{
                'github':['fab', 'github'],
                'Twitter':['fab', 'twitter'],
                'contact':'envelope'
            }
        }
    },
    mounted(){
    }
}
</script>
<style scoped>
.footer_info{
    text-align: center;
    padding:5px 0px;
    font-size:23px;
}
.footer_info a{
    color:white;
}
</style>