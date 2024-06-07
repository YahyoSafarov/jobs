<template>
  <div class="bg">
    <div class="mx-auto max-w-[1200px]">
      <div class="absolute inset-x-0 container"></div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
         
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight mb-10 text-white sm:text-5xl">
            Europe’s Skilled Workforce. Your Competitive Edge.
          </h1>
        
          <div class="flex items-center justify-center mb-10 gap-6 ml-4">
            <button class="btn2">
              <NuxtLink to="/buttuncontact">
                Contact Us
              </NuxtLink>
              </button>
          </div>

          <div>
            <p class=" text-white">
              Eurojob Consulting is a progressive employment for workers from
              Europe and Middle East. We have 6 years of experience on the
              European market. We have recruited more than 3500 employees and
              became a trusted partner for a business
            </p>
          </div>
        </div>
      </div>
      <!--Waves Container-->
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg {
  background-image: linear-gradient(
      to left,
      rgba(0, 22, 65, 0.64),
      rgba(0, 22, 65, 0.64)
    ),
    url(../../assets/images/work.png);
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: top 25% right 0;
  margin-top: -62px;
}

@media (max-width: 1200px) {
  .m {
    display: none;
  }
  .bg {
  }
}
</style>
