/**
 * Created by joybar on 22/04/2017.
 */

import { ACTION_SHOW_FORM_DIALOG, ACTION_DISMISS_FORM_DIALOG } from '../action/actions'

export  default (state = 0, action)=> {
    state = state ||
        {
            counter: 0,
            formDialogVisibility: false
        };
    switch (action.type) {
        case ACTION_SHOW_FORM_DIALOG:
            return {
                counter: state.counter + 1,
                formDialogVisibility: true,
            };
        case ACTION_DISMISS_FORM_DIALOG:
            return {
                counter: state.counter - 1,
                formDialogVisibility: false,
            };
        default:
            return state;
    }

}

