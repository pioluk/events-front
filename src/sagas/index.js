import { loginFlow } from './auth'
import { getEventsFlow, getEventDetailsFlow, createEventFlow, loadEventComments } from './events'
import { getCommentsFlow, createCommentFlow, removeCommentFlow } from './comments'

export default function* rootSaga () {
  yield [
    loginFlow(),
    loadEventComments(),
    getEventsFlow(),
    getEventDetailsFlow(),
    createEventFlow(),
    getCommentsFlow(),
    createCommentFlow(),
    removeCommentFlow(),
  ]
}
