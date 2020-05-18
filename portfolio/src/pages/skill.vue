<template>
<div>
    これはスキルです。
    <div v-for="item in skillInfo" :key="item['param']">
        <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(-90deg)">
            <circle cx="30" cy="30" r="15" fill="rgba(0,0,0,0)" stroke="#ff7675" stroke-width="10" :stroke-dasharray="selfStudyScore(item)" />
            <circle cx="30" cy="30" r="15" fill="rgba(0,0,0,0)" stroke="#00b894" stroke-width="10" :stroke-dasharray="practiceScore(item)" />
            <text x="30" y="30" font-family="Verdana" font-size="3"  transform="translate(60,0) rotate(90)">He</text>
        </svg>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            percent_set:0,
            percent_fill:0,
            skillInfo:[],
            percent_none: 100,
            timerObj: null,
        }
    },
    mounted() {
        this.skillInfo = this.$parent.skillInfo;
    },
    methods: {
    },
    computed: {
        practiceScore: function(){
            return function(item){
                let timeStrings = [item.practice.toString(), this.percent_none.toString()]
                return timeStrings[0] + ',' + timeStrings[1]
            }
        },
        selfStudyScore: function (){
            return function(item){
                let displaySelfStudyScore = item['selfStudy'] + item['practice'];
                let timeStrings = [displaySelfStudyScore.toString(), this.percent_none.toString()]
                return timeStrings[0] + ',' + timeStrings[1]
            }
        }
    }
}
</script>

<style scoped>

</style>
