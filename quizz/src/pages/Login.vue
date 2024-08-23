<template>
<Card>
  <div class="w-full h-full flex items-center justify-center">
  <form class="flex items-center flex-col gap-[32px]">
    <div class="flex justify-center">
    <img src="../assets/icon.png" alt="logo"/>
    </div>
    <div class="text-center w-full  flex flex-col items-center gap-[12px]">
      <h1 class="font[Nunito-sans] flex items-center text-[24px] font-bold text-logo">Sign in To Quiz App</h1>
      <p class="font[Nunito-sans] flex items-center text-[16px] font-normal text-secondLogo">Kindly Fill in the following Details to get Started</p>
    </div>
    
    <div class="control w-full flex flex-col gap-[8px]">
      <label  class="block font[Nunito-sans] font-bold text-label text-[14px]" id="Full Name">Full Name</label>
      <input  type="text" class="  w-full shadow-[rgba(16, 24, 40, 0.05)] border-[1px] border-custom-gray pt-[8px] pr-[12px] pb-[8px] pl-[12px] focus:outline-none py-[10px] px-[14px]" placeholder="Enter Your First Name"/>
    </div>
    <div class="control w-full lex flex-col gap-[8px]">
      <label  class="block font-bold  text-label text-[14px]" id="email">Email</label>
      <input type="text" placeholder="Enter Your Work Email" class="  border-[1px] border-custom-gray focus:outline-none w-full pt-[8px] pr-[12px] pb-[8px] pl-[12px]"/>
    </div>
    <div class="control w-full lex flex-col gap-[8px]">
      <label  class="block font-bold  text-label text-[14px]" id="Password">Password</label>
      <input type="text" placeholder="Enter Your first Name" class="  border-[1px] border-custom-gray focus:outline-none w-full pt-[8px] pr-[12px] pb-[8px] pl-[12px]"/>
    </div>
    <div class="flex justify-center w-full">
      <button class="bg-secondary butt border-[1px] rounded-[8px] text-tertiary  font[Nunito-sans] w-full" >Sign in</button>
    </div>
   
  </form>
  </div>
 
</Card>
</template>

<script setup>
import Card from '../components/Card.vue'

</script>

<style scoped>
.butt{
  padding-top: 10px;
  padding-right: 18px;
  padding-bottom: 10px;
  padding-left: 18px;
}
@media (max-width: 640px){

}
</style>