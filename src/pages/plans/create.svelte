<script>
import Dexie from 'dexie';  
import moment from 'moment';
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';

var config = LibTask.get_const()
var db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );  
var dt_now = moment().format('YYYY-MM-DD')
export let p_date=dt_now;
async function handleClick() {
//  alert('clicked')
  await add_item()
}
async function add_item(){
  try {
    var elemDate = document.getElementById('p_date');
    var elemContent = document.getElementById('content');
    var date_str = elemDate.value + "T00:00:00.000Z"
    var p_date = new Date( date_str );    
    var item = {
      p_date: p_date,
      content: elemContent.value,
      created_at: new Date(),
    }
//console.log(item)
    await db.plans.add( item )
    window.location.href = '/#/plans/'
  } catch (error) {
    console.error(error);
  }    
}
</script>

<!-- -->
<div class="container">
	<h3>Plan - Create</h3>
  <hr />
  <div class="form-group w-75">
    <label class="w-100">Date:
      <input type="date" class="form-control" name="p_date" id="p_date" value={p_date}/>
    </label><br />
    <label class="w-100">Content:
      <textarea type="text" class="form-control" name="content" id="content"
       rows="8"></textarea>
    </label>
  </div>
  <hr />
  <button on:click={handleClick} class="btn btn-primary">Add</button>
</div>
