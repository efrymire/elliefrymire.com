'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './resume.module.scss'

export default function Resume() {
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(500)
  const container = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      setWidth(container.current?.clientWidth)
      setHeight(container.current?.clientHeight)
    }
  }, [])

  return (<div className={styles.container} ref={container}>
      <object 
        className={styles.resume} 
        width={width}
        height={height}
        type="application/pdf" data="/EllieFrymire_Resume_Nov2023.pdf"
        ></object>
    </div>)
}
