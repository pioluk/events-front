import { loginFlow } from './auth'
import { getEventsFlow, getEventDetailsFlow, createEventFlow, getEventsNearbyFlow, loadEventComments } from './events'
import { getCommentsFlow, createCommentFlow, removeCommentFlow } from './comments'
import { watchErrors } from './errors'

export default function* rootSaga () {
  yield [
    loginFlow(),
    loadEventComments(),
    getEventsFlow(),
    getEventDetailsFlow(),
    createEventFlow(),
    getEventsNearbyFlow(),
    getCommentsFlow(),
    createCommentFlow(),
    removeCommentFlow(),
    watchErrors()
  ]
}
