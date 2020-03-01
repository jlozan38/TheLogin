<template>
<div class="mt-4 flex flex-col justify-center items-center">
    <UndrawWelcome primary-color="#44337A" height="24em" />
    <h1 class="text-6xl font-hairline text-gray-800">Welcome</h1>
    <p class="text-gray-800 text-xl tracking-widest">
      Simple example of how to register and access a website, there are a public
      and private page.
    </p>
  </div>
</template>

<script>
import UndrawWelcome from 'vue-undraw/UndrawWelcome'
export default {
  name: "Home",
  components: {
    UndrawWelcome
  }
 
};
</script>
