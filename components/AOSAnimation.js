import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'
// import AOS from 'aos'

/**
 * 加载滚动动画
 * 改从外部CDN读取
 * https://michalsnik.github.io/aos/
 */
export default function AOSAnimation() {
  const initAOS = async () => {
    Promise.all([
      loadExternalResource(
        'https://cdnjs.webstatic.cn/ajax/libs/aos/2.3.4/aos.js',
        'js'
      ),
      loadExternalResource(
        'https://cdnjs.webstatic.cn/ajax/libs/aos/2.3.4/aos.css',
        'css'
      )
    ]).then(() => {
      if (window.AOS) {
        window.AOS.init()
      }
    })
  }
  useEffect(() => {
    initAOS()
  }, [])
}
