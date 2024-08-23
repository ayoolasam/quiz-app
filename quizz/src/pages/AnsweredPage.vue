<template>
  <Card>
    <div class="w-full h-full">
      <div
        class="bg-toper h-[60px] flex justify-around items-center rounded-tr-md text-texto"
      >
        <span>Name:Leye</span>
        <span>Email: oladipo@gmail.com</span>
      </div>
      <div>
        <div
          class="w-full container h-[653px] flex items-center justify-center"
        >
          <div class="flex flex-col items-center gap-[8px]">
            <img src="../assets/january.png" alt="logo" />
            <h1 class="font-bold rext-22px text-logo">
              You answered 0/4 questions correctly
            </h1>
            <div class="flex w-full justify-center">
              <button
                class="bg-secondary butt rounded-[8px] text-tertiary pt-[10px] pr-[18px] pb-[10px] pl-[18px] font[Nunito-sans] w-full"
              >
                Done
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
</script>

<style lang="scss" scoped></style>
