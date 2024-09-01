<template>
	<button @click="addToFavorites">
	  Add to Favorites
	</button>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
	name: 'AddToFavoritesButton',
	props: {
	  id: {
		type:  Number,
		required: true,
	  },
	},
	setup(props) {
	  const store = useStore();
	  const addToFavorites = () => {
		store.dispatch('addToFavorites', props.id);
	  };
  
	  return {
		addToFavorites,
	  };
	},
  });
  </script>
  
  <style lang="scss" scoped>
	@import "@/assets/styles/scss/app.scss";
</style>
  