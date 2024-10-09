import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIS, API_KEY, baseUrl } from '../../api/constants'
//@ts-ignore Type declaration file not importing correctly
import { CoinType } from "@types/index";

export const trendingSearchApi = createApi({
    reducerPath: "trendingSearchApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
          headers.set("accept", "application/json");
          headers.set("x-cg-demo-api-key", API_KEY);
          return headers;
        },
    }),
    endpoints: (builder) => ({
        getTrendingSearch: builder.query<{coins: {item: CoinType}[], nfts:any, categories: any }, undefined>({
            query: () => `${APIS.TRENDING_SEARCH}`
        })
    }),
})

export const { useGetTrendingSearchQuery } = trendingSearchApi