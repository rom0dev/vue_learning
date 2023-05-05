<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="v-container">
    <div class="v-row">
      <div class="v-col v-col-6">
        <span class="logoText">7LF</span>
        <div class="windowClass">
          <p class="buttons">
            <RouterLink to="/register"><v-btn class="btns">Регистрация</v-btn></RouterLink>
            <RouterLink to="/login"><v-btn class="btns">Вход</v-btn></RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-image: url('/img/background.jpg');
  background-repeat: no-repeat;
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: white;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.windowClass {
  margin-top: 30%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
}
.buttons {
  margin-top: 10px;
}
.btns {
  margin-top: 10px;
  margin-right: 10px;
  text-decoration: none;
}
.logoText {
  font-size: 28pt;
}
</style>
