<template>
  <Card>
    <div class="w-full h-full">
      <div
        class="bg-toper h-[60px] flex justify-around items-center rounded-tr-md text-texto"
      >
        <span>Name:Leye</span>
        <span>Email: oladipo@gmail.com</span>
      </div>
      <div class="w-full container h-[653px] flex items-center justify-center">
        <div class="-[360px] h-[404px] flex flex-col gap-[40px]">
          <div class="w-full flex justify-between items-center">
            <span class="bg-pxr rounded-[4px] pt-2 pr-3 pb-2 pl-3">Back</span>
            <img src="../assets/icon.png" alt="logo" />
            <span>3 of 4</span>
          </div>
          <div
            v-for="(question, index) in Questions"
            :key="index"
            class="flex flex-col gap-[32px]"
          >
            <div
              class="flex flex-col items-center font-bold text-[20px] leading-[27.28px]"
            >
              <p>{{ question.question }}</p>
            </div>

            <ul class="w-full flex flex-col gap-[10px]">
              <li
                v-for="(option, key) in question.options"
                :key="key"
                class="w-full bg-texto rounded-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[2px] active:border-bord"
              >
                {{ key }}: {{ option }}
              </li>
            </ul>
            <div class="flex justify-center w-full">
              <button
                class="bg-secondary butt rounded-[8px] text-tertiary pt-[10px] pr-[18px] pb-[10px] pl-[18px] font[Nunito-sans] w-full"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from "../components/Card.vue";
import { ref } from "vue";

const Questions = ref([
  {
    question: "Which language runs in a web browser?",
    options: {
      a: "Java",
      b: "C",
      c: "Python",
      d: "Javascript",
    },
    answer: "d",
  },
]);
</script>

<style scoped>
@media (max-width: 1410px){
  .container{
    display: flex;
  height:540px;
  width:100%;

  gap:10px;
  }
}</style>
