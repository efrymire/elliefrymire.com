import styles from './blur.module.scss'

export default function Blur() {

  return (<svg className={styles.blur}>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" 
        stdDeviation="40"/>
      <feColorMatrix
        type="matrix"
        result='gooey'
        values="1    0   0   0   0
                0    1   0   0   0
                0    0   1   0   0
                0    0   0    .4   0 " />
    </filter>
    <circle cx="58%" cy="58%" r="8%" fill="#8ad5a5" filter="url(#blur)"></circle>
    <circle cx="50%" cy="50%" r="8%" fill="#e38080" filter="url(#blur)"></circle>
    <circle cx="44%" cy="38%" r="10%" fill="#ecec89" filter="url(#blur)"></circle>
    <circle cx="40%" cy="42%" r="10%" fill="#a5c1ce" filter="url(#blur)"></circle>
  </svg>)
}
