import {
  ref
} from 'vue'

/**
 * 通用功能
 */
export const useCount = (init) => {
  const uCount = ref(init)

  const uIncrease = () => {
    return uCount.value++
  }

  const uDecrease = () => {
    return uCount.value--
  }

  return {
    uCount,
    uIncrease,
    uDecrease
  }
}
