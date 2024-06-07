<template>
  <div>
    <div class="py-12 bg -mt-8 sm:py-0 relative">
      <div class="container min-h-[620px] flex items-center">
        <div
          class="grid grid-cols-1 mimg sm:grid-cols-2 gap-8 place-items-center"
        >
          <!-- {/* image section */} -->
          <div class="young">
            <img
              src="../../assets/images/young-woman-holding-tablet-work 1 (2).png"
              alt=""
              class="w-full max-w-[400px]"
            />
          </div>

          <div class="p-10 lg:pr-20 relative pyoung">
            <div class="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                class="text-4xl font-semibold text-cyan-950"
              >
                We Offer:
              </h1>
              <p class="text-cyan-950">
                Competitive salary: base rate + commission (high earning
                potential depending on results). Professional development and
                training opportunities. Autonomy in decision-making within
                defined competencies. Career growth potential to regional
                management.
              </p>
            </div>
            <!-- {/* backgrond color blob */} -->
            <!-- <div
                  class="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"
                ></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.young img {
  border: 4px solid #fff;
  border-radius: 28px;
}
.pyoung {
  background-color: #f3f6fc;
  border: 4px solid #fff;
  border-radius: 28px;
}

@media (max-width: 1200px) {
  .m {
    display: none;
  }

  .bg {
    /* background: #3A3B3F;
        padding: 90px 2% 80px; */
  }

  /* .mimg{
      padding: 60px;
    } */
}
</style>
