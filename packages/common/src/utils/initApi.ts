import axios from 'axios'
import { useErrorHandler, useHeadersInterceptor } from './interceptors'
import { defaultTokenHandler } from './tokenHandler'
import type { ErrorHandlerParams } from './interceptors'
import type { TokenHandler } from './tokenHandler'

/**
 * initApi
 */
export function initApi(params: InitApiParams) {
  const { appToken } = params

  // token Handler init as default
  let tokenHandler: TokenHandler = defaultTokenHandler()

  // Setup token handler if exists on params
  if (params) {
    if (params.tokenHandler) tokenHandler = params.tokenHandler
  }

  // Init axios instance
  const api = axios.create({
    baseURL: params?.baseURL,
    withCredentials: true
  })

  // Setup interceptors

  // Header interceptors
  const headersInterceptor = useHeadersInterceptor({
    appToken,
    tokenHandler
  })
  api.interceptors.request.use(
    headersInterceptor.onFulfilled,
    headersInterceptor.onRejected,
    headersInterceptor.options
  )

  // Setup error handler interceptor
  if (params?.errorHandler) {
    const errorHandler = useErrorHandler(params.errorHandler)

    // add handler interceptor
    api.interceptors.response.use(errorHandler.onFulfilled, errorHandler.onRejected)
  }

  return api
}

export interface InitApiParams {
  appToken: string
  baseURL: string
  errorHandler?: ErrorHandlerParams
  tokenHandler?: TokenHandler
}
