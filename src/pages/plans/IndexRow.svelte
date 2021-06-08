<script>
import {link} from 'svelte-spa-router'
export let obj;
//console.log(obj)
</script>

<!-- -->
{#each obj as day}
<td class="td_cls">
  {#if day.day_disp }
    {day.day_disp}<br />
  {/if}
  {#if day.db_none == 0 }
    {day.content}<br />
    <a href={`/plans/edit/${day.id}`} use:link class="ml-2 btn btn-sm btn-outline-primary">
    Edit</a>  
  {:else} <br /><br />
  {/if}
</td>
{/each}  
