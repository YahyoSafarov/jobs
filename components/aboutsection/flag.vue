<template>
  <div class="cards">
    <div>
      <div class="card flex items-center justify-center mb-8">
        <div class=" ">
          <img
            src="../../assets/images/uzbekistan.svg"
            class="w-[100px] h-[100px] p-[]"
            alt=""
          />
        </div>
      </div>
      <div class=" text-center text-2xl font-semibold">
        <h2>
            Uzbekistan
        </h2>
      </div>
    </div>

    <div>
      <div class="card flex items-center justify-center mb-8">
        <div class=" ">
          <img
            src="../../assets/images/tadjikistan.svg"
            class="w-[100px] h-[100px] p-[]"
            alt=""
          />
        </div>
      </div>
      <div class=" text-center text-2xl font-semibold">
        <h2>
            Tadjikistan
        </h2>
      </div>
    </div>
    <div>
      <div class="card flex items-center justify-center mb-8">
        <div class=" ">
          <img
            src="../../assets/images/krgistan.svg"
            class="w-[100px] h-[100px] p-[]"
            alt=""
          />
        </div>
      </div>
      <div class=" text-center text-2xl font-semibold">
        <h2>
            Kyrgyzstan
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  background-color: #E9EDF5;
  color: white;
  width: 382px;
  height: 248px;
  padding: 16px 80px 16px 80px;
  border-radius: 28px;
  border: 3px solid white;
}

.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-items: center;
}
</style>
