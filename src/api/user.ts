import { post } from '@/utils/request'

export function login(params: UserLogin) {
  return post('/api/login', params)
}
