<script>
//	import Checkbox from './Checkbox.svelte';
//	import Radio from './Radio.svelte';
let group = 1;
let selection = [2];
function handleSubmit() {
  console.log(selection)
}
</script>

<div class="container">
  <h1>Checkboxes: {selection.join(', ')}</h1>

  <h3>input</h3>
  <p>
    (Works fine)
  </p>
  <label><input type="checkbox" bind:group={selection} value={1} /> 1</label>
  <label><input type="checkbox" bind:group={selection} value={2} /> 2</label>
  <label><input type="checkbox" bind:group={selection} value={3} /> 3</label> 
  <hr />
  <button on:click={handleSubmit}>Check</button>
</div>

<!--
-->