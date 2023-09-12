'use client'

import Canvas from './blur/blur'
import styles from './page.module.scss'
import Resume from './resume/resume'
import LinkWithArrow from './ui/ui'
import Work from './work/work'

export default function Home() {

  const scroll = (id:string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" });
  };
  return (<>    
    <main className={styles.main}>

      <div className={`${styles.page} ${styles.home}`}>
        <Canvas/>
        <div className={styles.name}>
          ELLIE FRYMIRE
        </div>
        <div className={styles.pages}>
          <span><a onClick={() => scroll("about")}>about</a></span>
          <span><a onClick={() => scroll("work")}>work</a></span>
          <span><a onClick={() => scroll("resume")}>resume</a></span>
          <LinkWithArrow href='https://github.com/efrymire'>github</LinkWithArrow>
          <LinkWithArrow href='https://www.linkedin.com/in/elliefrymire'>linkedin</LinkWithArrow>
        </div>
      </div>

      <div className={`${styles.page} ${styles.about}`} id="about">
        <h1 >About</h1>
        <p>
          Driven and accomplished designer and developer living in San Francisco, California.
          <br/><br/>
          I have a strong business and client background, with startup experience working on mission critical products. 
          I like to think I am both a passionate creative and an analytical thinker. 
          I enjoy both designing and coding projects from start to finish, but also speaking about and teaching my work. 
          <br/><br/>
          I am currently working on a web components library of financial visualizations at <LinkWithArrow href="https://atom.finance/">Atom Finance</LinkWithArrow>, while teaching as an adjunct lecturer in the <LinkWithArrow href="https://www.gc.cuny.edu/data-analysis-and-visualization">CUNY Data Visualization and Analysis</LinkWithArrow> program. 
        </p>
      </div>

      <div className={`${styles.page} ${styles.work}`} id="work">
        <Work/>
      </div>

      <div className={`${styles.page} ${styles.resume}`} id="resume">
        <Resume/>
      </div>

    </main>
  </>)
}
