<template>
  <div>
    <div class="container">
      <div class="contact-box">
        <div class="left"></div>
        <div class="right">
          <h2>Contact Us</h2>
          <input type="text" class="field" placeholder="Your Name" />
          <input type="text" class="field" placeholder="Your Email" />
          <input type="text" class="field" placeholder="Phone" />
          <textarea placeholder="Message" class="field"></textarea>
          <button class="btn">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.container:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("../assets/images/builder.png") no-repeat center;
  background-size: cover;
  filter: blur(50px);
  z-index: -1;
}
.contact-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}

.left {
  background: url("../assets/images/builder.png") no-repeat center;
  background-size: cover;
  height: 100%;
}

.right {
  padding: 25px 40px;
}

h2 {
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
}

h2:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: #FFCC00;
}

.field {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
}

.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

textarea {
  min-height: 150px;
}

.btn {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #FFCC00;
  color: #000000;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background-color: transparent;
  color: #FFCC00;
  box-shadow: 0 0 20px #ffcc00;
}

.field:focus {
  border: 2px solid rgba(30, 85, 250, 0.47);
  background-color: #fff;
}

@media screen and (max-width: 880px) {
  .contact-box {
    grid-template-columns: 1fr;
  }
  .left {
    height: 200px;
  }
}
</style>
