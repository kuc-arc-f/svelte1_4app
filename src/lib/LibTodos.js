//
export default {
  get_complete_items: function(){
    var arr = [
      /*
      {id:1, name:'not completed' ,value: 0,},
      {id:2, name:'Completed' ,value: 1,},
      {id:2, text:'item-3'},
      */
      {id:0, text:'not completed' },
      {id:1, text:'Completed'},
    ]
    return arr
  },
  get_selected_complete: function(items, value){
    var ret = {}
    items.forEach(function(item){
//console.log(item.id);
      if(parseInt(item.id) === parseInt(value) ){
        ret = item
      }
    });      
    return ret
  },
  get_item: function(items, complete){
    var ret = [];
    items.forEach(function(item){
//console.log(item.complete , item.id);
      if(parseInt(item.complete) === parseInt(complete) ){
        ret.push(item)
      }
    });
    return ret
  },
   btn_css_change: function(stat){
    console.log("stat=" , stat)
      var elemTodo = document.getElementById('btn_todo');
      var elemComplete = document.getElementById('btn_todo_complete');
      if(stat === 1){
        elemTodo.classList.remove("btn-outline-success");
        elemComplete.classList.add("btn-outline-success");
      }else{
        elemTodo.classList.add("btn-outline-success");
        elemComplete.classList.remove("btn-outline-success");
      }
    }  
}
