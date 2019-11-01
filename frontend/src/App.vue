
<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view> </router-view>
    </v-content>
    
  </v-app>

</template>

<script>

import Navbar from '@/components/Navbar'
import Service from "./components/Service";
export default {
  name:'App',
  components: {Service, Navbar},
  data () {
    return{
      //
    }

  }
}
</script>>
