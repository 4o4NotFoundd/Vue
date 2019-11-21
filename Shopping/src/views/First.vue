<template>
    <div calss="main">
        <div class="left">
            <Left></Left>
        </div>
        <div class="right">
            <div class="top">
                <img src="img/title.jpg">
            </div>
            <div class="buttom"></div>
                <Right></Right>
        </div>
    </div>
</template>

<script type="text/javascript">
    import Left from "../components/Left"
    import Right from "../components/Right"
    export default {
        components: {
            Left,
            Right
        }

    }
</script>

<style type="text/css">
    *{
        padding: 0;
        margin: 0;
    }
    .left{
        width:100px;
        float: left;
        margin-left: 10px;
    }
    .right{
        width:1000px;
        background-color: blue;
        float: left;
        margin-left: 10px;
    }
    .main{
        width: 1200px;
        margin: 200px 200px;
    }
    .top img{
        width:1000px;
        height: 200px;
    }
    .left,.right{
        background-color: #f5f5f5;
        height: 500px;
    }

</style>