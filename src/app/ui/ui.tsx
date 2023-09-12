import Image from "next/image";
import styles from './ui.module.scss';

export default function LinkWithArrow({ children, href }: { children: any, href: string }) {
  return (
  <span className={styles.link}>
    <a href={href} target='_blank'>{children} 
    <Image
      className={styles.arrow}
      src="/arrow.svg"
      alt="arrow"
      width={10}
      height={10}
    />
  </a></span>)
}
