<template>
    <div>
        <div v-if="kk==1">
            <GoodList :goodId="1"></GoodList>
<!--            goodId变量可以自己定义，aa等-->
        </div>
        <div v-else-if="kk==2">
            <GoodList :goodId="2"></GoodList>
        </div>
        <div v-else-if="kk==3">
            333
        </div>
    </div>
</template>

<script type="text/javascript">
    import Msg from './msg.js'
    import GoodList from './goodsList.vue'
    export default {
        Msg,
        data(){
            return{
                kk:1
            }
        },
        mounted(){
            var _this=this//——this是this的复制
            Msg.$on('val',function (m) {
                _this.kk=m
            })
        },
         components:{
             GoodList
         },
    }
</script>

<style scoped>

</style>