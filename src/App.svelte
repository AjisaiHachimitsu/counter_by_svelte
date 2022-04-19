<script lang="ts">
  import Counter from "./Counter.svelte";
  import { onMount } from "svelte";
  import Counter1 from "./counter";
  import {counterItems} from './store'
  onMount(()=>{
	  addCounter()
  })
  function addCounter(title=""){
    $counterItems=[...$counterItems,new Counter1(title)]
  }
  function sum(counters:Counter1[])
  {
    return Counter1.Sum(counters);
  }
</script>

<main>
	<h1>Multiple Counter</h1>
  {#each $counterItems as item,i}
    <Counter counter={item} delete_function={()=>{$counterItems.splice(i,1);$counterItems=$counterItems}} update_function={()=>$counterItems=$counterItems}/>
  {/each}
  <div><button on:click={()=>addCounter()} >NewCounter</button></div>
	<p>sum of count {sum($counterItems)}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>