import React, { useState } from 'react'
import styles from './Image.module.css'

const Image = ({alt, ...props}) => {

  const [skeleton,setSkeleton] = useState(true)

  const handleLoad = ({target}) => {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <div className={styles.skeleton}>
      {skeleton && <div className={styles.skeletonContent}></div>}
      <img onLoad={handleLoad} alt={alt} {...props}/>
    </div>
  )
}

export default Image
