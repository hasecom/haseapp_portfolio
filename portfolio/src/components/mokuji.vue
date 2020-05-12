<template>
    <div>
        <div v-for="item in siteinfo['siteInfo']" :key="item['param']">
            <font-awesome-icon icon="caret-right" />{{item['name']}}
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
}
</script>
<style scoped>

</style>