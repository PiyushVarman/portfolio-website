import { useEffect, useState } from 'react'
import { motion } from "motion/react";
import { BorderBeam } from './components/ui/border-beam';
import { TypingAnimation } from './components/ui/typing-animation';
import { RetroGrid } from './components/ui/retro-grid';
import { ScrollProgress } from './components/ui/scroll-progress';
import { Button } from './components/ui/button';  
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card';
import { ArrowUpRight, Bluetooth } from 'lucide-react';
import { BlurFade } from './components/ui/blur-fade';
import { AnimatedList } from './components/ui/animated-list';
import { Mail } from 'lucide-react';
import  LinkedIn  from './assets/LinkedIn.svg';
import GitHub from './assets/github.svg';
import LeetCode from './assets/leetcode.svg';
import CodeChef from './assets/codechef.svg';
import './App.css'
import photo from './assets/Photo.jpg';
import os from './assets/os.mp4';
import lexinote from './assets/lexinote.mp4';
import f1regexpert from './assets/f1regexpert.mp4';
import sentimentanalyzer from './assets/sentimentanalyzer.mp4';
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY > 100)
      {
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <> 
      <motion.div className='fixed z-[-1]  h-screen w-screen' initial={{scale:1,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration: 1}}>
        <RetroGrid className='z-[-1] fixed top-0 w-screen h-screen' opacity={0.4} angle={10}/>
      </motion.div>
      <div className={`flex gap-x-10 items-center justify-center fixed top-0 left-0 w-full h-20 shadow-md rounded-xl z-1 bg-transparent text-2xl *:hover:scale-150 *:duration-200 backdrop-blur-lg hover:backdrop-blur-2xl hover:bg-white/15 hover:h-40 transition-all duration-250 ease-in-out ${scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <a href="https://www.linkedin.com/in/piyush-varman" target="_blank"><img src={LinkedIn} className='w-8 rounded duration-200 hover:shadow-xs hover:shadow-white'/></a>
        <a href="https://github.com/piyushvarman" target="_blank"><img src={GitHub} className='w-9 rounded-3xl duration-200 hover:shadow-xs hover:shadow-white'/></a>
        <p className="p-5 text-white text-5xl font-bold  hover:text-shadow-white hover:text-amber-400 transition-all duration-500">PCV</p>
        <a href="https://www.codechef.com/users/piyushvarman"target="_blank"><img src={CodeChef} className='w-10'/></a>
        <a href="https://leetcode.com/u/pcv232/" target="_blank"><img src={LeetCode} className='w-8 stroke-red-500 fill-red-500'/></a>
      <ScrollProgress className="absolute bottom-0 h-[0.3vh]"/>
      </div>

      <main className='pt-0'>
        <div className="flex items-center letter-spacing justify-center left-0 bg-right min-h-screen">
          <div className="w-full flex flex-col items-center gap-4">
            <TypingAnimation words={['Piyush','Varman','Piyush Varman']} cursorStyle="underscore" blinkCursor={true} className="backdrop-blur outline pl-10 pr-10 text-8xl tracking-tighter hover:scale-110 hover:text-amber-200 hover:pl-1 hover:pr-1 hover:rounded-xs transition-all duration-500 motion-preset-typewriter">Piyush Varman</TypingAnimation>
            <p className="gap-4 italic text-2xl">Sophomore at VIT Chennai</p>
          </div>
          <div className='w-1/2 flex justify-end'>
            <motion.div initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:1 }}className='w-[50vw] h-[50vw] aspect-square overflow-clip rounded-4xl'>
              <img src={photo} className="w-full h-full object-cover hover:scale-130 bg-clip-content hover:rotate-5 transition duration-375"/>
            </motion.div>
          </div>
        </div>

        {/* About Me */}
        <section className="relative bg-black/80 h-[65vh] mt-20! flex flex-col items-center overflow-hidden">
          <h1 className="p-5 text-5xl font-bold text-center  text-transparent bg-linear-to-b from-white to-black bg-clip-text mt-[10vh] rounded-full hover:text-shadow-sm hover:text-shadow-white/10 duration-450 hover:scale-101 ">About Me</h1>
          <div className="relative flex flex-col items-center justify-center w-[80vw] h-[30vh]  text-center my-20!">
            <AnimatedList>
            <p className={'leading-6'}>Hi!👋</p>
            <p className='leading-6'>I'm Piyush Varman, a junior at VIT Chennai, India.</p>
            <p className='leading-6'>I'm an asipiring AI Engineer with experience in AI Technologies<br/> such as LangChain and related disciplines including ML, RAG and NLP.</p>
            <p className='leading-6'>I'm proficient in<br/>Full-Stack and Frontend Web Development.</p>
            <p className='leading-6'>I'm interested in roles and Software development projects<br/>that implement AI in a way that prioritizes ease-of-use.</p>
            </AnimatedList>
          </div>
        </section>


        {/* Projects Section */}
        <section>
          <h1 className="text-8xl font-bold text-center uppercase tracking-widest text-transparent bg-linear-to-b from-white to-black/50 bg-clip-text my-[10vh]! hover:text-shadow-xs hover:text-shadow-white/50 duration-450 hover:scale-101">Projects</h1>
          <div className='flex flex-wrap justify-center gap-x-10 gap-y-10'>
            <div className="inset-0 flex items-center justify-center ">
            <BlurFade inView={true} delay={0.1} inViewMargin='-10px' blur="100px">
            <CardContainer container ClassName="rounded-xl py-0 outline outline-red-500 bg-white ">
              <CardBody className="relative h-auto w-auto rounded-xl bg-card p-6 shadow-xs shadow-white/10 outline outline-white/20 bg-gray-900/20 hover:shadow-xl">
                <CardItem translateZ={150} className="mt-4 w-full">
                  <video
                    src={os}
                    alt="Sandbox OS"
                    width="640px"
                    height="360px"
                    className=" rounded-lg object-fill"
                    autoPlay loop muted
                  />
                </CardItem>
                <CardItem translateZ={50} className="relatve mt-10! text-xl font-bold">
                  <i>OS</i>
                </CardItem>
                <CardItem translateZ={50} className="mt-2 max-w-sm text-sm text-muted-foreground">
                  A fun frontend project built using Vite React, meant to simulate an OS. Powered by shadcn/ui components
                </CardItem>
                <div className="mt-4 flex justify-end">
                  <CardItem translateZ={100} className="rounded-lg border px-4 py-2 text-sm font-medium text-black bg-white hover:scale-110">
                    <a href="https://sandboxos.vercel.app" className="hover:underline duration-200 flex flex-row" target="_blank">Go<ArrowUpRight className='w-5 pb-1'/></a>
                  </CardItem>
                </div>
                <BorderBeam reverse size={140} duration={1000} colorFrom='white' colorTo="white" transition={{type: "spring",stiffness: 60, damping: 100}}/>
              </CardBody>
            </CardContainer>
            </BlurFade>
            </div>

            <div className="inset-0 flex items-center justify-center">
            <BlurFade inView={true} delay={0.2} inViewMargin='-10px' blur="100px">
            <CardContainer containerClassName="rounded-xl py-0">
              <CardBody className="relative h-auto w-auto rounded-xl outline shadow-xs shadow-white/10 outline-white/20 bg-gray-900/20bg-card p-6 hover:shadow-xl">
                <CardItem translateZ={50} className="text-xl font-bold italic">
                  LexiNote
                </CardItem>
                <CardItem translateZ={50} className="mt-2 max-w-sm text-sm text-muted-foreground">
                  All-in-one Dictionary and Text Editor built entirely on the MERN stack. Database populated with over 200K words provided by the WordNet API.
                </CardItem>
                <div className="mt-5! flex justify-end">
                  <CardItem translateZ={90} className="flex flex-col items-center justify-center rounded-lg border px-4 text-sm font-medium bg-white text-black">
                    <a href="https://www.github.com/piyushvarman/lexinote" target="_blank" className="hover:underline duration-200 flex flex-row my-2!">Source Code<ArrowUpRight className='w-5 pb-1'/></a>
                  </CardItem>
                </div>
                <CardItem translateZ={100} className="mt-7! w-full">
                  <video
                    src={lexinote}
                    alt="LexiNote"
                    width="640px"
                    height="360px"
                    className=" rounded-lg object-fill"
                    autoPlay loop muted
                  />
                </CardItem>
              <BorderBeam reverse size={140} duration={1000} colorFrom='white' colorTo="white" transition={{type: "spring",stiffness: 60, damping: 100}}/>
              </CardBody>
            </CardContainer>
            </BlurFade>
            </div>

            <div className="inset-0 flex items-center justify-center">
            <BlurFade inView={true} delay={0.3} inViewMargin='-10px' blur="100px">                
            <CardContainer containerClassName="rounded-xl py-0">
              <CardBody className="relative h-auto w-auto rounded-xl outline shadow-xs shadow-white/10 outline-white/20 bg-gray-900/20bg-card p-6 hover:shadow-xl">
                <CardItem translateZ={100} className="mt-4 w-full">
                  <video
                    src={sentimentanalyzer}
                    alt="Student Feedback Sentiment Analyzer"
                    width="640px"
                    height="360px"
                    className=" rounded-lg object-fill"
                    autoPlay loop muted
                  />
                </CardItem>
                <CardItem translateZ={50} className="mt-10! text-xl font-bold italic">
                  Student Feedback Sentiment Analyzer
                </CardItem>
                <CardItem translateZ={50} className="mt-2! max-w-sm text-sm text-muted-foreground">
                  An AI/NLP Project (Naïve Bayes) built to help streamline and simplify Student Feedback in Feedback Forms circulated by Universities.
                </CardItem>
                <div className="mt-5! flex justify-end">
                  <CardItem translateZ={90} className="flex flex-col items-center justify-center rounded-lg border px-4 py-0 text-sm font-medium bg-white text-black">
                    <a href="https://github.com/PiyushVarman/Student-Feedback-Sentiment-Analyzer" target="_blank" className="hover:underline duration-200 flex flex-row my-2!">Source Code<ArrowUpRight className='w-5 pb-1'/></a>
                  </CardItem>
                </div>
              <BorderBeam reverse size={140} duration={1000} colorFrom='white' colorTo="white" transition={{type: "spring",stiffness: 60, damping: 100}}/>
              </CardBody>
            </CardContainer>
            </BlurFade>
            </div>

            <div className="inset-0 flex items-center justify-center">
            <BlurFade inView={true} delay={0.4} inViewMargin='-10px' blur="100px">
            <CardContainer containerClassName="rounded-xl py-0">
              <CardBody className="relative h-auto w-auto rounded-xl outline shadow-xs shadow-white/10 outline-white/20 bg-gray-900/20bg-card p-6 hover:shadow-xl">
                <CardItem translateZ={50} className="text-xl font-bold italic">
                  Formula 1 Regulations Expert
                </CardItem>
                <CardItem translateZ={50} className="mt-2! max-w-sm text-sm text-muted-foreground">
                  RAG Project which simplifies the 2026 Formula 1 Regulations. Powered by Google Gemini and Next.js and built in Python using LangChain and FAISS.
                </CardItem>
                <div className="mt-5! flex justify-end">
                  <CardItem translateZ={90} className="flex flex-col items-center justify-center rounded-lg border px-4 py-0 text-sm font-medium bg-white text-black">
                    <a href="https://github.com/PiyushVarman/f1-reg-expert" target="_blank" className="hover:underline duration-200 flex flex-row my-2!">Source Code<ArrowUpRight className='w-5 pb-1'/></a>
                  </CardItem>
                </div>
                <CardItem translateZ={100} className="mt-7! w-full">
                  <video
                    src={f1regexpert}
                    alt="F1 Regulations Expert"
                    width="640px"
                    height="360px"
                    className=" rounded-lg object-fill"
                    autoPlay loop muted
                  />
                </CardItem>
              <BorderBeam reverse size={140} duration={1000} colorFrom='white' colorTo="white" transition={{type: "spring",stiffness: 60, damping: 100}}/>
              </CardBody>
            </CardContainer>
            </BlurFade>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <BlurFade inView={true} delay={0.4} inViewMargin='10px' blur="100px">
          <section className="mt-20! bg-black/40 h-[160vh] flex flex-col items-center">
            <h1 className='p-5 text-5xl font-bold text-center  text-transparent bg-linear-to-b  from-white to-black bg-clip-text mt-[10vh]  hover:text-shadow-sm hover:text-shadow-white/10 duration-450 hover:scale-101'>Skills</h1>
            <div className="mt-17.5! relative overflow-hidden flex flex-col gap-y-20 items-center backdrop-blur outline outline-white/20 h-max w-[80vw] p-10  rounded-xl hover:scale-110 duration-500 hover:shadow-xl hover:shadow-white/10">
              <div className='text-center'> 
                <h2 className='text-3xl'>Programming Languages</h2>
                <div className='flex flex-wrap justify-center gap-x-10 list-disc p-10 *:min-w-10! text-center *:flex *:flex-col *:items-center *:hover:scale-110 *:duration-100'>
                  <img src="/src/assets/logos/python.svg" title="Python" className='invert brightness-100 background-none h-10 w-10'/>
                  <img src="/src/assets/logos/c.svg" title="C" className='invert brightness-100 background-none h-10 w-10'/>
                  <img src="/src/assets/logos/cplusplus.svg" title="C++" className='invert brightness-100 background-none h-10 w-10'/>
                  <img src="/src/assets/logos/java.svg" title="Java" className='brightness-0 invert background-none h-10 w-10'/>
                </div>
                <hr className='w-[70vw] opacity-20'/>
                <br/>
                <h2 className='text-3xl'>AI</h2>
                <div className='flex flex-wrap justify-center gap-x-10 list-disc p-10 *:min-w-10! text-center *:flex *:flex-col *:items-center *:hover:scale-110 *:duration-100'>
                  <img src="/src/assets/logos/langchain.svg" title="LangChain" className='invert brightness-100 background-none h-10 w-10'/>
                  <img src="/src/assets/logos/gemini.svg" title="Google Gemini" className='invert brightness-100 background-none h-10 w-10'/>
                  <img src="/src/assets/logos/meta.svg" title="Facebook AI Similarity Search (FAISS)" className='invert brightness-100 background-none h-10 w-10'/>
                </div>
                <hr className='w-[70vw] opacity-20'/>
                <br/>
                <h2 className='text-3xl'>Web and Software Development</h2>
                <br/>
                <h3>Frontend Technologies</h3>
                <div className='flex flex-wrap gap-x-10 justify-center items-center  pt-2 gap-y-2  *:hover:scale-110 *:transition *:duration-100 *:flex *:flex-col *:items-center'>
                  <img src="/src/assets/logos/html5.svg" title="HTML" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/css.svg" title="CSS" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/javascript.svg" title="JavaScript" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/typescript.svg" title="TypeScript" className='brightness-0 invert background-none h-10 w-10'/>
                </div>
                <br/>
                <h3>Backend and Database Technologies</h3>
                <div className='flex flex-wrap gap-x-10 justify-center items-center  pt-2 gap-y-2  *:hover:scale-110 *:transition *:duration-100'>
                  <img src="/src/assets/logos/express.svg" title="express.js" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/nodedotjs.svg" title="node.js" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/mongodb.svg" title="MongoDB" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/mysql.svg" title="mySQL" className='brightness-0 invert background-none h-10 w-10'/>
                </div>
                <br/>
                <h3>Frameworks and Libraries</h3>
                <div className='flex flex-wrap gap-x-10 justify-center items-center  pt-2 gap-y-2 *:hover:scale-110 *:transition *:duration-100 '>
                  <img src="/src/assets/logos/react.svg" title="React" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/nextdotjs.svg" title="Next.js" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/fastapi.svg" title="FastAPI" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/tailwindcss.svg" title="Tailwind CSS"  className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/bootstrap.svg" title="Bootstrap" className='brightness-0 invert background-none h-10 w-10'/>
                </div>
                <br/>
                <hr className='w-[70vw] opacity-20'/>
                <br/>
                <h2 className='text-3xl'>Developer Tools</h2>
                <div className='flex flex-wrap gap-x-10 justify-center items-center  pt-2 gap-y-2 *:hover:scale-110 *:transition *:duration-100 '>
                  <img src="/src/assets/logos/git.svg" title="Git" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/github.svg" title="GitHub"className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/vscode.svg" title="Visual Studio Code" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/vite.svg" title="Vite" className='brightness-0 invert background-none h-10 w-10'/>
                  <img src="/src/assets/logos/figma.svg" title="Figma" className='brightness-0 invert background-none h-10 w-10'/>
                </div>
              </div>
            <BorderBeam reverse size={140} duration={1000} colorFrom='white' colorTo="white" transition={{type: "spring",stiffness: 60, damping: 100}}/>                  
            </div>
          </section>
        </BlurFade>

        {/* Educational Qualifications */}
        <section className='backdrop-blur-sm mt-10! h-100 '>
          <h1 className="p-5 text-5xl font-bold text-center  text-transparent bg-linear-to-b from-white to-black bg-clip-text mt-[10vh] rounded-full backdrop-blur hover:text-shadow-sm hover:text-shadow-white/10 duration-450 hover:scale-101">Educational Qualifications</h1>
          <div className="p-10 flex grow items-center gap-x-10 justify-center  font-bold *:backdrop-blur-sm *:relative *:overflow-hidden *:hover:bg-black/20 *:text-2xl *:rounded-4xl *:w-[75vw] *:h-[25vh] *:flex *:flex-row *:items-center *:justify-center *:gap-x-10  *:hover:scale-110 *:hover:shadow-xl *:hover:shadow-white/10 *:outline *:outline-white/20">
            <div className='transition-all *:gap-x-0! duration-300 ease-in-out *:hover:gap-x-3!'>
              <div className=" columns-2 mx-10 duration-200 hover:gap-x-2">
                <p>B.Tech CSE (AI/ML)<br/>VIT Chennai</p>
                <p className='text-right'>8.80 CGPA<br/>2024-2028</p>
              </div>
              <BorderBeam size={100} duration={1000} colorFrom='white' colorTo="white" transition={{type: "spring",stiffness: 60, damping: 100}}/>
            </div>
            <div className='hover:text-3xl transition-all  duration-300 ease-in-out'>
              <p>Class 12<br/>DAV Chennai</p>
              <p className="text-right">93.6%<br/>2024</p>
              <BorderBeam size={100} duration={1000} colorFrom='white' colorTo="white" transition={{type: "spring",stiffness: 60, damping: 100}}/>
            </div>
            <div className='relative overflow-hidden outline outline-white/20 hover:text-3xl transition-all duration-300 ease-in-out'>
              <p>Class 10<br/>DAV Chennai</p>
              <p className='text-right'>95.6%<br/>2022</p>
              <BorderBeam size={100} duration={1000} colorFrom='white' colorTo="white" transition={{type: "spring",stiffness: 60, damping: 100}}/>
            </div>
          </div>
        </section>

        <section className=' mt-10! h-max p-10  '>
          <h1 className="p-5 text-5xl font-bold text-center  text-transparent bg-linear-to-b from-white to-black bg-clip-text mt-[10vh] rounded-full hover:text-shadow-sm hover:text-shadow-white/10 duration-450 hover:scale-101 animate-pulse ">Contact Me!</h1>
          <div className="*:p-2 flex flex-col items-center align-middle gap-y-10 justify-center  font-bold *:backdrop-blur-sm *:relative *:overflow-hidden *:hover:bg-black/20 *:text-2xl *:rounded-xl *:flex *:flex-row *:items-center *:justify-center *:gap-x-10  *:hover:scale-110 *:hover:shadow-xl *:hover:shadow-white/10 *:outline *:outline-white/20 *:duration-500">
            <div>
              <Mail className="w-10! h-10!"/><a href="">piyushvarman</a>
            </div>
            <div>
              <img src={LinkedIn} className='w-10 h-10'/>Piyush Varman's LinkedIn
            </div>
          </div>
        </section>

        <footer className="py-10 text-center">
          Built by <a href="https://www.github.com/piyushvarman" className="underline">PCV</a>. The source code is available on <a href="https://github.com/" className='underline'>GitHub</a>
        </footer>
      </main>
    </>
  )
}

export default App
