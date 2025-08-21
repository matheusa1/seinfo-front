export type TGetPagination = { page: number, limit: number }

export type TPagination<T> = {
  data: T[]
  total: number
  page: number
  limit: number
}