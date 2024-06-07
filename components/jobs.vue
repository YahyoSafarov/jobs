<template>
  <div class=" container">
      <div class="section">
    <div class="flex justify-center items-center flex-col text-center py">
      <h1 class="text-5xl text-cyan-950 font-bold">We can help you</h1>
      <p class="text-lg text-cyan-950 font-semibold">
        Your company is looking for skilled workers? Or you want to find an
        official work in Europe?
      </p>
    </div>
    <div
      class="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden m"
    >
      <div class="container min-h-[700px] flex relative">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10"
        >
          <!-- <img
              src="../assets/image/arra-1.png"
              class="absolute -mt-[510px] mr-[380px]"
              alt=""
            />
            <img
              src="../assets/image/valik.png"
              class="absolute -mt-[350px] mr-[180px]"
              alt=""
            /> -->

          <div
            class="order-2 sm:order-1 title space-y-5 lg:pr-20 relative z-30"
          >
            <div class="border rounded-2xl">
              <div class="flex-1 p-7">
                <h2 class="text-3xl text-cyan-950 font-semibold">
                  Official work in Europe
                </h2>
                <p class="text-cyan-950 font-semibold">
                  Workers for your business
                </p>
              </div>
              <img src="../assets/images/jobs-2.png" alt="" />

              <button
                class="absolute rounded-md w-[183px] h-[44px] bg-yellow-400 -mt-24 ml-10 transition duration-700 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
              >
                <NuxtLink to="/products"> More information </NuxtLink>
              </button>
            </div>
            <!-- <h1 class="text-5xl font-bold text-cyan-950 ml-4 ">
                Official Employment <br />
                
              </h1>
              <h2 class="text-5xl font-bold text-cyan-950 ml-4 mb-14">
                  in <span class=" grop rounded-lg bg-yellow-400 p-1">Europa</span>
              </h2>
              <p class="text-cyan-900 ml-4">
                Высококачественные и экологически чистыесухие <br />
                строительные смеси ZIXX для отделочных работ
              </p>
              <div class="flex gap-6 ml-4">
                <button class="btn">Узнать больше</button>
              </div> -->
          </div>

          <div class="border rounded-2xl">
            <div class="flex-1 p-7">
              <h2 class="text-3xl text-cyan-950 font-semibold">
                Workers for your business
              </h2>
              <p class="text-cyan-950 font-semibold">
                Workers for your business
              </p>
            </div>
            <img src="../assets/images/jobs-1.png" alt="" />

            <button
              class="absolute rounded-md w-[183px] h-[44px] bg-yellow-400 -mt-24 ml-10 transition duration-700 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
            >
              <NuxtLink to="/products"> More information </NuxtLink>
            </button>
          </div>
        </div>

        <!-- <div 
              class="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper">
                
              </div> -->
      </div>
    </div>
  </div>
  </div>

</template>

<script setup></script>

<style scoped>
.grop {
  filter: drop-shadow(2.5px 2.5px 5px #f5d104);
}
@media (max-width: 1200px) {
  /* .m{
        display: flex;
        align-items: center;
        justify-content: center;
      } */
}
@media (max-width: 500px) {
  .title h1 {
    font-size: 45px;
  }
}
</style>
