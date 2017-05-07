/**
 * Created by joybar on 07/05/2017.
 */


import {DEV_MODE, RELEASE_MODE, PRODUCE_MODE} from '../config/configs'

export function logMsg(tag, msg) {

    if (PRODUCE_MODE == DEV_MODE) {
        console.log(tag + "__" + msg);
    }
}

export function log( msg) {

    if (PRODUCE_MODE == DEV_MODE) {
        console.log( msg);
    }
}