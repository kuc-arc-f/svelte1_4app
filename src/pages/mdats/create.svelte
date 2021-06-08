<script>
import Dexie from 'dexie';  
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';

var config = LibTask.get_const()
var db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );  

//export let name;
async function handleClick() {
//  alert('clicked')
  await add_item()
}
async function add_item(){
  try {
    var elemWeight= document.getElementById('weight');
    var item = {
      w_num: elemWeight.value,
      mdate: new Date(),
      created_at: new Date(),
    }
console.log(item)
    await db.mdats.add( item )
    window.location.href = '/#/mdats/'
  } catch (error) {
    console.error(error);
  }    
}
</script>

<!-- -->
<div class="container py-2">
	<h3 >mData - Create</h3>
  <hr />
  <div class="form-group w-25">
    <label class="w-100">Wight (kg)
      <input type="number" class="form-control mt-2" name="weight" id="weight" />
    </label>
  </div>
  <hr />
  <button on:click={handleClick} class="btn btn-primary">Create
  </button>
</div>
