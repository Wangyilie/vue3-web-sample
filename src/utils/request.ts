import axios, { type AxiosRequestConfig } from 'axios'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import router from '@/router'

const service = axios.create({
  baseURL: '',
  timeout: 300000,
  withCredentials: true
})

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。

    ElMessage({
      message: 'Congrats, this is a success message.',
      type: 'success'
    })

    // todo 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    ElMessage.error('Oops, this is a error message.')
    // eslint-disable-next-line no-debugger
    router.push(`/login?redirect=${router.currentRoute.value.fullPath}`)
    // todo 判断状态码
    const status = error.response?.status
    if (status === 403) {
      ElMessage.error('Oops, this is a error message.')
    } else if (status === 401) {
      // todo 跳转登陆页面
      router.push('/login?redirect=')
    }

    // todo 对响应错误做点什么
    return Promise.reject(error)
  }
)

async function get(url: string, params?: object, config?: AxiosRequestConfig) {
  const response = await service.get(url, {
    ...config,
    params
  })
  return response
}

async function post(url: string, data?: object, config?: AxiosRequestConfig) {
  const response = await service.post(url, data, config)
  return response
}

async function put(url: string, data?: object, config?: AxiosRequestConfig) {
  const response = await service.put(url, data, config)
  return response
}

async function del(url: string, params?: object, config?: AxiosRequestConfig) {
  const response = await service.delete(url, {
    ...config,
    params
  })
  return response
}

export { get, post, put, del, service }
