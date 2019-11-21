<template>
    <div name="show">
        <ul class="goodList">
            <li v-for="good in list":key="good">
                <img v-bind:src="good.img">
                <p>{{good.goodName}}</p>
            </li>
        </ul>
    </div>
</template>
<style type="text/css">
    .goodList li{
        width: 200px;
        height: 200px;
        list-style-type: none;
        /*不显示前面小圆点*/
        float: left;
        font-size:9px;
        color: red;
        margin-bottom: 30px;

    }
    .goodList img{
        width: 170px;
        height: 170px;
    }
</style>
<script>
    export default {
        name: "show",
        data(){
            var obj=this;
            var url="";
            if(obj.goodId==1){
                url="json/bjb.json";
            }
            else if(obj.goodId==2){
                url="json/phone.json";
            }
            this.$http.get(url).then(function(res){
                 obj.list=res.data;//调用bjb.json的数据给list
            });
            return{
                list:[]
            }
        },
        props:{
            // 父子组件传值
            goodId:Number
            // id:number()
        },
        watch:{
            goodId(){
                var obj=this;
                var url="";
                if(obj.goodId==1){
                    url="json/bjb.json";
                }
                else if(obj.goodId==2){
                    url="json/phone.json";
                }
                this.$http.get(url).then(function(res){
                    obj.list=res.data;//调用bjb.json的数据给list
                });
                return{
                    list:[]
                }
            }
        }
    }

</script>

<!--<style scoped>-->

<!--</style>-->