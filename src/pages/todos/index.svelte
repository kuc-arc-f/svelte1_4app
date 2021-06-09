<script>
import {link} from 'svelte-spa-router'
import Nav from '../../components/Navi.svelte';
import { onMount } from 'svelte';
import Dexie from 'dexie';  
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';
import LibTodos from '../../lib/LibTodos';
//
export let todo_items = [] , stat_complete = 0
var config = LibTask.get_const()
var db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );  

async function handleClickTodos() {
  stat_complete = 0
  await get_items(db, stat_complete)
  LibTodos.btn_css_change(stat_complete)
}
async function handleClickComplete() {
  stat_complete = 1
  LibTodos.btn_css_change(stat_complete)
  await get_items(db, stat_complete)
}
const  get_items = async function (db, complete){
  var items = await db.todos.toArray()
  todo_items = LibDexie.get_reverse_items(items)
  todo_items = LibTodos.get_item(todo_items , complete)
  return items
}
get_items(db, stat_complete)
onMount(async() => {
  LibTodos.btn_css_change(stat_complete)
console.log('the component has mounted');
});
</script>

<!-- -->
<Nav />
<div class="container">
	<h3>Todos - index</h3>
  <a href="/todos/create" use:link class="btn btn-primary">Create
  </a>
  <hr />
  <button on:click={handleClickTodos} id="btn_todo" class="btn ">
    NotComplete</button>
  <button on:click={handleClickComplete} id="btn_todo_complete"
   class="btn ">
    Completed</button>
  <hr class="mt-0"/>
  {#each todo_items as item}
  <h3><a href={`/todos/show/${item.id}`} use:link>{item.title}</a>
  </h3>
  <p>ID : {item.id}
    <a href={`/todos/edit/${item.id}`} use:link class="ml-2 btn btn-sm btn-outline-primary">
      Edit</a>
  </p>
  <hr />
  {/each}

</div>
