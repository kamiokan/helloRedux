import { CombineReducers, createStore } from "redux";

// action.js
// action は redux の機能でなく、オブジェクトを作るための純粋なjsの関数です。
export const deleteName = () => ({
  type: "DELETE_NAME",
  name: "",
});

// 引数 name をとり、 {type: "ADD_NAME", name: name} を返すjsの関数
export const setName = (name) => ({
  type: "ADD_NAME",
  name: name,
});

INITIAL_STATE = {
  name: "Nanashi",
};

// reducers.js
// redux では global stateを巨大なjson(store)として管理します。
// stateの変更はjsonの書き換えによってのみ管理します。
// reducer は action で生成されたオブジェクトを受け取り、巨大なjson(store)を書き換える関数です。
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.stype) {
    case "ADD_NAME":
      return { ...state, name: action.name };
    case "DELETE_NAME":
      return { ...state, name: "" };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  user: reducer,
});

// store.js
export const store = createStore(reducers);

// store は巨大な json です。store の中身を取り出すには getState メソッドを使います。
// エミュレータで command + d を押し、enable remote debugをクリックしましょう
// debugger が現れるので、console タブをクリックし、エミュレータ上でアプリを command + r で再起動しましょう
console.log(store.getState());

// array や object を綺麗に表示したい時は console.table が便利です。
console.table(store.getState());

// store は json です。つまりjsのオブジェクトです。
// jsの関数のtypeofでstoreのstateがオブジェクトであることを確認しましょう。
console.log(typeof store.getState());

// storeもまたjsのオブジェクトであり、４つしかメソッドを持たないことを確認しておきましょう。
console.log(store);
