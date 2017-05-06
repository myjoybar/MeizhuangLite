/**
 * Created by joybar on 06/05/2017.
 */
//http://redux.js.org/docs/basics/Actions.html
/*
 * action types
 */
export const ACTION_SHOW_FORM_DIALOG = 'action_show_form_dialog'
export const ACTION_DISMISS_FORM_DIALOG = 'action_dismiss_form_dialog'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function createActionShowFormDialog() {
    return { type: ACTION_SHOW_FORM_DIALOG }
}

export function createActionDismissFormDialog() {
    return { type: ACTION_DISMISS_FORM_DIALOG }
}

// export function showFormDialog(text) {
//     return { type: ACTION_SHOW_FORM_DIALOG, text }
// }
//
// export function dismissFormDialog(text) {
//     return { type: ACTION_DISMISS_FORM_DIALOG, text }
// }