import { ArrowCircleRightIcon, CodeIcon } from '@heroicons/react/solid'

export default function BigButton( props ){
  return (
    <div target="_blank" href="https://chrome.google.com/webstore/category/extensions" className="mx-auto max-w-max relative group">
      <div className="absolute transition-all duration-1000 group-hover:duration-200 opacity-75 group-hover:opacity-100 inset-0 blur-md group-hover:brightness-125 animate-tilt bg-gradient-to-br from-green-500 to-blue-500" />
      <button className="relative overflow-hidden z-10 text-white rounded-xl flex flex-row items-center">
        <a href={props.download} className="p-4 transition bg-blue-600 hover:bg-blue-500">Download for {props.browser}</a>
        <a href={props.github}   className="p-4 transition flex flex-row gap-4 bg-gray-800 hover:bg-black font-mono">v{props.version}<CodeIcon className="h-6"/></a>
        <a href={props.download} className="p-4 transition bg-lime-600 hover:bg-lime-500"><ArrowCircleRightIcon className="h-6"/></a>
      </button>
    </div>
  );
}
