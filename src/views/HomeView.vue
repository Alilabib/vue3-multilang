<template>
  <div class="home">
     <header-component />
     <posts-component />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import PostsComponent from '@/components/PostsComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    PostsComponent
    
  }
}
</script>
