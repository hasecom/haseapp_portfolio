<template>
<div>
    <div>
        <p class="productKindTitle h3">実務</p>
        <Individual :IndividualInfo="individualInfo" />
    </div>
    <div>
        <p class="productKindTitle h3">個人制作</p>
        <Organization :OrganizationInfo="organizationInfo" />
    </div>
</div>
</template>
<script>
import Individual from "@/components/individualProduction"
import Organization from "@/components/organizationProduction"

export default {
    components:{
        Individual,
        Organization
    },
    data() {
        return {
            individualInfo: [],
            organizationInfo:[]
        }
    },
    mounted() {
        this.individualInfo = this.$parent.productionInfo['individualInfo'];
        this.organizationInfo = this.$parent.productionInfo['organizationInfo'];
    },
    methods: {
        imageLoad(fileName) {
            return require('../assets/images/' + fileName + '.jpg');
        },
        transformLink(url) {
            if(url != ""){
                open( url, "_blank" );
            }
            return;
        }
    }
}
</script>

<style scoped>
.productKindTitle { 
    padding:10px 10px 10px 10px;
    margin:15px 0px;
    font-size:22px;
    font-weight:bold;
    background:rgba(116, 185, 255,1.0);
    border-radius:15px;
    display:inline-block;
    color:white;
}
.productKindTitle::before { 
    content: '●';
    color: white;
    margin-right: 8px;
}
</style>
