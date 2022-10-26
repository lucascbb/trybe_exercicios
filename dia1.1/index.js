import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";


// 1 - Criando REDUCER com o estado Inicial
const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return { 
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return { 
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    default:
      return state;
  }
};

// 2 - Criando a STORE ja com redux dev tools
const store = createStore(reducer, composeWithDevTools());

// 3 - Criando a ACTION
const action = {
  type: "contador"
};

// 4 - Disparando ACTION
const btnPrevious = document.getElementById('previous');
const btnNext = document.getElementById('next');

btnNext.addEventListener('click', () => {
  console.log('NEXT');
  store.dispatch({ type: 'NEXT_COLOR' });
});

btnPrevious.addEventListener('click', () => {
  console.log('PREVIOUS');
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

// 5 - Lendo as alteracoes do STATE
store.subscribe(() => {
  const globalState = store.getState();
  const somador = document.querySelector("span");

  const result = globalState.colors[globalState.index]

  somador.innerHTML = result
  document.getElementById('container').style.backgroundColor = result;
  
  console.log(result);
})