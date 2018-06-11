import {bannerAction} from './bannerAction'
import {recListAction} from './recListAction'
import {excusiveAction} from './excusiveAction'
import {newTestAction} from './newTestAction'
import {recMvAction} from './recMvAction'
import {allTagAction} from './allTagAction'
import {hotTagAction} from './hotTagAction'
import {getListAction} from './getListAction'
import * as rankingAction from './rankAction'
import * as artistAction from './artistAction'
import * as newAlbumAction from './newAlbumAction'
export default{
    bannerAction,
    recListAction,
    newTestAction,
    recMvAction,
    excusiveAction,
    allTagAction,
    hotTagAction,
    getListAction,
    ...rankingAction,
    ...artistAction,
    ...newAlbumAction

}
