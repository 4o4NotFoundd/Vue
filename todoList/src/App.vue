<template>
  <div id="app">
    <div id="todo-wrapper">
      <AaappHeader></AaappHeader>
      <TodoInput v-on:add-event="addTodo123"></TodoInput>
      <TodoItem v-for="x in todos" v-on:remove-event="removeTodo321" v-bind:x="x" :key="x.id"></TodoItem>
    </div>
  </div>
</template>

<script>
import AaappHeader from "./components/Appheader.vue";
import TodoInput from "./components/todoInput.vue";
import TodoItem from "./components/todoItem.vue";
export default {
  name: 'app',
  components: {
    AaappHeader,
    TodoInput,
    TodoItem

  },
  data(){
    return{
      todos:[
              {id:0, text:"01"},
              {id:1, text:"0sdfg"}
      ],
      nextId:2,
    };
  },
  methods:{
    addTodo123(text){
      this.todos.push({id:this.nextId,text:text})
      this.nextId++;
    },
    removeTodo321(id){
      this.todos=this.todos.filter(x=>x.id!==id)
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#todo-wrapper{
  width: 600px;
  min-height: 600px;
  margin: 100px auto 100px auto;
  border: 3px solid lightskyblue;

}
</style>
