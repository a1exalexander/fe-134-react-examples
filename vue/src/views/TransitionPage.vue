<template>
  <div class="wrapper">
    <button @click="show = !show">Toggle</button>
    <div class="card-container">
      <Transition>
        <div class="card" v-if="show">Hello</div>
        <div class="card" v-else>World</div>
      </Transition>
    </div>
  </div>
  <!-- <div class="card rotate">Hello</div> -->
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style>
.v-enter-active,
.v-leave-active {
  position: absolute;
  transition-duration: 1s;
  transition-timing-function: ease;
  transition-property: opacity transform;
}

.v-enter-from {
  transform: rotateY(180deg);
}
.v-leave-to {
  transform: rotateY(-180deg);
}

p {
  font-size: 40px;
  color: white;
  font-weight: 700;
}

.card-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.card {
  position: absolute;
  border: 2px solid white;
  background-color: darkblue;
  border-radius: 4px;
  padding: 16px;
  width: 200px;
  height: 300px;
  color: white;
  font-weight: 700;
  font-size: 32px;
  -webkit-backface-visibility: hidden;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.rotate {
  transform: rotateY(10deg);
}
</style>
