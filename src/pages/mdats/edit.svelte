<script>
import {link} from 'svelte-spa-router'
import Nav from '../../components/Navi.svelte';
import Dexie from 'dexie';  
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';
import LibMdat from '../../lib/LibMdat';
//
var mdat_item = {
  w_num: '' , mdate:''
}
var config = LibTask.get_const()
var db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );  
export let params = Params , item = mdat_item;

const  get_item = async function (db, id){
  var mdat = await db.mdats.get(parseInt(id) );
  item = mdat
  item = LibMdat.get_convert_item_date(item )
console.log(item)
  return mdat
}
get_item(db, params.id)

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
    await db.mdats.delete(parseInt(params.id) );
    window.location.href = '/#/mdats/'
  } catch (error) {
    console.error(error);
  }
}
async function save_item(db){
  try {
    var elemWeight= document.getElementById('weight');
    var mdat = {
      w_num: elemWeight.value,
    }
//console.log(mdat)
    await db.mdats.update(parseInt(params.id) , mdat);
    window.location.href = '/#/mdats/'
  } catch (error) {
    console.error(error);
  }    
}
</script>

<!-- -->
<Nav />
<div class="container">
	<h3>mDat - edit</h3>
  ID : {params.id}
  <hr />
  <div class="form-group">
    <p>Date: {item.mdate}</p>
    <label>weight:
      <input type="text" class="form-control" name="weight" id="weight" 
      value={item.w_num} />
    </label>
    <hr />
    <button on:click={handleClick} class="btn btn-primary">Save</button>
    <hr />
    <button on:click={handleClickDelete} class="btn btn-outline-danger">Delete
    </button>
  </div>
  <hr />
</div>
