import villaMarketApi from '@/utils/apiEndpoint'

export const helloApi = async () => {
  return villaMarketApi.get('/hello/')
}