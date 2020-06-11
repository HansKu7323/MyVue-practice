(function(){
  'use strict'

  var vm = new Vue({
    el:'#app',
    data:{
      newItem:'',
      todos:[
        'task1',
        'task2',
        'task3'
      ]
    },
    methods:{
      addItem:function(){
        // e.preventDefault();ページが遷移無効化する
        this.todos.push(this.newItem);
        this.newItem=''
      }
    }
  });

})();