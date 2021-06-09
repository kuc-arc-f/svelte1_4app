<script>
import {link} from 'svelte-spa-router'
import Nav from '../../components/Navi.svelte';
import Dexie from 'dexie';  
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';
import LibMdat from '../../lib/LibMdat';
//
const  get_items = async function (db){
  var items = await db.mdats.toArray()
  items = LibDexie.get_reverse_items(items)
  items = LibMdat.get_convert_date(items)
  return items
}
var config = LibTask.get_const()
var db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );  
</script>

<!-- -->
<Nav />
<div class="container">
	<h3>mData - index</h3>
  <p class="text-secondary">measure data , display chart.js
    <span class="mx-2">
      <a href="/mdats/chart" use:link class="btn btn-sm btn-outline-primary">Chart</a>      
    </span>
  </p> 
  <hr />
  <a href="/mdats/create" use:link class="btn btn-primary">Create
  </a>
  <hr />
  {#await get_items(db) }
  <p>Noow Loading.</p>
  {:then items}
    {#each items as item}
    <h3>{item.w_num}</h3>
    <p>Date : {item.mdate}
     , ID : {item.id} 
      <a href={`/mdats/edit/${item.id}`} use:link class="mx-2 btn btn-sm btn-outline-primary">
        Edit</a>
    </p>
    <hr />
    {/each}
  {/await}
</div>
