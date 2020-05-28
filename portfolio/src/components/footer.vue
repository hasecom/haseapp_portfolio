<template>
    <div class="text-white">{{footerInfo}}</div>
</template>
<script>
export default {
    props:{
        footerInfo:{
            type:Object
        }
    },
    mounted(){
        console.log(this.footerInfo['footerInfo'])
    }
}
</script>
<style scoped>

</style>