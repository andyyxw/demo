/**
 * 封装后的动画库
 * @param {number} form 起始数值
 * @param {number} to 结束数值
 * @param {number} callback 回调函数
 * @param {number} duration 持续时间
 * @param {string} easing 动画类型
 */
function animation (form, to, callback, easing = 'linear', duration = 500) {
  // 当前时间
  let start = 0
  // 计算持续时间
  const during = Math.ceil(duration / (1000 / 60))

  // 运动
  const step = () => {
    const left = Tween[easing](start, form, to, during)
    callback(left)
    start += 1
    if (start <= during) {
      requestAnimationFrame(step)
    }
  }

  step()
}
