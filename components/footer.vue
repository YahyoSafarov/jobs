<template>
          <div class="">
            <div class=" flex items-center justify-between p-16 m">
                <div class=" flex gap-7 items-center">
                <img src="../assets/images/S 1.png" alt="">
                <h1 class=" text-lg text-black">© 2024 “EUROJOB CONSULTING”. All rights reserved</h1>
                
            </div>

             <div>
                <ul class=" flex gap-4 text-teal-50 text-lg">
                  <li><a class="cool-link" href="#">Home</a></li>
                  <li><a class="cool-link" href="#">Adversite</a></li>
                  <li><a class="cool-link" href="#">Supports</a></li>
                  <li><a class="cool-link" href="#">Marketing</a></li>
                  <li><a class="cool-link" href="#">FAQ</a></li>
                </ul>
            </div>
            </div>
          

           
          </div>
</template>

<script setup></script>

<style scoped>
 .bt {
    margin-left: -140px;
    font-size: 16px;
    display: inline-block;
    font-weight: 600;
    padding: 16px 32px;
    border-radius: 5px;
  
    /* Only necessary for .btn */
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
  }

  li {
    margin-bottom: 10px;
}

.cool-link {
    display: inline-block;
    color: #000000;
    text-decoration: none;
}

.cool-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000000;
    transition: width .3s;
}

.cool-link:hover::after {
    width: 100%;
    transition: width .3s;
}

@media(max-width: 600px){
  .m{
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
}
</style>
