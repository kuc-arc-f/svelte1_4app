<script>
import {link} from 'svelte-spa-router'
import Nav from '../../components/Navi.svelte';
import Dexie from 'dexie'; 
import moment from 'moment' 
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';
import LibPlan from '../../lib/LibPlan';
import IndexRow from './IndexRow.svelte';

//
var params = {
  data: '',
  data_org: [],
  weeks :[],
  month : null,
  month_str : "",
}
var config = LibTask.get_const()
var db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );  
export let DATA=params;

const  get_items = async function (db){
  var items = await db.plans.toArray()
  DATA.weeks= LibPlan.convert_week_array( DATA.weeks, items ,moment() )
// console.log(d) 
  return items
}
var dt = moment( )
var weeks = LibPlan.get_week_items( dt )

DATA.weeks = weeks
DATA.month =  dt
DATA.month_str = dt.format('YYYY-MM') 
//console.log( DATA )
get_items(db)
</script>

<style>
.table th{ min-width: 80px;}
</style>

<!-- -->
<Nav />
<div class="container py-3">
  <h3>Plan : {DATA.month_str}</h3>
  <a href="/plans/create" use:link class="btn btn-primary">Create
  </a>
  <!-- <hr class="my-0"/> -->
  <table class="table table-bordered mt-2">
    <thead>
    <tr>
        <th class="text-danger text-center">日</th>
        <th class="text-center">月</th>
        <th class="text-center">火</th>
        <th class="text-center">水</th>
        <th class="text-center">木</th>
        <th class="text-center">金</th>
        <th class="text-primary text-center">土</th>
    </tr>      
    </thead>
    <tbody>
      {#each DATA.weeks as item}
      <tr>
        <IndexRow obj={item.weekItem} />
      </tr>
      {/each}    
      </tbody>
  </table>

</div>
