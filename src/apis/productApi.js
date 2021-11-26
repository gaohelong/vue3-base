import {
  ref,
  reactive,
  toRefs
} from 'vue'
import request from '@/utils/request'

/**
 * 获取产品名
 */
export const getProductNmae = async (id) => {
  return await request.post('/api/product/getProductName', {
    id: 1
  }).then(res => {

  }).catch(err => {
    console.log('err:', err)
    return {
      code: -1,
      msg: '产品名称获取失败'
    }
  })
}

/**
 * 获取产品列表
 */
export const getPorductList = async (id) => {
  return await request.post('/api/product/getProductName', {
    id: 1
  }).then(res => {

  }).catch(err => {
    console.log('err:', err)
    return {
      code: -1,
      data: [
        { id: 1, name: '产品1' },
        { id: 2, name: '产品2' },
      ],
      msg:'获取失败'
    }
  })
}
