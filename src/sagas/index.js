import { loginFlow } from './auth'
import { getEventsFlow, getEventDetailsFlow, createEventFlow } from './events'

export default function* rootSaga () {
  yield [
    loginFlow(),
    getEventsFlow(),
    getEventDetailsFlow(),
    createEventFlow()
  ]
}
