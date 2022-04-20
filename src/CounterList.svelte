<script lang="ts" >
  import Counter from "./counter";
  import {onMount} from "svelte";
  let counterItems:Counter[]=[];
  function updateCounter(){
    counterItems=counterItems;
  }
  onMount(()=>{
	  addCounter()
  })
  function addCounter(title=""){
    counterItems.push(new Counter(title));
    counterItems=counterItems;
  }

</script>

{#each counterItems as counter,index}
  <div>
    <input type="text" bind:value={counter.title} on:input={()=>updateCounter()}>
    <span>{counter.Count}</span>
    <button on:click={()=>{counter.IncreaseCount();updateCounter()}}>+</button>
    <button on:click={()=>{counter.DecreaseCount();updateCounter()}}>-</button>
    <button on:click={()=>{counter.ResetCount();updateCounter()}}>0</button>
    <button on:click={()=>{counterItems.splice(index,1);updateCounter()}}>delete</button>
  </div>
{/each}

<button on:click={()=>addCounter()} >NewCounter</button>
<p>
  sum of count {Counter.Sum(counterItems)} <br>
  title list {Counter.TitleList(counterItems)}
</p>

<style>
  div{
    background-color: lightblue;
    margin:5px auto;
    padding:8px;
    width:fit-content;
  }
  span{
    display:inline-block;
    min-width: 50px;
  }
  button,input{
    margin :0px;
  }
</style>