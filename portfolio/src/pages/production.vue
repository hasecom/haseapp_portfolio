<template>
<div>
    <div class="production row">
        <div class="productionCard col-md-6 col-12"  v-for="item in productionInfo" :key="item['param']">
            <div class="mx-2 p-3">
                <div class="thumbnail">
                    <img :src="imageLoad(item['imagePath'])" :alt="item['param']">
                </div>
                <div>
                    <div class="productionTitle text-center h3">
                        {{item['name']}}
                    </div>
                    <div class="productionDescription">
                        {{item['description']}}
                    </div>
                    <div class="productionTagsWrap">
                        <div class="productionTags px-1 py-1" v-for="tag in item['tags'].split(',').length" :key="tag">
                            <div class="productionTag rounded-pill d-inline-block px-2 py-1 my-1 small">
                                    {{item['tags'].split(',')[tag - 1]}}
                            </div>
                        </div>
                    </div>
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
            productionInfo: []
        }
    },
    mounted() {
        this.productionInfo = this.$parent.productionInfo;
    },
    methods: {
        imageLoad(fileName) {
            return require('../assets/images/' + fileName + '.jpg');
        }
    }
}
</script>

<style scoped>
.production>div>div {
    margin: 0 auto;
}
.productionCard{
    width:300px;
    height:auto;
}
.thumbnail{
    text-align:center;
}
.thumbnail > img {
    width:150px;
    height:150px;
}
.productionTags{
    display:inline;
}
.productionTag{
    background:#dfe6e9;
    color:#2d3436;
}
@media screen and (max-width:768px){ 
.productionCard{
    padding:10px 3px;
}
}
</style>
