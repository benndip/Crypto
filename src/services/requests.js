import axiosInstance from "./axiosInstance";

export const getDetailedCoinData = async (coinId) => {
  try {
    const response = await axiosInstance.get(
      `/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    return response.data;
  } catch (e) {
    console.log('error', e);
  }
};

export const getCoinMarketChart = async (coinId, selectedRange) => {
  try {
    const response = await axiosInstance.get(
      `/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}`
    );
    return response.data;
  } catch (e) {
    console.log('me error', e);
  }
};

export const getMarketData = async (page = 1) => {
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false&price_change_percentage=24h`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFavouritesCoins = async (page = 1, coinIds) => {
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=50&page=${page}&sparkline=false&price_change_percentage=24h`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCoins = async () => {
  try {
    const response = await axiosInstance.get(
      `/coins/list?include_platform=false`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
