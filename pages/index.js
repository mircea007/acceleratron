import Particles from 'react-tsparticles'
import Card from '../components/Card.jsx'
import RandomPic from '../components/RandomPic.jsx'
import TimeLine from '../components/TimeLine.jsx'
import { DownloadButton, SimpleButton } from '../components/Buttons.jsx'

export default function Home() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  const bgcol = "#111";
  const fgcol = "#999";
  
  const particlesConfig = {
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
        "color": { "value": fgcol }
      },
      "move": {
        "enable": true
      },
      "size": {
        "value": 1
      },
      "color": { "value": fgcol }
    }
  }

  return (
    <div className="main font-sans scroll-smooth flex flex-col items-center bg-black"> {/* page container */}
    
      {/* intro section */}
      <div className="w-full h-[80vh] flex flex-col relative">
        {/*<div className="absolute inset-0 brightness-50 bg-gradient-to-br from-green-500 to-blue-500" />*/}
        <Particles className="absolute inset-0" params={ particlesConfig}/>
        <div className="flex justify-center items-center w-full h-[65vh] z-10">
          <div className="max-w-2xl flex flex-col gap-4 p-8">
            <h1 className="w-full text-center pb-8 text-white text-8xl font-bold">Acceleratron</h1>
            <p className="text-white text-lg z-10 text-justify">
              <span className="opacity-60"> Youtube is one of the best platforms for educational content but unfortunately it was not designed for this. </span>
              This is why we have decided to make this simple browser extension to help you actually remember
              what you just saw, and not just forget about it five minutes later.
            </p>
            <div className="mt-4 flex flex-row justify-center gap-4">
              <DownloadButton className="flex-shrink-0" browser="Chrome" version="0.0.1" download="https://chrome.google.com/webstore/category/extensions" github="https://github.com/mircea007/acceleratron" />
              <SimpleButton className="flex-shrink-0" link="">Learn More</SimpleButton>
            </div>
          </div>
        </div>
        {/* https://getwaves.io/ */}
        <img className="translate-y-px absolute h-[15vh] top-[65vh] w-full" src="/wave.svg" /> {/* DO NOT TOUCH ANYTHING IN THIS LINE */}
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

      {/* installing section */}
      <h2 className="text-6xl w-full px-10 pt-6 pb-4 text-white bg-black">Roadmap</h2>
      <TimeLine className="w-full p-16 bg-black">
        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl text-justify text-white">
            Excepteur non adipisicing dolor reprehenderit anim sunt quis quis quis elit esse in dolor do eiusmod
            aliqua dolor duis proident magna ea aliquip exercitation dolore pariatur sit sit dolor et proident
            amet ea cillum incididunt veniam ut.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl text-justify text-white">
            Excepteur non adipisicing dolor reprehenderit anim sunt quis quis quis elit esse in dolor do eiusmod
            aliqua dolor duis proident magna ea aliquip exercitation dolore pariatur sit sit dolor et proident
            amet ea cillum incididunt veniam ut.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl text-justify text-white">
            Excepteur non adipisicing dolor reprehenderit anim sunt quis quis quis elit esse in dolor do eiusmod
            aliqua dolor duis proident magna ea aliquip exercitation dolore pariatur sit sit dolor et proident
            amet ea cillum incididunt veniam ut.
          </div>
        </div>
      </TimeLine>
    </div>
  )
}
