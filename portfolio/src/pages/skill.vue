<template>
<div>
    <div class="row">
        <div class="skillGraph col-6 col-md-4" v-for="item in skillInfo" :key="item['param']">
            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(-90deg)">
                <circle class="selfStudyCircle" :style="'--selfStudyScore:' + Number(item['practice']  + item['selfStudy']) + ' 100'" cx="30" cy="30" r="15" fill="rgba(0,0,0,0)" stroke="#ff7675" stroke-width="10" :stroke-dasharray="selfStudyScore(item)" />
                <circle class="practiceCircle" :style="'--practiceScore:' +  Number(item['practice']) + ' 100'" cx="30" cy="30" r="15" fill="rgba(0,0,0,0)" stroke="#00b894" stroke-width="10" :stroke-dasharray="practiceScore(item)" />
               <text x="50%" y="50%" fill="#2d3436" font-size="5" font-weight="bold" dominant-baseline="middle" text-anchor="middle"  transform="translate(60,0) rotate(90)">{{item['subject']}}</text>    
            </svg>
            <div class="skillPeriod">
                <ul>
                    <li>実務経験：{{item['practicePeriod']}}</li>
                    <li>独学：{{item['selfStudyPeriod']}}</li>
                </ul>
            </div>
        </div>
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
<style>
:root {
  --selfStudyScore:0 100;
  --practiceScore:0 100;
}
</style>
<style scoped>
.skillGraph{
    width:200px;
    height:auto;
}
.skillPeriod > ul {
  list-style: none;
  padding:0px;
}
.skillPeriod > ul > li::before  {
    content:'■';
    padding-right:10px;
}
.skillPeriod > ul > li:first-child::before  {
    color:#00b894;
}
.skillPeriod > ul > li:last-child::before  {
    color:#ff7675;
}
@keyframes selfStudyCircle {
  from { stroke-dasharray: 0 100; }
  to { stroke-dasharray: var(--selfStudyScore); }
}
@keyframes practiceCircle {
  from { stroke-dasharray: 0 100; }
  to { stroke-dasharray: var(--practiceScore); }
}
.selfStudyCircle {
    animation: selfStudyCircle 3s;
}
.practiceCircle {
    animation: practiceCircle 3s;
}
@media screen and (max-width:768px){ 
    .skillPeriod > ul {
        font-size:10px;
    }
}
</style>
