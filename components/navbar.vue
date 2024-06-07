<template>
  <div class="">
    <header class="mb-16 container">
      <nav class="bg w-full top-0 left-0 dark:border-gray-600 border-y p-2">
        <ul
          class="navigation max-w-[90vw] flex flex-wrap gap-8 justify-between items-center relative mx-auto"
        >
          <NuxtLink to="/" class="logo mt-6" href="#">
            <img src="../assets/images/euro-job-logo.svg" alt="" />
          </NuxtLink>
          <input type="checkbox" id="check" />

          <span
            class="menu text-slate-900 flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg"
          >
            <li><NuxtLink to="/">Join our team</NuxtLink></li>
            <li><NuxtLink to="/contacts">Contacts</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Services</NuxtLink></li>

            <li class="items-center flex text-center justify-center">
              <span class=" absolute -mt-10 ml-20 text-base">Call center</span>
              <p class="font-bold text-lg">+998 78 555 11 66</p>
            </li>

            <label for="check" class="close-menu">X</label>
          </span>
          <button class="btn items-end justify-end">
            <NuxtLink to="">Contact us</NuxtLink>
          </button>

          <label for="check" class="open-menu">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <path
                d="M4 6.3252H20M4 12.3252H20M4 18.3252H20"
                stroke="#354052"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #003193;
}
/* .bg {
    background: #232429;
  } */

.close-menu,
.open-menu {
  position: absolute;
  cursor: pointer;
  display: none;
}

.open-menu {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.close-menu {
  top: 20px;
  right: 20px;
}
.icon {
  color: #fff !important;
}

#check {
  display: none;
}

.btn {
    display: inline-block;
    border-radius: 8px;
    width: 137px;
    height: 44px;

    color: #fff;
    background: #003193;
    font-size: 16px;
    transition: 0.5s ease;
  }
  
  .btn:hover {
    background: transparent;
    color: #003193;
    box-shadow: 0 0 20px #003193;
  }

@media (max-width: 1200px) {
  .btn {
    display: none;
  }
}

@media (max-width: 800px) {
  .menu {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 73%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 100;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    color: #000000;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    font-size: 24px;
  }

  .menu li {
    margin-top: 40px;
  }

  .menu li a {
    padding: 10px;
  }

  .close-menu,
  .open-menu {
    display: block;
  }

  #check:checked ~ .menu {
    right: 0;
  }
}
</style>
