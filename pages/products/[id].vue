<template>
  <div class=" ">
    <div
      class="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden"
    >
      <div class="container min-h-[700px] flex relative">
        <div
          class="bg3 grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-50"
        >
          <div class="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
            <h1 class="text-4xl font-bold text-cyan-950 ml-4 mb-14 mt-20">
              Vacancy
            </h1>

            <div>
              <h3 class="text-2xl font-semibold text-cyan-950 ml-4 mb-14">
                Sales Manager
              </h3>
              <p class="text-cyan-950 ml-4">
                Eurojob Consulting is a Uzbek company specializing in HR
                services in Uzbekistan. Since 2018, we have successfully
                expanded our business to Europe countries. We focus on providing
                employment opportunities for citizens of Uzbekistan, Tajikistan
                and Kyrgyzstan, helping candidates find suitable jobs and
                providing them with a full support throughout the employment and
                work process. We are expanding and looking for an experienced
                Sales Manager to join our team. You will be responsible for
                acquiring new clients and maintaining a high level of awareness
                about our services while building long-term relationships with
                clients in Europe countries.
              </p>
            </div>

            <div class="flex gap-6 ml-4">
              <button class="btn2">
                <NuxtLink to="/buttuncontact">Contact Us</NuxtLink>
              </button>
            </div>
          </div>

          <div class="order-1 sm:order-2">
            <img
              src="../../assets/images/girl.svg"
              alt="woman"
              class="relative w-[939px] h-[325px]"
            />
          </div>
        </div>

        <!-- <div 
            class="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper">
              
            </div> -->
      </div>
    </div>
    <ProductBanner />
    <ProductMaster />
    <ProductWatch />
    <ProductJoin />
  </div>
</template>

<script setup></script>

<style scoped>
.bg3 {
  background: linear-gradient(to left, #e5e5e5, #f6f8fd);
}
.home_shape-small,
.home_shape-big-1,
.home_shape-big-2 {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
}
/* .home_shape-small{
      width: 350px;
      height: 350px;
      background-color: #26583d;
      top: -2.5rem;
      left: -1.5rem;
  } */
.home_shape-big-1,
.home_shape-big-2 {
  width: 450px;
  height: 450px;
}
.home_shape-big-1 {
  background-color: #ff662d;
  top: 50rem;
  left: -6.5rem;
}

.home_shape-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: soft-light;
  opacity: 0.3;
}
</style>
