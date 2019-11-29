<template>
    <div id="list">
        <button id="del-btn" v-on:click="removeTodo">删除</button>{{x.text}}
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props:["x"],

        methods:{
            removeTodo(){
                this.$emit("remove-event",this.x.id);
            }
        }
    }
</script>

<style scoped>
#list{
    /*float: left;*/
    width: 400px;
    margin: 10px auto 10px auto;
    padding-right: 10px;
    border-bottom: 1px solid lightgray;
    text-align: left;
    line-height: 30px;
    font-weight: bold;
}
#del-btn{
    border: 2px solid grey;
    line-height: 18px;
    background-color: white;
    color: red;
    margin-right: 10px;

}
</style>