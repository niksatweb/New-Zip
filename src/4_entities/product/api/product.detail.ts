import { useQuery } from "@tanstack/react-query"
import { productQueries } from "./product.queries"

export function useProductDetailQuery(id?: string) {
  const query = useQuery({
    ...productQueries.detail(id ?? ""),
    enabled: !!id,

    // for future
    // placeholderData: (previousData, previousQuery) => {
    //   return previousData
    // },
  })

  return { ...query, productDetail: query.data }
}
