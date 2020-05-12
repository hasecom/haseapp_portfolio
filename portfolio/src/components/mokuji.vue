<template>
    <div id="mokuji" class="row m-0">
        <div class="col-3 font-weight-bold mokuji" v-for="item in siteinfo['siteInfo']" :key="item['param']">
            <button class="btn rounded-pill">
                {{item['name']}}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        siteinfo:{
            type:Object
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
    margin:5px;
}
.mokuji button{
    background:white;
}
</style>