<script>
//let selected = 30;
let selected;

function onChange(event) {
  selected = event.currentTarget.value;
console.log("selected=", selected)
}
</script>

<label>
  <input checked={selected===10} on:change={onChange} type="radio" name="amount" value="10" /> 10
</label>
<label>
  <input checked={selected===20} on:change={onChange} type="radio" name="amount" value="20" /> 20
</label>
<label>
  <input checked={selected===30} on:change={onChange} type="radio" name="amount" value="30" /> 30
</label>
<hr />
selected : {selected}

