<template>
<div class="production row">
    <div class="productionCard col-md-6 col-12 shadow-sm my-2" v-for="item in OrganizationInfo" :key="item['param']">
        <div class="mx-2 p-3">
            <div class="thumbnail pointer" @click="$parent.transformLink(item['url'])">
                <img :src="$parent.imageLoad(item['imagePath'])" :alt="item['param']">
            </div>
            <div>
                <div class="productionTitle text-center h4">
                    {{item['name']}}
                </div>
                <div class="small text-right">{{item['date']}}</div>
                <div class="productionDescription">
                    {{item['description']}}
                </div>
                <div class="pb-3">
                    <div class="learnTitle">学び</div>
                    <div>{{item['learn']}}</div>
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
</template>

<script>
export default {
    props:{
        OrganizationInfo:{
            type:Object
        }
    },
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
    overflow: hidden;
}
.thumbnail > img {
    height:150px;
	transition-duration: 0.3s;
}
.thumbnail img:hover {
	transform: scale(2);
	transition-duration: 0.3s;

}
.productionTags{
    display:inline;
}
.productionTag{
    background:#dfe6e9;
    color:#2d3436;
}
.productionTitle{
    font-weight:bold;
    margin:15px 0px;
}
.learnTitle{
    font-weight: bold;
    font-size:20px;
    padding:20px 0px 5px 0px;
    color:#74b9ff;
}
@media screen and (max-width:768px){ 
.productionCard{
    padding:10px 3px;
}
}
</style>
