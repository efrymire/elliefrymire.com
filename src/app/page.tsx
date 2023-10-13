'use client'

import Image from 'next/image'
import Canvas from './blur/blur'
import styles from './page.module.scss'
import Resume from './resume/resume'
import LinkWithArrow from './ui/ui'
import Work from './work/work'
import { useCallback, useEffect, useRef, useState } from 'react'

const pages = [
  "home", 
  "about",
  "work",
  "resume"
]

export default function Home() {
  const [page, setPage] = useState(pages[0])
  const main = useRef<HTMLDivElement>(null)

  const scroll = (id:string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const previous = useCallback(() => {
    const prev = pages[pages.indexOf(page) - 1]
    const el = document.getElementById(prev)
    el?.scrollIntoView({ behavior: "smooth" });
  }, [page, main])

  const next = useCallback(() => {
    const next = pages[pages.indexOf(page) + 1]
    const el = document.getElementById(next)
    el?.scrollIntoView({ behavior: "smooth" });
  }, [page, main])

  const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.9,
  };

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setPage(entry.target.id);
      }
    });
  };

  useEffect(() => {
    let observerRefValue: any = null;

    const observer = new IntersectionObserver(handleIntersection, options);
    const subItems = document.querySelectorAll(`.${styles.page}`);

    subItems.forEach((subItem) => {
      observer.observe(subItem);
    });

    if (main.current) {
      observerRefValue = main.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };

  }, [handleIntersection, options]);


  return (<>    
    <main className={styles.main} id="main" ref={main}>

      <div className={`${styles.page} ${styles.home}`} id="home">
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
    <nav className={styles.nav}>
      {page !== "home" && <span className={styles.previous}><a onClick={previous}>
        <Image
          src="/left-arrow.svg"
          alt='next'
          width={20}
          height={20}
        />
        </a>
      </span>}
      {(page !== "home" && page !== "resume") && <span className={styles.next}><a onClick={next}>
        <Image
            src="/right-arrow.svg"
            alt='next'
            width={20}
            height={20}
          />
        </a></span>}
    </nav>
  </>)
}
