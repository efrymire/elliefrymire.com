import Image from 'next/image'
import styles from './work.module.scss'
import LinkWithArrow from '../ui/ui'
import { useState } from 'react';

interface Thumbnail {
  src: string,
  size: [number, number],
  shadow: boolean,
};

interface Project {
  name: string;
  description: JSX.Element;
  showMore?: ({ caption: string } & Thumbnail)[];
  thumbnail?: Thumbnail;
  links?: {
      label: string;
      src: string;
  }[];
}
const projects: Project[] = [
  { 
    name: "Atom Finance UI Components",
    description: <p>
      At Atom Finance, I have had the opportunity to work on a mission critical project bringing our 
      frontend financial visualizations to our B2B clients. After extensive research and development, I've 
      introduced HTML web components into our B2B offering to help our partners visualize our data.
      These components complete the data fetch, manipulate the data, and visualize the results. All of the 
      visualizations have been designed and developed in house. 
      <br/><br/>
      This new project is proprietary, and the code includes patent pending details, but you can
      explore more about how they help our partners at 
      <LinkWithArrow href="https://go.atom.finance/components">atom.finance</LinkWithArrow>
    </p>,
    thumbnail: { src: "/components-price-history-loop-hd.gif", size: [300, 200], shadow: true },
    showMore: [
      { caption: "An analyst ratings chart design", src: "/components-analyst-ratings.png", size: [277, 200], shadow: true },
      { caption: "An interactive components calendar", src: "/components-calendar.gif", size: [300, 200], shadow: true },
      { caption: "A news feed component", src: "/components-news-feed.png", size: [300, 200], shadow: true },
      { caption: "A consensus vs actual bar chart", src: "/components-consensus-actual.png", size: [380, 200], shadow: true },
      { caption: "A valuation slider component design", src: "/components-valuation-slider.png", size: [300, 200], shadow: true },
    ],
  }, 
  { 
    name: "Covid-19 Testing Map",
    description: <p>Early in 2022, I was struggling to find a city-run testing location in New York City. The <LinkWithArrow href='https://www.nychealthandhospitals.org/covid-19-testing-sites/'>city website</LinkWithArrow> included a list of addresses, but not a helpful interactive map. I took matters into my own hands and scraped the addresses and plotted them on a page using mapbox. This project even got some traction in <LinkWithArrow href="https://gothamist.com/news/nyc-has-more-100-mobile-covid-testing-sites-why-are-none-them-its-map">local news.</LinkWithArrow></p>,
    thumbnail: { src: "/covid-map.png", size: [280, 145], shadow: true },
    links: [
      { label: "View the live map", src: "https://testingsites.nyc/" }
    ]
  }, 
  { 
    name: "Advising and Teaching",
    description: <p>
      In 2020, along with my colleague Aucher Serr, I built an interactive data visualization class curriculum from the ground up, inspired by our own masters and our work in the industry. 
      After our first class, we built a second, advanced studio course to follow. These courses have evolved over the years, but remain a critical component of <LinkWithArrow href="https://www.gc.cuny.edu/data-analysis-and-visualization">CUNY's Data Analysis and Visualization</LinkWithArrow> masters program.
      To learn more, you can check out the latest repository for the introduction course, or the projects from the latest iteration of the studio course (students are of course the sole owners of their work).
      </p>,
    links: [
      { label: "(Intro Course) Tutorial Repository", src: "https://github.com/InteractiveDataVis/Interactive-Data-Vis-Fall2023" },
      { label: "(Advanced Course) Studio Projects", src: "https://interactivedatavis.github.io/Microsite-Adv-Studio-Spr-2023/" }
    ]
  }, 
  { 
    name: "Projects at Two-N",
    description: <p>I worked on a number of impactful projects during my time at Two-N. To name a few, I was a primary developer for the
      <LinkWithArrow href="https://two-n.com/projects/nbc-elections-map">NBC Elections Map</LinkWithArrow>,
      <LinkWithArrow href="https://two-n.com/projects/meaningful-rating-point-tool">MRP Tool</LinkWithArrow>, and 
      <LinkWithArrow href="https://two-n.com/projects/level-etf">Level ETF's fund lookthrough</LinkWithArrow>. 
      I contributed directly with NBC graphics during the elections cycle, which resulted in a few <LinkWithArrow href="https://muckrack.com/ellie-frymire">bylines</LinkWithArrow>. 
      Some projects are not featured due to client restrictions, but I also worked on a financial services reporting tool, a marketing data exploration project, a map assisting food donations, and many more.
    </p>,
    thumbnail: { src: "/nbc.png", size: [250, 150], shadow: true },
    links: [
      { label: "Learn more about Two-N's projects", src: "https://two-n.com/" }
    ]
  }, 
  { 
    name: "#metoo",
    description: <p>For my final thesis while pursuing my Masters in Data Visualization, I scraped nearly 1.4 million tweets from the public twitter search page to analyze the language within. Using kmeans cluster analysis, I find themes in the tweets and seek to answer the question: "what are people really saying about #metoo?" This thesis took me all over the world — I spoke about it at Antenna during Dutch Design Week, the Design Indaba Conference in Cape Town, as a lightning talk at Eyeo Festival in Minneapolis, and as a d3.js meet up talk.</p>,
    thumbnail: { src: "/clusters.png", size: [100,100], shadow: false},
    links: [
      { label: "Explore the project", src: "https://efrymire.github.io/thesis/index.html" },
      { label: "Watch the video", src: "https://www.youtube.com/watch?v=0xd5JNASIE4"}
    ]
  }
]

function ProjectTile({ data }: { data: Project }) {
  const [showMore, setShowMore] = useState(false);

  return (<div className={styles.projectTile}>
    <div className={styles.topRow}>
      <div className={styles.projectContent}>
        <h4>{data.name}</h4>
        <div className={styles.description}>{data.description}</div>
        {data.links && <div>{
          data.links.map(link => 
            <LinkWithArrow key={link.label} href={link.src}>{link.label}</LinkWithArrow>
          )
        }</div>}
        {data.showMore && <div>
          <span className={styles.showMoreButton} onClick={() => setShowMore(!showMore)}>
            Show me more
          </span>
        </div>}
      </div>
      <div className={styles.thumbnail}>
      {data.thumbnail 
        ? data.links 
          ? <a href={data.links[0].src}>
              <Thumbnail projectName={data.name} thumbnail={data.thumbnail}/>
            </a> 
          : <Thumbnail projectName={data.name} thumbnail={data.thumbnail}/>
        : <div className={styles.placeholder}></div>}
      </div>
    </div>
      {showMore &&
        <div className={styles.showMore}>
          {data.showMore && data.showMore.map(more => <Image
            className={`${more.shadow && styles.shadow}`}
            src={more.src}
            alt={more.caption}
            width={more.size[0]}
            height={more.size[1]}
          />)}
        </div>
      }
  </div>)
}

export function Thumbnail({ projectName, thumbnail } : { projectName: string, thumbnail: Thumbnail}) {
  return <Image
    className={`${styles.thumbnail} ${thumbnail.shadow && styles.shadow}`}
    src={thumbnail.src}
    alt={`image for ${projectName} project`}
    width={thumbnail.size[0]}
    height={thumbnail.size[1]}
  />
}

export default function Work() {
  return (<div className={styles.container}>
    <h1>Work</h1>
    <div className={styles.projectsMarquee}>
      {projects.map(p => <ProjectTile data={p} key={p.name}/>)}
      {/* <div className={styles.scrollBlur}></div> */}
    </div>
  </div>)
}