'use client'

import Image from 'next/image'
import Canvas from './blur/blur'
import styles from './page.module.scss'
import Resume from './resume/resume'

function LinkWithArrow({ children, href }: { children: any, href:string }) {
  return (<a href={href} target='_blank'>{children} 
    <Image
      className={styles.arrow}
      src="/arrow.svg"
      alt="arrow"
      width={10}
      height={12}
    />
  </a>)
}

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
          <a onClick={() => scroll("about")}>about</a>
          <a onClick={() => scroll("projects")}>projects</a>
          <a onClick={() => scroll("resume")}>resume</a>
          <LinkWithArrow href='https://github.com/efrymire'>github</LinkWithArrow>
          <LinkWithArrow href='https://www.linkedin.com/in/elliefrymire'>linkedin</LinkWithArrow>
        </div>
      </div>

      <div className={`${styles.page} ${styles.about}`} id="about">
        <h1 >About</h1>
        <div>
          Driven and accomplished designer and developer living in San Francisco, California.
          <br/><br/>
          I have a strong business and client background, with startup experience working on mission critical products. 
          I like to think I am both a passionate creative and an analytical thinker. 
          I enjoy both designing and coding projects from start to finish, but also speaking about and teaching my work. 
          <br/><br/>
          I am currently working on data visualization web components at <LinkWithArrow href="https://atom.finance/">Atom Finance</LinkWithArrow>, while teaching as an adjunct lecturer in the <LinkWithArrow href="https://www.gc.cuny.edu/data-analysis-and-visualization">CUNY Data Visualization and Analysis program</LinkWithArrow>. 
        </div>
      </div>

      <div className={`${styles.page} ${styles.projects}`} id="projects">
        <h1 >Projects</h1>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className={`${styles.page} ${styles.resume}`} id="resume">
        <Resume/>
      </div>


    </main>
    </>
  )
}
