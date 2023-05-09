/**
 * px을 vw로 변환
 * @param {number} absoluteSize - 디자인상 들어가는 px값
 * @param {number} breakPoint - 미디어쿼리 기준값 (default: 1920)
 * @returns {number} - vw값
 * @example
 * px2vw(100, 750) // 13.333333333333334vw
 * */
export function px2vw(absoluteSize: number, breakPoint = 1920): string {
  return `${(absoluteSize / breakPoint) * 100}vw`;
}

/**
 * */
export function min(absoluteSize: number, breakPoint = 1920): string {
  return `min(${(absoluteSize / breakPoint) * 100}vw, ${absoluteSize}px)`;
}
