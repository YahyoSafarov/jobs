<template>
  <div class="section">
    <div
      class="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden m"
    >
      <div class="container p-8 min-h-[700px] flex relative">
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
            <h1 class="text-5xl font-bold text-cyan-950 ml-4">
              Official Employment <br />
            </h1>
            <h2 class="text-5xl font-bold text-cyan-950 ml-4 mb-14">
              in <span class="grop rounded-lg bg-yellow-400 p-1">Europa</span>
            </h2>
            <p class="text-cyan-900 ml-4">
              Высококачественные и экологически чистыесухие <br />
              строительные смеси ZIXX для отделочных работ
            </p>
            <div class="flex gap-6 ml-4">
              <button class="btn">
                <NuxtLink to="/buttuncontact">Contact Us</NuxtLink>
              </button>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="0"
            class="order-1 sm:order-2"
          >
            <img src="../assets/images/map (2).png" alt="" class="home_img" />
            <img
              src="../assets/images/Vector.svg"
              class="absolute top-[100px]"
              alt=""
            />
          </div>
        </div>

        <!-- <div 
            class="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper">
              
            </div> -->
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.grop {
  border-radius: 12px;
  border: 3px solid rgba(255, 255, 255, 0.2);

  background: linear-gradient(180deg, #fc0 0%, #f0c000 100%);

  box-shadow: 0px 10px 48px 0px rgba(255, 204, 0, 0.18);
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
