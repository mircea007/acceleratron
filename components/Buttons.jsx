import { ArrowCircleDownIcon, CodeIcon } from '@heroicons/react/solid'

export function BigButton( props ){
  return (
    <div href="https://chrome.google.com/webstore/category/extensions" className={"max-w-max max-h-max relative group " + props.className} >
      <div className="absolute transition-all duration-1000 group-hover:duration-200 opacity-75 group-hover:opacity-100 inset-0 blur-md brightness-105 group-hover:brightness-125 animate-tilt bg-gradient-to-br from-green-500 to-blue-500" />
      <button className="relative overflow-hidden z-10 text-white rounded-xl flex flex-row items-center">
        <a target={props.store.startsWith("http")     ? "_blank" : "_self"} href={props.store}     className="p-4 transition bg-blue-600 hover:bg-blue-500 hover:scale-105">Download for {props.browser}</a>
        <a target={props.github.startsWith("http")    ? "_blank" : "_self"} href={props.github}    className="p-4 transition flex flex-row gap-4 bg-gray-800 hover:bg-black hover:scale-105 font-mono">v{props.version}<img className="h-6" src="/github.svg" alt=""/></a>
        <a target={props.downloads.startsWith("http") ? "_blank" : "_self"} href={props.downloads} className="p-4 transition bg-lime-600 hover:bg-lime-500 hover:scale-105"><ArrowCircleDownIcon className="transition h-6"/></a>
      </button>
    </div>
  );
}

export function BoringButton( props ){
  return (
    <a className={"bg-gray-500 transition hover:bg-gray-600 p-4 rounded-xl overflow-hidden text-white flex flex-row gap-4 max-w-max " + props.className} href={props.link} target={props.link.startsWith("http") ? "_blank" : "_self"}>
      {props.children}
      <ArrowCircleDownIcon className="h-6"/>
    </a>
  )
}

export function DownloadButton( props ){
  return (
    <a className={"group bg-blue-600 transition hover:bg-blue-700 p-4 rounded-xl overflow-hidden text-white flex flex-row gap-4 max-w-max " + props.className} href={props.link} target={props.link.startsWith("http") ? "_blank" : "_self"}>
      {props.children}
      <ArrowCircleDownIcon className="transition group-hover:-rotate-90 h-6"/>
    </a>
  )
}

export function GitHubButton( props ){
  return (
    <a className={"group bg-gray-800 transition hover:bg-black rounded-xl overflow-hidden text-white flex flex-row max-w-max " + props.className} href={props.link} target={props.link.startsWith("http") ? "_blank" : "_self"}>
      <span className="p-4">{props.children}</span>
      <span className="p-4 font-mono bg-gray-900 group-hover:bg-black">v{props.version}</span>
      <img className="h-6 m-4" src="/github.svg" alt=""/>
    </a>
  )
}
