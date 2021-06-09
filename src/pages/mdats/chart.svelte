<script>
import {link} from 'svelte-spa-router'
import Nav from '../../components/Navi.svelte';
import { onMount } from 'svelte';
import Dexie from 'dexie';
import moment from 'moment';  
import LibTask from '../../lib/LibTask';
import LibMdat from '../../lib/LibMdat';
import LibDexie from '../../lib/LibDexie';

var color_blue = 'rgb(54, 162, 235)';
export let weight_data = [], label_data=[];

function get_config(weight_data){
  return {
    type: 'line',
    data: {
      labels: label_data,
      datasets: [{
        label: 'Weight',
        fill: false,
        backgroundColor: color_blue,
        borderColor: color_blue,
        data: weight_data,
      }]
    },
    options: {
      responsive: true,
      tooltips: { mode: 'index',intersect: false,},
      hover: { mode: 'nearest',intersect: true},
      /*
      title: {display: true, text: 'Chart.js Line Chart'},
      scales: {
        xAxes: [{display: true,
          scaleLabel: { display: true, labelString: 'Month'}
        }],
        yAxes: [{display: true,
          scaleLabel: { display: true, labelString: 'Value'}
        }]
      }
      */
    }
  };
}
var config = LibTask.get_const()
var db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );

const  get_items = async function (db){
  var items = await db.mdats.toArray()
  items = LibMdat.get_convert_date(items)
  var arr = convert_chart_arr(items)
console.log(arr)
  weight_data = arr.wnum
  label_data = arr.lbl
  return items
}
function convert_chart_arr( items ){
	var wnum = []
	var lbl = []
	items.forEach( function (item) {
//console.log( item );    
		lbl.push( item.mdate )                
		wnum.push( item.w_num )                
	});
	var ret= {
		"lbl" : lbl,
		"wnum" : wnum,
	}
	return ret;
}
onMount(async() => {
  await get_items(db)
  const config = get_config(weight_data)
//console.log(config);
  var ctx = document.getElementById('myChart').getContext('2d');
  window.myLine = new Chart(ctx, config);
console.log('the component has mounted');
});
</script>

<!-- -->
<Nav />
<div class="container">
	<h3> mDat - Chart</h3>
	<hr />
	<canvas id="myChart" ></canvas>
</div>
