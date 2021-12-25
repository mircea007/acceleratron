export default function Card( props ) {
  let hasTitle    = !!props.title;
  let hasChildren = !!props.children;
  let hasImg      = !!props.imgUrl;
  let hasSubTitle = !!props.subTitle;
  
  if( !hasChildren )
    throw 'Card: content missing';

  if( !hasTitle )
    throw 'Card: title missing';
  
  return (
    <div className="rounded-md shadow-md bg-white flex flex-row overflow-hidden">
      <div class="flex flex-col gap-2 p-4">
        <h1 className="text-center text-2xl font-semibold">{ props.title }</h1>
        <hr className="border-gray-200"/>
        { hasSubTitle ? <h2 className="uppercase text-lg font-bold text-blue-500">{ props.subTitle }</h2> : null}
        { props.children }
      </div>
    </div>
  );
}