import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CoinType } from '../../types'
import { APIS, API_KEY, baseUrl } from '../../api/constants'
//@ts-ignore
import { CryptoMarketsQueryArgs } from '@types/index'

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("x-cg-demo-api-key", API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoMarkets: builder.query<CoinType[], CryptoMarketsQueryArgs>({
      query: ({page=1}) =>
        `${APIS.COINS_MARKET_DATA}?vs_currency=usd&per_page=100&page=${page}`,
    })
  }),
});

export const { useGetCryptoMarketsQuery } = cryptoApi;
