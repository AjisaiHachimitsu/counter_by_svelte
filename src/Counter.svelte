<script lang='ts'>
  import Counter1 from "./counter";
  import { counterItems } from "./store";
  export let title="";
  $counterItems=[...$counterItems,new Counter1(title)]
</script>

<div>
  {#each $counterItems as counter,index}
    <input type="text" bind:value={counter.title}>
    <span>{counter.Count}</span>
    <button on:click={()=>{counter.IncreaseCount();counter=counter;}}>+</button>
    <button on:click={()=>{counter.DecreaseCount();counter=counter;}}>-</button>
    <button on:click={()=>{counter.ResetCount();counter=counter;}}>0</button>
    <button on:click={()=>{$counterItems.splice(index,1);}}>delete</button>
  {/each}
</div>