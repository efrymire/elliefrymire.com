import styles from './blur.module.scss'

export default function Blur() {

  return (<svg className={styles.blur}>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" 
        stdDeviation="50"/>
      <feColorMatrix
        type="matrix"
        result='gooey'
        values="1    0   0   0   0
                0    1   0   0   0
                0    0   1   0   0
                0    0   0    .5   0 " />
    </filter>
    <circle cx="44%" cy="48%" r="10%" fill="#6bb486" filter="url(#blur)"></circle>
    <circle cx="50%" cy="60%" r="10%" fill="#cd6464" filter="url(#blur)"></circle>
    <circle cx="50%" cy="44%" r="10%" fill="#6cb4d5" filter="url(#blur)"></circle>
    <circle cx="54%" cy="40%" r="10%" fill="#efef77" filter="url(#blur)"></circle>
  </svg>)
}
