Vue.component('task-list',{
template:'<div><task v-for="task in tasks">{{task.task}}</task></div>',
data(){
  return {
    tasks:[
      {task:'go to store ',completed:true},
      {task:'go to school ',completed:true},
      {task:'go to street ',completed:true},
      {task:'go to heaven ',completed:true}
    ]
  };
}
});

Vue.component('task',{
  template:'<li><slot></slot></li>'
});

new Vue({
  el:'#root',

});
