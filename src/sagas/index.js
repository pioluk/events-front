import { loginFlow } from './auth'
import { getEventsFlow, getEventDetailsFlow, createEventFlow } from './events'
import { getCommentsFlow, addCommentFlow, removeCommentFlow } from './comments'

export default function* rootSaga () {
  yield [
    loginFlow(),
    getEventsFlow(),
    getEventDetailsFlow(),
    createEventFlow(),
    getCommentsFlow(),
    addCommentFlow(),
    removeCommentFlow()
  ]
}
