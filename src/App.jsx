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
    `
  },
  {
    title:'Digitro - NKEY',
    year: '2022',
    location: 'Santa Catarina, BR',
    description: `
    As a seasoned backend developer at Digitro, I played a key role in the development of a health platform that connected professionals and patients via node.js applications using TDD methodologies and NestJS. My extensive experience with Docker, Docker Compose, and various databases (such as Postgres and MySQL) allowed me to consistently deliver high-quality, scalable solutions that met the needs of both professionals and patients. In addition, I effectively utilized RabbitMQ and Kafka to integrate and manage various services, and contributed to the maintenance of tools such as GitHub, Jenkins, ECS, and ECR. My technical expertise and dedication to excellence enabled me to effectively develop and maintain a wide range of complex systems within this critical healthcare platform.
    `,
    referal: 'https://drive.google.com/file/d/1gevSgJksQavD3flyQAVyP5ejhDOmFgLs/view?usp=sharing'
  },
  {
    title:'Bank of Brazil',
    year: '2022',
    location: 'Brasília DF, BR',
    description: `
    As an infrastructure analyst and backend developer at Bank of Brazil, I was responsible for the development of microservices that automated database processes using Ansible, Python, Jupyter, Pandas, Flask, and K8s. My expertise in these technologies enabled me to effectively develop and maintain a range of complex systems, ensuring the smooth operation of critical processes. In addition, I configured Prometheus and Grafana to expose metrics of running pods in Kubernetes, enabling the monitoring and optimization of key performance indicators. My technical skills and attention to detail enabled me to consistently deliver high-quality, scalable solutions that met the needs of the business.
    `
  },
  {
    title:'Fastzap',
    year: '2017 - 2018',
    location: 'Teresina PI, BR',
    description: `
      As a developer at Fastzap/Blubots, I played a key role in the creation of API's for messaging platforms such as WhatsApp, Telegram, Facebook, and Instagram using Typescript. My development of data extraction and analysis crawlers using technologies such as Puppeteer, Selenium, MongoDB, PM2, Digital Ocean, AWS, Heroku, Docker, Dokku, and MySQL greatly impacted the efficiency and effectiveness of our processes. I consistently demonstrated a strong commitment to good programming practices and implemented commit patterns on GitHub to ensure the highest level of quality. Additionally, my development of API's using Python, Django, and Flask, as well as the implementation of queuing systems using RabbitMq, BeeQueue, and Bull, greatly improved the performance of our systems. My use of Elastic Search and development of charts using Kibana enhanced the searchability and visualization of data, respectively. Overall, my technical expertise and dedication to excellence enabled me to significantly contribute to the success of the business.
    `
  },
  {
    title:'Apollo Gás',
    year: '2016 - 2023',
    location: 'Caxias MA, BR',
    description: `
      As a developer at Apollo Gás, I was involved in the creation of POS systems using Electron. My development of reliable API's using Python and Flask, and their integration with the frontend, was critical to the success of the project. I also implemented caching strategies using Redis to improve the performance of the system. In addition, I developed static pages using a range of tools such as React, VueJS, jQuery, and Websockets. I also made significant improvements to queries in the MySQL database, enabling the system to operate more efficiently. My work also included the transition of the system from a local environment to a web-based platform using NextJS. To ensure the scalability and high availability of the system, I implemented Dockerization and made improvements using NGINX and Docker. My technical skills and attention to detail enabled me to consistently deliver high-quality, reliable solutions that met the needs of the business.
    `
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

const Title = () => {
  return <header class="
  flex
  row-gap-5
  flex-row flex-wrap
  items-center
  mb-5
  md:mb-2
  border-b-2 border-opacity-50 border-gray-400
">
    <div class="initials-container mr-5 text-base leading-none pb-2 pt-2 text-white bg-purple-800 font-medium px-3">
      <div class="initial text-center text-2xl pb-1">S</div>
      <div class="text-center text-2xl initial">A</div>
    </div>
    <h1 class="print:text-6xl lg:text-6xl md:text-5xl mr-auto text-3xl font-semibold text-gray-750 pb-px">
      Sóstenes Apollo
    </h1>

    <h2 id="industry-title" class="print:text-3xl text-purple-700 font-sans self-center md:text-3xl text-2xl font-hairline pb-px">
    </h2>
  </header>
}

const RightArrow = ({className=""}) => <span class={`-ml-2 pr-2 -pl-0 select-none text-white-600 ${className}`}>›</span>

const Experience = ({
  experience: {
    title="",
    year="",
    location="",
    description='',
    referal=""
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