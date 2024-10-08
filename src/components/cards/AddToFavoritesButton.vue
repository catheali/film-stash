  <template>
		<div>
			<svg-icon class="action-favorite" @click="addToFavorites" type="mdi" :path="path"></svg-icon>
		</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useStore } from 'vuex';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiHeart, mdiHeartOutline } from '@mdi/js';
  
  export default defineComponent({
	name: 'AddToFavoritesButton',
	components: {
		SvgIcon
	},
	props: {
	  id: {
		type:  Number,
		required: true,
	  },
	},
	setup(props) {
	  const path = ref(mdiHeart);
	  const store = useStore();
	  const addToFavorites = () => {
		store.dispatch('addToFavorites', props.id);
	  };

	  return {
		addToFavorites,
		path
	  };
	},
  });
  </script>
  
  <style lang="scss">
	.action-favorite {
		color: rgb(72, 12, 12);
		cursor: pointer;

		&:hover {
			color: red;
		}
	}
  </style>

  