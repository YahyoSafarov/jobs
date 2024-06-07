<template>
    <div class=" bg container mb-32">
      <div class="items-center justify-center text-center py-11">
        <span class="text-lg text-slate-700">Quality Features</span>
        <h1 class="text-3xl font-bold">Meet exciting feature of app</h1>
      </div>
      <div class="bg-brandDark text-white">
        <span id="services"></span>
        <div class="container py-16 p-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div
              v-for="(skill, index) in servicesData"
              :key="index"
              class=" br flex flex-col justify-center items-center gap-3 p-8 rounded-md cursor-pointer hover:shadow-blue-500 hover:shadow-[0_0_15px_] hover:scale-105 transition-all duration-300"
            >
              <div>
                <img
                  src="../../assets/images/star-blue.svg"
                  class="w-20 h-20 object-contain -mt-20"
                  alt="image"
                />
              </div>
              <h1 class="text-lg font-semibold text-center text-black">{{ skill.name }}</h1>
              <p class="text-gray-600 text-center dark:text-gray-400">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  const servicesData = [
    {
      img: "../../assets/images/8.png",
      name: "We sign a cooperation contract",
      title: "Buy Crypto",
      description:
        "We sign a cooperation contract",
    },
    {
      img: "",
      name: "We sign a cooperation contract",
  
      title: "Fast Transaction",
      description:
        "We sign a cooperation contract",
    },
    {
      img: "../../public/red.png",
      name: "We sign a cooperation contract",
  
      title: "Secure",
      description:
        "We sign a cooperation contract",
    },
    {
      img: "../../public/red.png",
      name: "We sign a cooperation contract",
  
      title: "Secure",
      description:
        "We sign a cooperation contract",
    },
    
  ];
  </script>
  <style scoped>
  .bg{
    background: #E4E9F2;
  }
  .br{
    border: 4px solid white;
    border-radius: 28px;
  }
</style>
  