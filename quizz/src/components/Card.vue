<template>
  <div class="py-[20px] h-[1420px] w-screen case flex  bg-main">
    <div class="w-[1380px] h-[713px] card flex  absolute  left-[30px] px-[20px]" >
      <div class="image ">
      <img src="../assets/26515 1.png" class=" picture w-640px rounded-custom"/>
      
    </div>  
    <div class=" second bg-primary right w-[640px] rounded-r-md">
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
  
}
@media (max-width:1410px) {
   /* .case{
    width:100%;
  } */
  .card{
    
 
   
  
    left:auto;
  width:1200px;
  height:600px;
 
  
  } 
  .picture{
    height:100%;
  }
   .second{
    height:100%;

   }
   .case{
    display: flex;
    align-items: center;
    justify-content: center;
   }
 

   @media (max-width:1204px) {
    .card{
    
 
   
  
   
  width:1000px;
  height:600px;
 
  
  } 
  
   }


   @media (max-width:1008px) {
    .card{
    
 
   
  
   
  width:900px;
  height:600px;
 
  
  } 
  
   }

   @media (max-width:910px) {
    .card{
    
 display: flex;
 justify-content: center;
 align-items: center;
   
  
   
 
 
  
  } 
  
  .image{
    display: none;
  }
   }

   @media (max-width:900px) {
    .card{
width:600px;
   
  
   
 
 
  
  } 
  
  .image{
    display: none;
  }


   }

   @media (max-width:600px) {
    .card{
width:500px;

   margin-bottom: 600px;
  
   
 
 
  
  } 
  
 

   }

   @media (max-width:506px) {
    .card{
width:410px;
height:550px;

   
  
   
 
 
  
  } 
  
 

   }



}</style>
