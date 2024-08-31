import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters'; // Corrigido para usar a exportação nomeada

export default {
  state,
  mutations,
  actions,
  getters,
};
