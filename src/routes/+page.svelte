<script>
  import Header from '$lib/layout/Header.svelte';
  import Main from '$lib/layout/Main.svelte';
  import Aside from '$lib/layout/Aside.svelte';
  import Section from '$lib/layout/Section.svelte';
  import Footer from '$lib/layout/Footer.svelte';

  let { data } = $props();
</script>

<Header menu={data.menu} />
<Aside menu={data.menu} />
<Main>
  <!-- Home Section -->
  <section
    class="w-full grid grid-cols-1 gap-2 place-items-center md:grid-cols-2"
  >
    <!-- Gravatar -->
    <img
      id="gravatar-image"
      src={data.profile?.gravatarUrl}
      class="border-white border-2 rounded-full w-52 h-52 mb-4"
      alt="my gravatar profile avatar icon"
    />
    <div class="flex flex-col gap-3 items-center md:items-end">
      <h1 class="text-4xl font-bold dark:text-white">전제스</h1>
      <h3 class="text-xl dark:text-white">그냥 개발자</h3>
      <p class="text-gray-600 dark:text-gray-400 text-center md:text-right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quidem
        labore autem totam expedita sunt magni saepe, dignissimos ipsam
        inventore culpa dolorem quaerat deleniti aperiam deserunt, ipsum
        possimus cumque eius.
      </p>
    </div>
  </section>
  <!-- About Section -->
  <section class="flex flex-col w-full gap-5">
    <h2 class="text-3xl font-bold">소개</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div
        class="bg-gray-200 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
      >
        <h3 class="text-xl font-bold mb-4">
          <i class="fa-solid fa-graduation-cap"></i> 경력
        </h3>
        <ul class="">
          <li>
            <i class="fa-solid fa-arrow-pointer"></i> 2021.01 ~ 현재: 개발자
          </li>
          <li>
            <i class="fa-solid fa-arrow-pointer"></i> 2019.01 ~ 2020.12: 대학생
          </li>
        </ul>
      </div>
      <div
        class="bg-gray-200 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
      >
        <h3 class="text-xl font-bold mb-4">
          <i class="fa-solid fa-laptop"></i> 자격증
        </h3>
        <ul class="">
          <li>
            <i class="fa-solid fa-arrow-pointer"></i> 2021.01 ~ 현재: 개발자
          </li>
          <li>
            <i class="fa-solid fa-arrow-pointer"></i> 2019.01 ~ 2020.12: 대학생
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section id="section-skills" class="w-full">
    <h2 class="text-3xl font-bold mb-6">기술</h2>
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
      <div
        class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
      >
        <i class="fa-brands fa-html5 text-4xl text-red-500 mb-1"></i>
        <h3 class="text-lg font-semibold">HTML5</h3>
      </div>
      <div
        class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
      >
        <i class="fa-brands fa-css3-alt text-4xl text-blue-500 mb-1"></i>
        <h3 class="text-lg font-semibold">CSS3</h3>
      </div>
      <div
        class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
      >
        <i class="fa-brands fa-js text-4xl text-yellow-400 mb-1"></i>
        <h3 class="text-lg font-semibold">JavaScript</h3>
      </div>
      <div
        class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
      >
        <i class="fa-brands fa-react text-4xl text-blue-400 mb-1"></i>
        <h3 class="text-lg font-semibold">React</h3>
      </div>
      <div
        class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
      >
        <i class="fa-brands fa-vuejs text-4xl text-green-400 mb-1"></i>
        <h3 class="text-lg font-semibold">Vue.js</h3>
      </div>
      <div
        class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
      >
        <i class="fa-brands fa-node text-4xl text-green-500 mb-1"></i>
        <h3 class="text-lg font-semibold">Node.js</h3>
      </div>
    </div>
  </section>
  <section id="section-projects" class="w-full">
    <h2 class="text-3xl font-bold mb-6">진행 프로젝트</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        class="w-full rounded shadow overflow-hidden hover:scale-105 transition-transform duration-500"
      >
        <img src="IMG_3967.png" alt="" class="w-full h-48 object-cover" />
        <div class="flex flex-col gap-2 p-5 bg-gray-100">
          <h1 class="text-xl font-bold">바람의나라 맨맨이야</h1>
          <ul class="flex gap-2">
            <li class="bg-gray-200 text-xs px-2 py-1 rounded-lg">PHP</li>
            <li class="bg-gray-200 text-xs px-2 py-1 rounded-lg">Svelte</li>
            <li class="bg-gray-200 text-xs px-2 py-1 rounded-lg">Mysql</li>
            <li class="bg-gray-200 text-xs px-2 py-1 rounded-lg">
              Aws LightSail
            </li>
          </ul>
          <ul class="flex gap-2">
            <li class="bg-gray-900 text-white text-sm px-2 py-1 rounded-md">
              GitHub
            </li>
            <li class="bg-gray-900 text-white text-sm px-2 py-1 rounded-md">
              미리보기
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-full rounded shadow overflow-hidden hover:scale-105 transition-transform duration-500"
      >
        <img src="IMG_3967.png" alt="" class="w-full h-48 object-cover" />
        <div class="flex flex-col gap-2 p-5 bg-gray-100">
          <h1 class="text-xl font-bold">바람의나라 맨맨이야</h1>
          <ul class="flex gap-2">
            <li class="bg-gray-200 text-xs px-2 py-1 rounded-lg">PHP</li>
            <li class="bg-gray-200 text-xs px-2 py-1 rounded-lg">Svelte</li>
            <li class="bg-gray-200 text-xs px-2 py-1 rounded-lg">Mysql</li>
            <li class="bg-gray-200 text-xs px-2 py-1 rounded-lg">
              Aws LightSail
            </li>
          </ul>
          <ul class="flex gap-2">
            <li class="bg-gray-900 text-white text-sm px-2 py-1 rounded-md">
              GitHub
            </li>
            <li class="bg-gray-900 text-white text-sm px-2 py-1 rounded-md">
              미리보기
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="section-links" class="w-full mb-20">
    <div class="grid grid-cols-1 place-items-center md:grid-cols-2 gap-4">
      <a
        href="#"
        target="_blank"
        class="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
      >
        <i class="fa-brands fa-github"></i>
        <span>GitHub</span>
      </a>
      <a
        href="#"
        target="_blank"
        class="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
      >
        <i class="fa-brands fa-youtube"></i>
        <span>Youtube</span>
      </a>
      <a
        href="#"
        target="_blank"
        class="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
      >
        <i class="fa-brands fa-instagram"></i>
        <span>Instagram</span>
      </a>
      <a
        href="#"
        target="_blank"
        class="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
      >
        <i class="fa-regular fa-envelope"></i>
        <span>grooveturtle29@gmail.com</span>
      </a>
    </div>
  </section>
</Main>
<Footer></Footer>
