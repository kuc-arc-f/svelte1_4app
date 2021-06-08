// LibPlan

import LibCommon from './LibCommon';

import moment from 'moment'
//
export default {
    /*********************************
     * get_week_items
    ***********************************/ 
    get_week_items :function(moment){
        var start = this.get_start_date( moment )
        var weeks = this.get_week_array(start)
//console.log( weeks )
        return weeks
    },
    /*********************************
     * convert_week_array
    ***********************************/ 
    convert_week_array :function(weeks, plans, now_date ){  
        var ret = []
        var self = this
        var now_str = now_date.format('YYYY-MM-DD')
//console.log( now_str  )
        weeks.forEach(function(week){
//            console.log( now_str  )
            for(var i=0; i< 7; i++){
                if(week.weekItem[i].day != null){
                    var s = week.weekItem[i].day.format('YYYY-MM-DD')
                    var arr = self.get_plan_item(s, plans)
                    if(arr != null ){
                        var conte = arr.content.substring(0, 4)
                        week.weekItem[i].content = conte
                        week.weekItem[i].id = arr.id
                        week.weekItem[i].db_none = 0
                    //                    console.log( arr  )
                    }
                    if(s === now_str){
                        week.weekItem[i].today = 1
                    }
                }
            }
            ret.push(week)
        }); 
        return ret
    },
    /*********************************
     * get_plan_item
    ***********************************/ 
    get_plan_item :function(day_str, plans){
        var ret = null
        plans.forEach(function(plan){
            var s = LibCommon.formatDate(plan.p_date , "YYYY-MM-DD")
//console.log( plan.id )
            if(day_str === s){
                ret = {
                    content: plan.content,
                    id: plan.id,
                }
            }
        });
        return ret
    },
    /*********************************
     * get_week_array
    ***********************************/ 
    get_week_array :function(dt){
        var dayArray = this.init_day_params()
        var weeks = []
        var weekItem = []

        var day_of_week = dt.day()
        var days_in_month = dt.endOf('month').date()
// console.log( day_of_week )
        for(var i = 0; i < day_of_week;  i++){
            weekItem.push( dayArray )
        }
        var week_no = 1
        for(var day=1; day <= days_in_month ; day++){
            var dayItem =  this.init_day_params()     
            var dayStr = LibCommon.get_string_rigth(day , 2)

            var date = moment(dt.format('YYYY-MM-'+  dayStr))
            dayItem.day = date
            dayItem.day_disp = date.date()
            weekItem.push( dayItem )
            day_of_week = date.day()
            var divNum = (day_of_week % 7)
            if((divNum === 6) 
                || days_in_month === date.date() ){
                var num = 6 - day_of_week
                for(var iCt =0; iCt < num; iCt++ ){
                    var dayEmpty  = this.init_day_params()                    
                    weekItem.push( dayEmpty )
                }
                weeks.push({
                    no: week_no,
                    weekItem: weekItem,
                })
                weekItem = []
                week_no +=1
            }
        }
        return weeks
    },
    init_day_params :function(){
        return {
            day : null,
            day_disp : null,
            today : 0,
            content : null, 
            db_none : 1,           
            id : 0,  
        }
    },
    /*********************************
     * get_start_date
    ***********************************/ 
    get_start_date :function(dt){
        var yymm = dt.format('YYYY-MM')
        yymm = yymm + "-01"
        var ret = moment( yymm )
        return ret
    },
    /*********************************
     *
    ***********************************/ 
   test1 :function(){
        console.log('#_func1aa')
        var dt = moment().toDate()
        var sub = moment().add(1, 'days').toDate()
        var day = moment().add(1, 'days').day()
    },

}
