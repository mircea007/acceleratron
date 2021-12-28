import Particles from 'react-tsparticles'
import Card from '../components/Card.jsx'
import RandomPic from '../components/RandomPic.jsx'
import TimeLine from '../components/TimeLine.jsx'
import WaveSplit from '../components/WaveSplit.jsx'
import Profile from '../components/Profile.jsx'
import { DownloadButton, BoringButton, BigButton, GitHubButton } from '../components/Buttons.jsx'

export default function Home() {
  const extenstionVersion = "0.0.1"
  const websiteVersion = "0.0.1"
  
  const particlesInit = (main) => console.log
  const particlesLoaded = (container) => console.log
  
  const bgcol = "#111"
  const fgcol_hero = "#999"
  const fgcol_download = "#00f0dd"
  
  const heroSectionConfig = {
    "background": {
      "color": { "value": bgcol },
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    },
    "fullScreen": {
      "enable": false,
      "zIndex": -1
    },
    "particles": {
      "links": {
        "distance": 150,
        "enable": true,
        "color": { "value": fgcol_hero }
      },
      "move": {
        "enable": true
      },
      "size": {
        "value": 1
      },
      "color": { "value": fgcol_hero }
    }
  }
  
  const downloadSectionConfig = {
    "background": {
      "color": { "value": bgcol },
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    },
    "fullScreen": {
      "enable": false,
      "zIndex": -1
    },
    "particles": {
      "color": { "value": fgcol_download },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "direction": "top",
        "enable": true,
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        }
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 400
      },
      "opacity": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 0.1,
          "max": 1
        },
        "animation": {
          "enable": true,
          "speed": 1,
          "minimumValue": 0.1
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 4
        },
        "animation": {
          "speed": 40,
          "minimumValue": 0.1
        }
      }
    }
  }

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
              <span className="opacity-60"> Youtube is one of the best platforms for educational content but unfortunately it was not designed for this. </span>
              This is why we have decided to make this simple browser extension to help you actually remember
              what you just saw, and not just forget about it five minutes later.
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
      <TimeLine className="w-full p-16 bg-black">
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
      </TimeLine>
      
      {/* roadmap section */}
      <div className="w-full h-screen relative flex flex-row justify-center items-center bg-gray-600">
        <WaveSplit className="h-[15vh] w-full absolute top-0 z-10 -scale-100" />
        <div className="text-white z-10">
          <h2 className="text-8xl text-center font-semibold mb-10">Roadmap</h2>
        </div>
        <WaveSplit className="h-[15vh] w-full absolute bottom-0 z-10" />
      </div>
      
      {/* team section */}
      <div className="py-16 w-full">
        <h2 className="text-6xl w-full px-10 pt-6 pb-4 text-white bg-black">Who are we?</h2>
        <div className="flex flex-row items-center justify-evenly text-white py-8">
          <Profile name="Tiberiu Mușat" role="Founder" img="https://people.epfl.ch/private/common/photos/links/344973.jpg?ts=1640704611">
            <ul className="px-8 list-disc list-inside">
              <li>abcdefoausdkajbsda</li>
              <li>abcdefoausdkajbsda</li>
              <li>abcdefoausdkajbsda</li>
              <li>abcdefoausdkajbsda</li>
            </ul>
          </Profile>
          <Profile name="Mircea Rebengiuc" role="Co-Founder" reverse={true} img="https://avatars.githubusercontent.com/u/50020158?v=4">
            <ul className="px-8 list-disc list-inside">
              <li>abcdefoausdkajbsda</li>
              <li>abcdefoausdkajbsda</li>
              <li>abcdefoausdkajbsda</li>
              <li>abcdefoausdkajbsda</li>
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
