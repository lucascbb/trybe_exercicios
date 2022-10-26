import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";


// 1 - Criando o REDUCER com o estado Inicial
const valorInicial = { count: 0 };

const reducer = (state = valorInicial, action) => {
  if(action.type === "contador") {
    return { count: state.count + 1}
  };
  return state;
}

// 2 - Criando a STORE ja com redux dev tools
const store = createStore(reducer, composeWithDevTools());

// 3 - Criando a ACTION
const action = {
  type: "contador"
};

// 4 - Disparando a nossa ACTION
const contador = document.querySelector("button");
contador.addEventListener('click', () => {
  console.log("click");
  store.dispatch(action);
})

// 5 - Lendo as alteracoes do STATE
store.subscribe(() => {
  const globalState = store.getState();

  const somador = document.querySelector("h2");
  somador.innerText = globalState.count;

  console.log(globalState.count);
})