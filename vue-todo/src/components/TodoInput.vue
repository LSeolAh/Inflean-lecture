<template>
  <div>
    <input type="text" v-model="newTodoItem" />
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      //local storage에 저장
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      //저장 한 후 input box 초기화
      this.newTodoItem = "";
    },
  },
};
</script>

<style></style>
