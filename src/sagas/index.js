import { loginFlow } from './auth'
import { getEventsFlow, createEventFlow } from './events'

export default function* rootSaga () {
  yield [
    loginFlow(),
    getEventsFlow(),
    createEventFlow()
  ]
}
