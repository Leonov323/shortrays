import { createBrowserHistory } from 'history'
import { store } from '../../../store'
import { api } from '../../apis'

export { api }
export { store }

export const history = createBrowserHistory()

export const state = store.getState()