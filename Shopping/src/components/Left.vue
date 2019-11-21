/* eslint-disable */
<template>
    <div>
        <div class="title">热门推荐</div>
        <ul class="menu">
            <li @click="menu1">笔记本电脑</li>
            <li @click="menu2">手机</li>
            <li @click="menu3">生活用品</li>
            <li>学习用品</li>
            <li>书籍</li>
            <li>玩具</li>
            <li>家电</li>
            <li>办公</li>
            <li>旅游</li>
            <li>游戏必备</li>
            <li>居家用品</li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import Msg from './msg.js'
    export default{
        methods:{
            menu1:function () {
                Msg.$emit("val","1");//emit用于触发click事件,之后值为val,1
            },
            menu2:function () {
                Msg.$emit("val","2");
            },
            menu3:function () {
                Msg.$emit("val","3");
            },
        }

    }

</script>

<style type="text/css">
    .title{
        width: 100px;
        color: red;
    }
    .menu{
        height: 50px;
        background-color: white;
        line-height: 50px;
    }
</style>