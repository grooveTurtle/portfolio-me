<script>
  import { sideMenuOpen } from '$lib/store';
  let { menu } = $props();
</script>

<header
  class="fixed w-full h-[72px] px-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
>
  <nav class="flex w-full h-full justify-between items-center">
    <div class="flex items-center gap-4">
      <h1 class="text-2xl font-bold dark:text-white">전제스</h1>
      <span class="text-sm text-gray-400 dark:text-gray-200">웹 개발자</span>
    </div>
    <div class="hidden md:flex md:justify-center md:items-center md:gap-3">
      <ul class="flex gap-3 items-center">
        {#each Object.entries(menu) as [target, text]}
          <li><a href={`#section-${target}`}>{text}</a></li>
        {/each}
      </ul>
      <button class="text-center py-2 w-10 rounded-full bg-gray-200">
        <i class="fa-solid fa-moon"></i>
        <!-- <i class="fa-solid fa-sun"></i> -->
      </button>
    </div>
    <i
      id="side-menu-open"
      class="fa-solid fa-bars text-2xl cursor-pointer dark:text-white md:hidden"
      onclick={() => ($sideMenuOpen = !$sideMenuOpen)}
    ></i>
  </nav>
</header>
