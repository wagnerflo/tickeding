<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<h1>List of Events ({data.events.length})</h1>

<ul>
{#each data.events as event}
  <li>{event.slug}</li>
{/each}
</ul>
