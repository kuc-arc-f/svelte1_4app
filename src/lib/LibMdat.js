import moment from 'moment';  
//
export default {
  get_convert_date : function(items ){
    var ret = [];
    items.forEach(function(item){
      //console.log(item.created_at );
      var dt = moment(item.mdate).format('YYYY-MM-DD')
      item.mdate  = dt
      ret.push(item)
//console.log(dt)
    });
    return ret
  },
  get_convert_item_date : function(item ){
    var dt = moment(item.mdate).format('YYYY-MM-DD')
    item.mdate  = dt
    return item
  },
}
