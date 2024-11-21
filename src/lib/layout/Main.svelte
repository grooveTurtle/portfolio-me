<script>
  let { children } = $props();
</script>

<main
  class="container flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto px-6 pt-[72px]"
>
  {@render children()}
</main>
