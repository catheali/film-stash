import { createStore } from 'vuex';
import movies from './modules/movies';
import { RootState } from  '@/types';


export default createStore<RootState>({
  modules: {
    movies
  }
});