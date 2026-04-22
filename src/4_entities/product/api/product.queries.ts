import { queryOptions } from "@tanstack/react-query"
import { getProductList, getProductDetail } from "./product.api"

export const productQueries = {
  all: () => ["product"],
  lists: () => [...productQueries.all(), "list"],
  list: () => {
    return queryOptions({
      queryKey: [...productQueries.lists()],
      queryFn: ({ signal }) => {
        return getProductList(signal)
      },
    })
  },

  details: () => [...productQueries.all(), "detail"],
  detail: (id: string) => {
    return queryOptions({
      queryKey: [...productQueries.details(), id],
      queryFn: ({ signal }) => {
        return getProductDetail(id, signal)
      },
    })
  },
}
