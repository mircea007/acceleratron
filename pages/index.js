import Card from '../components/Card.jsx'
import RandomPic from '../components/RandomPic.jsx'
import TimeLine from '../components/TimeLine.jsx'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'

export default function Home() {
  return (
    <div className="main font-sans scroll-smooth flex flex-col items-center bg-white"> {/* page container */}
    
      {/* intro section */}
      <div className="w-full h-[80vh] flex flex-col relative">
        <div className="absolute inset-0 brightness-90 bg-gradient-to-br from-green-500 to-blue-500" />
        <div className="flex justify-center items-center w-full h-[65vh]">
          <div className="max-w-2xl flex flex-col gap-4 p-8">
            <h1 className="w-full text-center pb-8 text-white text-8xl font-bold z-10">YT questions</h1>
            <p className="text-white text-lg z-10 text-justify">
              <span className="opacity-60"> Youtube is one of the best platforms for educational content but unfortunately it was not designed for this. </span>
              This is why we have decided to make this simple browser extension to help you actually remember
              what you just saw, and not just forget about it five minutes later.
            </p>
            <a target="_blank" href="https://chrome.google.com/webstore/category/extensions" className="z-10 shadow-lg shadow-blue-500/75 mx-auto max-w-max p-4 text-white bg-blue-500 rounded-xl hover:bg-blue-600 hover:shadow-blue-600/75 flex flex-row gap-2">
              Download for Chrome <ArrowCircleRightIcon className="h-6"/>
            </a>
          </div>
        </div>
        {/* https://getwaves.io/ */}
        <img className="translate-y-px absolute h-[15vh] top-[65vh] w-full" src="/wave.svg" /> {/* DO NOT TOUCH ANYTHING IN THIS LINE */}
      </div>
      
      {/* explaining section */}
      <h2 className="text-6xl w-full px-10 pt-6 pb-4">How does YT questions work?</h2>
      <TimeLine className="w-full p-16">
        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl text-justify">
            When you watch a youtube video, a "questions" button will appear below your video.
            Then, the video's subtitles will be sent to <a href="https://openai.com/">GPT3</a>,
            a newral network trained on <a href="https://en.wikipedia.org/wiki/GPT-3#Training_and_capabilities">the entire internet</a>.
            In response you will recieve 5 multiple-choice questions about the specific video you watched.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540/">
          <div className="text-2xl text-justify">
            After that, you will answer each question in order. After you answer each question you will find out
            if you answer was right. If you get a question wrong the extension will also tell you the correct
            answer.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540/">
          <div className="text-2xl text-justify">
            When the quiz is over you will get your score and a report of your answers.
          </div>
        </div>
      </TimeLine>

      {/* installing section */}
      <h2 className="text-6xl w-full px-10 pt-6 pb-4 text-right">How do I get started with YT questions?</h2>
      <TimeLine className="w-full p-16">
        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl text-justify">
            Excepteur non adipisicing dolor reprehenderit anim sunt quis quis quis elit esse in dolor do eiusmod
            aliqua dolor duis proident magna ea aliquip exercitation dolore pariatur sit sit dolor et proident
            amet ea cillum incididunt veniam ut.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl text-justify">
            Excepteur non adipisicing dolor reprehenderit anim sunt quis quis quis elit esse in dolor do eiusmod
            aliqua dolor duis proident magna ea aliquip exercitation dolore pariatur sit sit dolor et proident
            amet ea cillum incididunt veniam ut.
          </div>
        </div>

        <div className="flex flex-row justify-between w-full pt-4 gap-4" imgUrl="https://picsum.photos/960/540">
          <div className="text-2xl text-justify">
            Excepteur non adipisicing dolor reprehenderit anim sunt quis quis quis elit esse in dolor do eiusmod
            aliqua dolor duis proident magna ea aliquip exercitation dolore pariatur sit sit dolor et proident
            amet ea cillum incididunt veniam ut.
          </div>
        </div>
      </TimeLine>
    </div>
  )
}
