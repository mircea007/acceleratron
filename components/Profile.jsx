export default function Profile( props ){
  return (
    <div className={"flex divide-x divide-red-500 divide-dashed " + props.className}>
      {props.reverse ? props.children : null}
      <div className="flex flex-col items-center px-8">
        <div className="h-40 w-40 p-2 rounded-full border-2 border-red-500">
          <img className="rounded-full overflow-hidden w-full h-full object-cover" src={props.img}/>
        </div>
        <div className="border-x h-16 w-0 border-dashed border-red-500" />
        <div className="p-2 flex flex-col gap-[2px] items-center">
          <span className="text-xl">{props.name}</span>
          <span className="text-md opacity-75 italic">{props.role}</span>
        </div>
      </div>
      {props.reverse ? null : props.children}
    </div>
  )
}