import { useQuery } from "@tanstack/react-query"
import { productQueries } from "./product.queries"

export function useProductListQuery() {
  const query = useQuery({
    ...productQueries.list(),
  })

  return { ...query, productList: query.data ?? [] }
}
