<template>
    <div>
        <div class="text-white" v-for="item in footerinfo" :key="item['param']">
            {{item['name']}}
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
            "fontawesomeArr":{
                'github':'',
                'twitter':'',
                'contact':''
            }
        }
    },
    mounted(){
        console.log(this.footerinfo)
    }
}
</script>
<style scoped>

</style>