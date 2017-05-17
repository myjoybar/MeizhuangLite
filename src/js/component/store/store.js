/**
 * Created by joybar on 06/05/2017.
 */

//http://www.jianshu.com/p/808bb43b3744

import {createStore}  from 'redux';
import reducer  from '../reducer/reducers';

var store = null;

export const globalStore = configureStore();

export  function configureStore() {

    if (store == null) {
      //  console.log("formDialogVisibility == null")
        store = createStore(reducer);
    }else{
        console.log("formDialogVisibility != null")
    }

    return store;

}