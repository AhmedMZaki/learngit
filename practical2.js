$(document).ready(function(){

Vue.component('model',{
  template:`
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
  <div class="box" @click="$emit('close')">
  <slot></slot>
  </div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
  `


});


var app = new Vue({
  el:'#root',
  data:{
    showModel:false
  }

})

});
