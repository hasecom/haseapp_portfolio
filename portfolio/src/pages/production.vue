<template>
<div>
    <div>
        <p class="productKindTitle h3">前職までの実績</p>
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
            open( url, "_blank" );
        }
    }
}
</script>

<style scoped>
.productKindTitle { 
    padding:10px 3px;
    font-size:24px;
}
</style>
