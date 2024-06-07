<template>
  <div class="container">
    <div class="bg mt-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold mt-8 text-cyan-950">
          Interested? Feel free to contact us:
        </h1>
      </div>

      <div class=" m grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        <div class="p-5 flex flex-col text-center items-center justify-cente">
          <div class="empty mb-3 r">
            <img src="../../assets/images/employtmant-2.svg" alt="phone" />
          </div>

          <span class="text-gray-400">Phone number</span>
          <h3 class="text-xl font-semibold">+998 90 919 11 88</h3>
        </div>

        <div class="p-5 flex flex-col text-center items-center justify-cente">
          <div class="empty mb-3 r">
            <img src="../../assets/images/employtmant-4.svg" alt="e-mail" />
          </div>

          <span class="text-gray-400">E-mail</span>
          <h3 class="text-xl font-semibold">partners@eurojob.uz</h3>
        </div>

        <div class="p-5 flex flex-col text-center items-center justify-cente">
          <div class="empty mb-3 r">
            <img src="../../assets/images/white-location.svg" alt="location" />
          </div>

          <span class="text-gray-400">Location</span>
          <h3 class="text-xl font-semibold">
            21, Rakatboshi street, <br />
            Tashkent, 100031 Uzbekistan
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg {
  background: #ecf0f7;
  border-radius: 28px;
  border: 4px solid #fff;
}
.empty {
  width: 48px;
  height: 48px;
  background-color: #4c79e5;
  padding: 12px;
  border-radius: 12px;
  transition: 0.5s ease;
}
.empty:hover{
  filter: drop-shadow(2.5px 2.5px 5px #4c79e5);
}

@media(max-width: 640px){
  .m{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(max-width: 440px){
  .m{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
