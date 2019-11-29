<template>
    <div id="input">
        <input id="inputtext" type="text" v-model="text" v-on:keyup.enter="addTodo" placeholder="输入事项，回车确定">
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        data(){
            return{
                text:""
            };
        },
        methods:{
            addTodo(){
                this.$emit("add-event",this.text);
                // 子元素上的点击事件成功后，通过 $emit 将事件和数据发射出去,发送到add-event对应的method，
                this.text="";
            }
        }
    }
</script>

<style scoped>
#inputtext{
    outline:none;
    /*box-shadow: none;*/
    border: none;
    border-bottom: 2px solid lightskyblue;
    border-top: 2px solid lightskyblue;
    width: 400px;
    line-height: 30px;
    margin:20px auto 20px auto;
    padding: 5px;
}
</style>