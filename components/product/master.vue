<template>
  <div>
    <div class="dark:bg-dark bg duration-300">
      <div class="container">
        <div class="grid grid-cols-1 m md:grid-cols-2 place-items-center">
          <div>
            <div class="space-y-5 sm:p-16 pb-6 bg2">
              <div class="flex items-center">
                <!-- <div className="text-primary/70 text-7xl ">
                      <h1 className="font-bold">01</h1>
                    </div> -->
                <div>
                  <h1 class="text-2xl sm:text-4xl font-bold text-cyan-950">
                    Responsibilities:
                  </h1>
                </div>
              </div>

              <div>
                <div class="flex gap-5">
                  <img src="../assets/image/true-orange.svg" alt="" />
                </div>
                <p class="leading-8 tracking-wide text-cyan-950">
                  Actively search and attract potential clients in the field of
                  worker leasing in Germany. Make phone calls, send emails, and
                  conduct presentations for interested clients. Develop and
                  present tailored proposals for clients based on their needs
                  and requirements. Establish and maintain long-term
                  relationships with clients, ensuring high satisfaction with
                  our services. Participate in negotiations and agreements with
                  new clients. Monitor and analyze market trends and competitive
                  landscape in the industry.
                </p>
              </div>
            </div>
          </div>
          <!-- {/* Image section */} -->
          <div>
            <img
              src="../../assets/images/young-woman-holding-tablet-work 1 (1).png"
              alt=""
              class="young"
            />
            <!-- <img src="../assets/image/Ellipse 3.png" class=" absolute -mt-[150px]" alt=""> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.bg2 {
  border: 4px solid #fff;
  border-radius: 28px;
}
.young {
  border-radius: 28px;
  border: 4px solid #fff;
}
@media (max-width: 995px) {
  .m {
    display: flex;
    flex-direction: column;
  }
}
</style>
