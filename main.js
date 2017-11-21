$(document).ready(function() {
  Vue.component('task',{
    template:"<li><slot></slot></li>"
  });

  Vue.component('par',{
    template:"<p><slot></slot></p>"
  });

  var app = new Vue({
    el:'#root',
    data:{

    }
  })

});
