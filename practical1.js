// jQuery selector to make sure DOM is loadded successfully
$(document).ready(function(){
  Vue.component("message",{
    // this line tells vue component which values to allow
    props:['title','body'],
    data(){
      return {
        isVisible:true
      };
    },
    template:"<article v-show='isVisible' class='message'><div class='message-header'>{{title}}<button type='button'@click='isVisible=false' class='close'>X</button></div><div class='message-body'>{{body}}</div></article>"
    // ,
    // methods:{
    //   hideModel(){
    //     this.isVisible=false;
    //   }
    // }
  });
        var app = new Vue({
          el:'#root',
          data:{

          }
        });
});
