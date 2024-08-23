<template>
  <div class="py-[20px] h-[1420px] w-screen case  bg-main">
    <div class="w-[1380px] h-[713px] card flex absolute  left-[30px] px-[20px]" >
      <div class="image">
      <img src="../assets/26515 1.png" class="rounded-custom"/>
      
    </div>  
    <div class=" h-[713px] bg-primary w-[640px] rounded-r-md">
    <slot>

    </slot>
    </div>
    </div>
    
  </div>
</template>

<script setup></script>

<style scoped>
@media (max-width: 640px) {
  .card{
    display: flex;
    flex-wrap: wrap;
    width:550px;
    border-radius: 10px;
    
  }
  .image{
    display: none;
  }
  .case{
    
  }
}
@media (min-width:650px) {
  .case{
    width:100%;
  }
 
}</style>
