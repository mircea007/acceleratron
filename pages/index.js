import Particles from 'react-tsparticles'

//import Card from '../components/Card.jsx'
//import RandomPic from '../components/RandomPic.jsx'
import WaveSplit from '../components/WaveSplit.jsx'
import Profile from '../components/Profile.jsx'

import { OrizTimeLine, VertTimeLine, TreeTimeLine } from '../components/TimeLine.jsx'
import { DownloadButton, BoringButton, BigButton, GitHubButton } from '../components/Buttons.jsx'
import { networkParticleConfig, snowParticleConfig, hexagonParticleConfig } from '../components/ParticleConfigs.js'

export default function Home() {
  const extenstionVersion = "0.0.1"
  const websiteVersion = "0.0.1"
  
  const particlesInit = (main) => console.log
  const particlesLoaded = (container) => console.log
    
  const heroSectionConfig = networkParticleConfig
  const downloadSectionConfig = snowParticleConfig
  const roadmapSectionConfig = hexagonParticleConfig

  return (
    <div className="main font-sans scroll-smooth flex flex-col items-center bg-black"> {/* page container */}
    
      {/* hero section */}
      <div className="w-full h-[80vh] flex flex-col relative">
        {/*<div className="absolute inset-0 brightness-50 bg-gradient-to-br from-green-500 to-blue-500" />*/}
        <Particles id="hero-section-particles" className="absolute inset-0" params={heroSectionConfig} init={particlesInit} loaded={particlesLoaded}/>
        <div className="flex justify-center items-center w-full h-[65vh] z-10">
          <div className="max-w-2xl flex flex-col gap-4 p-8">
            <h1 className="w-full text-center pb-8 text-white text-8xl font-bold">Acceleratron</h1>
            <p className="text-white text-lg z-10 text-justify">
              Lorem ipsum veniam nisi dolore culpa in ut sit ullamco nulla mollit eiusmod non ut anim anim magna deserunt dolore laborum ea dolore deserunt quis est sit veniam sint ut sint culpa ut eu ullamco enim sunt ea qui quis.
            </p>
            <div className="mt-4 flex flex-row justify-center gap-4">
              <BigButton className="flex-shrink-0" browser="Chrome" version={extenstionVersion} download="https://chrome.google.com/webstore/category/extensions" github="https://github.com/mircea007/acceleratron" />
              <BoringButton className="flex-shrink-0" link="">Learn More</BoringButton>
            </div>
          </div>
        </div>
        <WaveSplit className="translate-y-px absolute h-[15vh] top-[65vh] w-full" />
      </div>
      
      {/* explaining section */}
      <h2 className="text-6xl w-full px-10 pt-6 pb-4 text-white bg-black">About the YouTube extension</h2>
      <OrizTimeLine className="w-full p-16 bg-black">
        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl text-justify text-white">
            When you watch a youtube video, a "questions" button will appear below your video.
            Then, the video's subtitles will be sent to <a href="https://openai.com/" className="link">GPT3</a>,
            a newral network trained on <a href="https://en.wikipedia.org/wiki/GPT-3#Training_and_capabilities" className="link">the entire internet</a>.
            In response you will recieve 5 multiple-choice questions about the specific video you watched.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540/">
          <div className="text-2xl text-justify text-white">
            After that, you will answer each question in order. After you answer each question you will find out
            if you answer was right. If you get a question wrong the extension will also tell you the correct
            answer.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540/">
          <div className="text-2xl text-justify text-white">
            When the quiz is over you will get your score and a report of your answers.
          </div>
        </div>
      </OrizTimeLine>
      
      {/* roadmap section */}
      <div className="w-full relative">
        <Particles id="roadmap-section-particles" className="absolute inset-0 " params={roadmapSectionConfig} init={particlesInit} loaded={particlesLoaded}/>
        <div className="flex flex-col w-full">
          <WaveSplit className="h-[15vh] w-full -translate-y-px -scale-100" />
          <div className="text-white z-10 m-8">
            <h2 className="text-8xl text-center font-semibold mb-10">Roadmap</h2>
            <TreeTimeLine className="mt-10" tree={[
              (<h3 className="text-5xl">1. The Browser Extension</h3>),
              [
                (<div className="flex flex-col gap-2">
                  <h4 className="text-4xl">Cache questions</h4>
                  <p className="lorem-ipsum text-lg">Aliqua ea ut pariatur nostrud mollit in occaecat proident in voluptate ut in veniam sit mollit aute irure ea voluptate laborum eu commodo deserunt.</p>
                </div>),
                (<div className="flex flex-col gap-2">
                  <h4 className="text-4xl">Add other websites</h4>
                  <p className="lorem-ipsum text-lg">Aliqua ea ut pariatur nostrud mollit in occaecat proident in voluptate ut in veniam sit mollit aute irure ea voluptate laborum eu commodo deserunt.</p>
                </div>),
                (<div className="flex flex-col gap-2">
                  <h4 className="text-4xl">User generated questions</h4>
                  <p className="lorem-ipsum text-lg">Aliqua ea ut pariatur nostrud mollit in occaecat proident in voluptate ut in veniam sit mollit aute irure ea voluptate laborum eu commodo deserunt.</p>
                </div>),
                (<div className="flex flex-col gap-2">
                  <h4 className="text-4xl">Question voting and discussions</h4>
                  <p className="lorem-ipsum text-lg">Aliqua ea ut pariatur nostrud mollit in occaecat proident in voluptate ut in veniam sit mollit aute irure ea voluptate laborum eu commodo deserunt.</p>
                </div>),
              ],
              (<h3 className="text-4xl">2. Educational Platform</h3>),
              [
                (<div className="flex flex-col gap-2">
                  <h4 className="text-4xl">Cache questions</h4>
                  <p className="lorem-ipsum text-lg">Aliqua ea ut pariatur nostrud mollit in occaecat proident in voluptate ut in veniam sit mollit aute irure ea voluptate laborum eu commodo deserunt.</p>
                </div>),
                (<div className="flex flex-col gap-2">
                  <h4 className="text-4xl">Add other websites</h4>
                  <p className="lorem-ipsum text-lg">Aliqua ea ut pariatur nostrud mollit in occaecat proident in voluptate ut in veniam sit mollit aute irure ea voluptate laborum eu commodo deserunt.</p>
                </div>),
                (<div className="flex flex-col gap-2">
                  <h4 className="text-4xl">User generated questions</h4>
                  <p className="lorem-ipsum text-lg">Aliqua ea ut pariatur nostrud mollit in occaecat proident in voluptate ut in veniam sit mollit aute irure ea voluptate laborum eu commodo deserunt.</p>
                </div>),
                (<div className="flex flex-col gap-2">
                  <h4 className="text-4xl">Question voting and discussions</h4>
                  <p className="lorem-ipsum text-lg">Aliqua ea ut pariatur nostrud mollit in occaecat proident in voluptate ut in veniam sit mollit aute irure ea voluptate laborum eu commodo deserunt.</p>
                </div>),
              ],
            ]}/>
          </div>
          <WaveSplit className="h-[15vh] w-full translate-y-px" />
        </div>
      </div>
      
      {/* team section */}
      <div className="py-16 w-full">
        <h2 className="text-6xl w-full px-10 pt-6 pb-4 text-white bg-black">Who are we?</h2>
        <div className="flex flex-row items-center justify-evenly text-white py-8">
          <Profile name="Tiberiu Mușat" role="Founder" img="https://people.epfl.ch/private/common/photos/links/344973.jpg?ts=1640704611">
            <ul className="px-8 list-disc list-inside">
              <li>40<sup>th</sup> place at the International Olympiad of Informatics</li>
              <li>1<sup>st</sup> place at the National Olympiad of Informatics in Romania</li>
              <li>creator of <a href="https://bacplus.ro" target="_blank" className="link">bacplus.ro</a></li>
              <li>passions: reading, phylosophy, digital art</li>
              <li>age: 19 years old</li>
            </ul>
          </Profile>
          <Profile name="Mircea Rebengiuc" role="Co-Founder" reverse={true} img="https://avatars.githubusercontent.com/u/50020158?v=4">
            <ul className="px-8 list-disc list-inside">
              <li>Participated at international contests for Informatics and Physics</li>
              <li>2<sup>nd</sup> place at the National Olympiad of Physics in Romania</li>
              <li>creator of <a href="https://bacplus.ro" target="_blank" className="link">bacplus.ro</a></li>
              <li>passions: tehnology, physics, programming</li>
              <li>age: 14 years old</li>
            </ul>
          </Profile>
        </div>
      </div>

      {/* download section */}
      <div className="w-full h-[80vh] relative flex flex-row justify-center items-center">
        <WaveSplit className="h-[15vh] w-full absolute top-0 z-10 -scale-100" />
        <Particles id="download-section-particles" className="absolute inset-0" params={downloadSectionConfig} init={particlesInit} loaded={particlesLoaded}/>
        <div className="text-white z-10">
          <h2 className="text-8xl text-center font-semibold mb-10">Downloads</h2>
          <div className="flex flex-row gap-16 justify-center relative">
            <div className="">
              <h3 className="text-3xl mb-4">Extensions for all browsers:</h3>
              
              <div className="flex flex-col gap-2">
                <DownloadButton link="">Chromium</DownloadButton>
                <DownloadButton link="">Firefox</DownloadButton>
                <DownloadButton link="">Edge</DownloadButton>
                <DownloadButton link="">Safari</DownloadButton>
              </div>
            </div>
            <div className="">
              <h3 className="text-3xl mb-4">Contribute on GitHub:</h3>
              
              <div className="flex flex-col gap-2">
                <GitHubButton link="" version={extenstionVersion}>Browser Extenstion</GitHubButton>
                <GitHubButton link="" version={websiteVersion}>Web Site</GitHubButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-row w-full bg-black">
        <span className="font-semibold p-2">Acceleratron</span>
        <div className="grow" />
        <span className="font-semibold p-2">v{websiteVersion}</span>
      </div>
    </div>
  )
}
