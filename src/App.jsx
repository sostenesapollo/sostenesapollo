import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; 

const experiences= [
  {
    title:'Priority Payment Systems - BairesDev',
    year: '2021 - Current',
    location: 'Alphareta, GA, US',
    description: `
    I was responsible for the development of payment microservices using node.js and TDD practices, with a focus on delivering high-quality, scalable solutions. My technical skills in Javascript, Typescript, and C# enabled me to effectively develop and maintain these microservices, utilizing Chai and Jest for test-driven development. My contributions significantly improved the reliability and performance of the payment microservices, resulting in a 25% increase in transaction processing speed. I also played a key role in the maintenance of Kafka, Redis, streamliners, and APIs for these microservices.
    `,
    usefullLinks: [
      {name: 'BairesDev', url: 'bairesdev.com'},
      {name: 'Priority Payment Systems', url: 'https://prioritycommerce.com/smb-payments/'}
    ]
  },
  {
    title:'Digitro - NKEY',
    year: '2022',
    location: 'Santa Catarina, BR',
    description: `
    As a seasoned backend developer at Digitro, I played a key role in the development of a health platform that connected professionals and patients via node.js applications using TDD methodologies and NestJS. My extensive experience with Docker, Docker Compose, and various databases (such as Postgres and MySQL) allowed me to consistently deliver high-quality, scalable solutions that met the needs of both professionals and patients. In addition, I effectively utilized RabbitMQ and Kafka to integrate and manage various services, and contributed to the maintenance of tools such as GitHub, Jenkins, ECS, and ECR. My technical expertise and dedication to excellence enabled me to effectively develop and maintain a wide range of complex systems within this critical healthcare platform.
    `,
    referal: 'https://drive.google.com/file/d/1gevSgJksQavD3flyQAVyP5ejhDOmFgLs/view?usp=sharing',
    usefullLinks: [
      {name: 'Nkey', url: 'http://nkey.com.br/'},
      {name: 'Dígitro', url: 'https://www.digitro.com/'}
    ]
  },
  {
    title:'Bank of Brazil',
    year: '2022',
    location: 'Brasília DF, BR',
    description: `
    As an infrastructure analyst and backend developer at Bank of Brazil, I was responsible for the development of microservices that automated database processes using Ansible, Python, Jupyter, Pandas, Flask, and K8s. My expertise in these technologies enabled me to effectively develop and maintain a range of complex systems, ensuring the smooth operation of critical processes. In addition, I configured Prometheus and Grafana to expose metrics of running pods in Kubernetes, enabling the monitoring and optimization of key performance indicators. My technical skills and attention to detail enabled me to consistently deliver high-quality, scalable solutions that met the needs of the business.
    `,
    usefullLinks: [
      {name: 'Fastzap', url: 'https://www.bb.com.br/site/'}
    ]
  },
  {
    title:'Fastzap',
    year: '2017 - 2018',
    location: 'Teresina PI, BR',
    description: `
      As a developer at Fastzap/Blubots, I played a key role in the creation of API's for messaging platforms such as WhatsApp, Telegram, Facebook, and Instagram using Typescript. My development of data extraction and analysis crawlers using technologies such as Puppeteer, Selenium, MongoDB, PM2, Digital Ocean, AWS, Heroku, Docker, Dokku, and MySQL greatly impacted the efficiency and effectiveness of our processes. I consistently demonstrated a strong commitment to good programming practices and implemented commit patterns on GitHub to ensure the highest level of quality. Additionally, my development of API's using Python, Django, and Flask, as well as the implementation of queuing systems using RabbitMq, BeeQueue, and Bull, greatly improved the performance of our systems. My use of Elastic Search and development of charts using Kibana enhanced the searchability and visualization of data, respectively. Overall, my technical expertise and dedication to excellence enabled me to significantly contribute to the success of the business.
    `,
    usefullLinks: [
      {name: 'Fastzap', url: 'https://www.fastzap.chat/'}
    ]
  },
  {
    title:'Apollo Gás',
    year: '2016 - 2023',
    location: 'Caxias MA, BR',
    description: `
      As a developer at Apollo Gás, I was involved in the creation of POS systems using Electron. My development of reliable API's using Python and Flask, and their integration with the frontend, was critical to the success of the project. I also implemented caching strategies using Redis to improve the performance of the system. In addition, I developed static pages using a range of tools such as React, VueJS, jQuery, and Websockets. I also made significant improvements to queries in the MySQL database, enabling the system to operate more efficiently. My work also included the transition of the system from a local environment to a web-based platform using NextJS. To ensure the scalability and high availability of the system, I implemented Dockerization and made improvements using NGINX and Docker. My technical skills and attention to detail enabled me to consistently deliver high-quality, reliable solutions that met the needs of the business.
    `,
    usefullLinks: [
      {name: 'Apollo Gás', url: 'https://www.apollogas.com.br/'}
    ]
  },
  {
    title:'Apollo Tech / AEE Publicity',
    year: '2016 - 2023',
    location: 'Caxias MA, BR',
    description: `
      Developed multiple solutions for different products
    `,
    usefullLinks: [
      {name: 'Apollo Tech', url: 'https://apollotecx.github.io/'},
      {name: 'Sanserv Santização', url: 'https://sanservsanitizacao.com.br/'}, 
      {name: 'Águia Express'}, 
    ]
  }
]

const langs = [
  {name:"Typescript", iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg'},
  {name:"Javascript", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
  {name:"Python", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
  {name:".Net", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'},
  {name:"PHP", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'},
]

const tools = [
  {name:"React", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
  {name:"Nestjs", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'},
  {name:"Nextjs", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'},
  {name:"Nodejs", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
  {name:"Postgres", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'},
  {name:"Mysql", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
  {name:"MongoDB", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},  
  {name:"Redis", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg'},
  {name:"Kafka", iconUrl: 'https://openwhisk.apache.org/images/icons/icon-kafka-white-trans.png'},
  {name:"Puppeteer", iconUrl: 'https://www.svgrepo.com/show/354228/puppeteer.svg'},  
]

const moreTools = [
  {name:"Heroku", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg'},  
  {name:"kubernetes", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'},
  {name:"Teraform", iconUrl: 'https://icons-for-free.com/download-icon-Terraform-1329545833434920628_512.png'},
  {name:"AWS", iconUrl: 'https://static-00.iconduck.com/assets.00/aws-icon-512x512-hniukvcn.png'},
  {name:"Digital Ocean", iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/DigitalOcean_icon.svg/2048px-DigitalOcean_icon.svg.png'}
]

const MeIcon = ({className=""}) => <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block p-1 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${className}`} style={{backgroundColor:'#333'}}>
  <img src="me.jpeg" alt="ME" className={`inline-block text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-12 sm:w-20 ${className}`}/>
</button>

const GithubIcon = ({className=""}) => <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block p-2 mb- text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${className}`} style={{backgroundColor:'#333'}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-7 h-7"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
</button>

const TwitterIcon= ({className=""}) => <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block p-2 mb-2 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${className}`} style={{backgroundColor:'#1da1f2'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-7 h-7"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
</button>

const GmailIcon= ({className=""}) => <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block p-2 mb-2 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${className}`} style={{backgroundColor:'#ea4335'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-7 h-7"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
</button>

const LinkedInIcon= ({className=""}) => <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block p-2 mb-2 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${className}`} style={{backgroundColor:'#0077b5'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-7 h-7"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
</button>

const YoutubeIcon= ({className=""}) => <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block p-2 mb-2 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${className}`} style={{backgroundColor:'#ff0000'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-7 h-7"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
</button>

const WhatsappIcon= ({className=""}) => <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block p-2 mb-2 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${className}`} style={{backgroundColor:'#128c7e'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-7 h-7"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>

</button>





const Title = () => {
  return <div class="flex row-gap-5 xl:flex-row flex-col flex-wrap items-center mb-5 md:mb-2 border-b-2 border-opacity-50 border-gray-400">  
    <div className="flex grow">
      <div class="initials-container mr-5 text-base leading-none pb-2 pt-2 text-white bg-purple-800 font-medium px-3 hidden xl:block">
        <div class="initial text-center text-2xl pb-1">S</div>
        <div class="text-center text-2xl initial">A</div>
      </div>
      <h1 class="print:text-6xl lg:text-6xl md:text-4xl mr-auto text-3xl font-semibold text-gray-750 pb-px">
        <MeIcon/> 
        Sóstenes Apollo
      </h1>
    </div>

    <div className="flex">
      {/* <h2 id="industry-title" class="print:text-6xl text-center lg:text-xl md:text-md mr-auto text-md font-semibold text-gray-750 pb-px"> */}
        {/* Software Engineer */}
        <a  className="w-auto" href="https://github.com/sostenesapollo" target="_blank" rel="noreferrer">
          <GithubIcon className="mr-2"/>
        </a>
        <a  className="w-auto" href="https://twitter.com/SostenesApollo" target="_blank" rel="noreferrer">
          <TwitterIcon className="mr-2"/>
        </a>
        <a  className="w-auto" href="https://mail.google.com/mail/?view=cm&fs=1&to=sostenesapollo25@gmail.com" target="_blank" rel="noreferrer">
          <GmailIcon className="mr-2"/>
        </a>
        <a  className="w-auto" href="https://www.linkedin.com/in/sostenesapollo/" target="_blank" rel="noreferrer">
          <LinkedInIcon className="mr-2"/>
        </a>
        <a  className="w-auto" href="https://www.youtube.com/channel/UCL86DlZsoIU3-kjqiF662vg" target="_blank" rel="noreferrer">
          <YoutubeIcon className="mr-2"/>
        </a>
        <a  className="w-auto" href="https://wa.me/+5599988284904" target="_blank" rel="noreferrer">
          <WhatsappIcon className="mr-2"/>
        </a>
      {/* </h2> */}
    </div>
  </div>
}


const RightArrow = ({className=""}) => <span class={`-ml-2 pr-2 -pl-0 select-none text-white-600 ${className}`}>›</span>

const Experience = ({
  experience: {
    title="",
    year="",
    location="",
    description='',
    referal="",
    usefullLinks=[]
  }
}) => {
  return (
    <section class="mb-4 mt-2">
      <header>
        <h3 id="job-title" class="text-lg font-semibold text-white-700 leading-snugish">
          {title}
        </h3>
        <p id="work-date-location" class="leading-normal text-sm text-white-700 mt-1">
          {year} <strong></strong>
          <RightArrow className="pl-3"/>
          {location && location} 
          <RightArrow className="pl-3"/>
          {referal&& <a className="text-blue-300" href={referal}>See letter of recommendation</a>}
        </p>
      </header>
      <ul id="work-description-bullets" class="">
        <li class="mt-2.1 ml-1.5 text-sm text-white-700 leading-normal flex">
          <RightArrow/>
          {description.split('\n').map(line=><p>{line}</p>)}
        </li>
        {usefullLinks.length > 0 && <b className="pl-3">Usefull links/refs:</b>}
        <p></p>
        {usefullLinks.map((e)=>
          <li className="pl-7 text-blue-300">
            <a href={e.url} target="_blank" rel="noreferrer" className="text-blue-300">
              <RightArrow className="pl-3"/> {e.name}
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}

const ProfileSection = () => {
  return (
    <section class="md:mt-8 first:mt-0 pt-6" id="profile">
      <h2 class="mb-0 font-bold tracking-widest text-sm2 text-purple-200 ">
        PROFILE
      </h2>

      <section class="mb-0 grid pt-3">
        <h3 class="text-lg font-semibold text-white-700 leading-snugish">
        </h3>
        <p class="mt-2.1 ml-1.5 text-sm text-white-700 leading-normal">
          <RightArrow/>
          <strong>
            BR Citizen - Originally from Caxias, MA.
          </strong>
        </p>
        <p class="mt-2.1 ml-1.5 text-sm text-white-700 leading-normal">
          <RightArrow/>
          Living &amp; residing in Brazil, Brasilia.
        </p>
        <p class="mt-2.1 ml-1.5 text-sm text-white-700 leading-normal">
          <RightArrow/>
          Available Time Zones:
          Full overlap APAC &amp; EMEA (Europe).
          Some US / Canada overlap.
        </p>
        <p class="mt-2.1 ml-1.5 text-sm text-white-700 leading-normal">
          <RightArrow/>
          Fully remote permanent or contract role on diverse, trusting, and async team.
        </p>
      </section>
    </section>
  )
} 

const ExperienceSection = () => {
  return (
    <section class="col-span-3 mt-6 first:mt-0" id="experience">
        <h2 class="mb-4 font-bold tracking-widest text-sm2 text-purple-200">EXPERIENCE</h2>
        <section class="mb-4.5">
          {experiences.map(experience=><Experience experience={experience}/>)}
        </section>
    </section>
  )
}

const ContentHome = () => {
  return (
    <section class="print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0 content-center pb-5">
      <ProfileSection/>
      <ExperienceSection/>
    </section>
  )
}

const Tech = ({tech:{name, iconUrl}}) => {
  return (
    <section class="flex mt-1 content-center items-center text-center space-between">
      <div>
        <img src={iconUrl} alt="" className="w-6 h-6 mt-2"/>
      </div>

      <h3 id="job-title" class="text-lg font-semibold text-white-700 leading-snugish text-center">
        <p className="pt-2 pl-2">{name}</p>
      </h3>
    </section>
  )
}

const AditionalSection = () => {
  return (
    <>
      <section class="col-span-3 first:mt-0" id="experience">
      <h2 class="mb-4 font-bold tracking-widest text-sm2 text-purple-200 text-center lg:text-start">
            DEV STACK
          </h2>
          <section class="flex flex-col mt-1 items-center md:items-start">
            {langs.map(tech=><Tech tech={tech}/>)}
          </section>
      </section>

      <section class="col-span-3 mt-6 first:mt-0" id="experience">
      <h2 class="mb-4 font-bold tracking-widest text-sm2 text-purple-200 text-center lg:text-start">
            TOOLS 
          </h2>
          <section class="flex flex-col mt-1 items-center md:items-start">
            {tools.map(tech=><Tech tech={tech}/>)}
          </section>
      </section>
      
      <section class="col-span-3 mt-6 first:mt-0" id="experience">
      <h2 class="mb-4 font-bold tracking-widest text-sm2 text-purple-200 text-center lg:text-start">
        SERVICES AND DEVOPS 
      </h2>
      <section class="flex flex-col mt-1 items-center md:items-start">
        {moreTools.map(tech=><Tech tech={tech}/>)}
      </section>
      </section>
    </>
  )
}


const ContentInfo = () => {
  return (
    <section class="print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0 content-center">
      <AditionalSection/>
      {/* <ExperienceSection/> */}
    </section>
  )
}

export default function App() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
      <>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "green",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: .4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        
        <div className="
          p-10
          mx-auto
          print:max-w-letter
          md:max-w-letter md:h-letter
          xsm:p-8
          sm:p-9
          md:p-20
          md:ml-20
          md:mr-20
        ">
          <Title/>
          <div class="grid lg:grid-cols-4 gap-20">
            <ContentHome/>
            <ContentInfo/>
          </div>
        </div>
      </>
    );
};