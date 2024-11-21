<script>
  import { sideMenuOpen } from '$lib/store';

  let { menu } = $props();
</script>

<aside
  class="fixed right-0 w-60 h-full px-4 pt-6 bg-white shadow z-10"
  class:hidden={!$sideMenuOpen}
>
  <i
    id="side-menu-close"
    class="fa-solid fa-x mb-16 text-lg cursor-pointer"
    onclick={() => ($sideMenuOpen = false)}
  ></i>
  <ul class="flex flex-col gap-3">
    {#each Object.entries(menu) as [target, text]}
      <li><a href={`#section-${target}`}>{text}</a></li>
    {/each}
  </ul>
  <button class="w-full text-center mt-4 py-2 rounded-full bg-gray-200">
    <i class="fa-solid fa-moon"></i>
    <!-- <i class="fa-solid fa-sun"></i> -->
  </button>
</aside>
