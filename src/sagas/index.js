import { loginFlow } from './auth'
import { getEventsFlow } from './events'

export default function* rootSaga () {
  yield [
    loginFlow(),
    getEventsFlow()
  ]
}
