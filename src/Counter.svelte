<script lang='ts'>
  import Counter1 from "./counter";
  //import { counterItems } from "./store";
  export let counter:Counter1;
  export let delete_function=()=>{};
  export let update_function=()=>{};

</script>

<div>
  <input type="text" bind:value={counter.title}>
  <span>{counter.Count}</span>
   <button on:click={()=>{counter.IncreaseCount();update_function()}}>+</button>
   <button on:click={()=>{counter.DecreaseCount();update_function()}}>-</button>
   <button on:click={()=>{counter.ResetCount();update_function()}}>0</button>
   <button on:click={()=>{delete_function();update_function()}}>delete</button>
</div>