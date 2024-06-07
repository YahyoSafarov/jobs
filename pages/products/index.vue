<template>
  <div class="bg">
    <div
      class="grid grid-cols-1 container mb-20 md:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div v-for="p in products">
        <div class="card space-y-3 sm:space-y-4 cursor-pointer HR">
          <NuxtLink :to="`/products/${p.id}`" class="text-cyan-950 font-bold">
            <img
              src="../../assets/images/woman (2).png"
              class="mb-3 flex items p-5"
              alt=""
            />
            <h1 class="text-2xl mb-3">{{ p.name }}</h1>
            <p>
              {{ p.title }}
            </p>

            <!-- <button class="bg-red=100">
               nfrn er
            </button> -->
          </NuxtLink>

          <!-- <ProductCard :product = "p"/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//   definePageMeta({
//     layout: "products",
//   });

// const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});

const products = [
  {
    id: 1,
    name: "Sales manager",
    title:
      "An HR Specialist is a professional responsible for monitoring all Human Resource functions. They prepare compensation and benefits packages, set up company policies. ",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "../../assets/image/master 1.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    name: "HR specialist",
    title:
      "An HR Specialist is a professional responsible for monitoring all Human Resource functions. They prepare compensation and benefits packages, set up company policies. ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    name: "Visa Support manager",
    title:
      "An HR Specialist is a professional responsible for monitoring all Human Resource functions. They prepare compensation and benefits packages, set up company policies.",
    price: 55.99,
    button: "Learn more",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  //   {
  //     id: 4,
  //     name: "Visa Support manager",
  //     title:
  //       "An HR Specialist is a professional responsible for monitoring all Human Resource functions. They prepare compensation and benefits packages, set up company policies.",
  //     price: 15.99,
  //     description:
  //       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     rating: {
  //       rate: 2.1,
  //       count: 430,
  //     },
  //   },
];
</script>

<style scoped>
.card {
  border-radius: 15px;
  background: #f3f6fc;
  border: 4px solid #fff;
  transition: 0.5s ease;
}
.card:hover {
  background: #FFCC00;
  color: white;
}
</style>
