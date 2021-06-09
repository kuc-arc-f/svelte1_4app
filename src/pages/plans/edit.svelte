<script>
import {link} from 'svelte-spa-router'
import Nav from '../../components/Navi.svelte';
import Dexie from 'dexie';
import moment from 'moment';  
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';
//
var config = LibTask.get_const()
var db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );  
export let params = Params

const  get_item = async function (db, id){
  var item = await db.plans.get(parseInt(id) );
  item.p_date = moment(item.p_date).format('YYYY-MM-DD')
//  console.log(d)
  return item
}
async function handleClick() {
//  alert('clicked')
  await save_item(db)
}
async function handleClickDelete() {
console.log('handleClickDelete')
  await delete_item(db)
}
async function delete_item(db){
  try {
    await db.plans.delete(parseInt(params.id) );
    window.location.href = '/#/plans/'
  } catch (error) {
    console.error(error);
  }
}
async function save_item(db){
  try {
    var elemContent = document.getElementById('content');
    var item = {
      content: elemContent.value,
    }
console.log(item)
    await db.plans.update(parseInt(params.id) , item );
    window.location.href = '/#/plans/'
  } catch (error) {
    console.error(error);
  }    
}
</script>

<!-- -->
<Nav />
<div class="container">
	<h3>Plan - edit</h3>
  ID : {params.id}
  <hr />
  {#await get_item(db , params.id) }
  <p>Noow Loading.</p>
  {:then item}
    <div class="form-group w-75">
      <p>Date : {item.p_date}</p>
      <label class="w-100">Content:
        <textarea type="text" class="form-control" name="content" id="content"
        value={item.content} rows="8"></textarea>        
      </label>
      <hr />
      <button on:click={handleClick} class="btn btn-primary">Save</button>
      <hr />
      <button on:click={handleClickDelete} class="btn btn-outline-danger">Delete
      </button>
    </div>
  {/await}
  
  <hr />
</div>
