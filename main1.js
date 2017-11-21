$(document).ready(function(){

Vue.component('task-list',{
  template:"<div><task v-for='task in tasks'>{{task.task}}</task></div>",
  data(){
    return {
      tasks:[
        {task:'got to school',completed:true},
        {task:'got to store',completed:false},
        {task:'got to club',completed:true},
        {task:'got to home',completed:true},
        {task:'got to busStation',completed:false}
      ]

    };

  }

});

  Vue.component('task',{
    template:"<li><slot></slot></li>"
  });

  var app = new Vue({
    el:'#root',

  })


});
