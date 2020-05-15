<template>
<div>
    これはスキルです。
    <div v-for="item in skillInfo" :key="item['param']">
        <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(-90deg)">
            <circle cx="30" cy="30" r="15" fill="rgba(0,0,0,0)" stroke="#7ebbb8" stroke-width="10" v-bind:stroke-dasharray="formatTime" />
            <circle cx="30" cy="30" r="15" fill="rgba(0,0,0,0)" stroke="red" stroke-width="10" stroke-dasharray="50,50" />
            <text x="30" y="30" font-family="Verdana" font-size="3"  transform="translate(60,0) rotate(90)">He</text>
        </svg>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            skillInfo:[],
            percent_set: 60,
            percent_fill: 0,
            percent_none: 100,
            timerObj: null,
        }
    },
    mounted() {
        this.graph();
        this.skillInfo = this.$parent.skillInfo;
        console.log(this.skillInfo.length)
    },
    methods: {
        graph: function () {
            let self = this;
            self.timerObj = setInterval(function () {
                self.percent_fill++
                self.percent_none--
                if ((self.percent_none == 0) || self.percent_fill == self.percent_set) {
                    clearInterval(self.timerObj)
                }
            }, 10)
        }
    },
    computed: {
        formatTime: function () {
            let timeStrings = [this.percent_fill.toString(), this.percent_none.toString()]
            return timeStrings[0] + ',' + timeStrings[1]
        }
    }
}
</script>

<style scoped>

</style>
