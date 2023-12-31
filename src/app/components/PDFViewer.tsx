import Card from "./Card";


export default function PDFViewer(props: {src: string, name: string}) {
  
  return (
    <Card className="flex-grow flex max-w-prose">
      <object data={props.src} type="application/pdf" width="100%" className="aspect-resume w-full flex-grow flex items-center text-center">
        <p className="w-full">Your web browser doesn't support PDFs. <br/>Please <a className=" underline" href={props.src}>click here to download {props.name == undefined ? "the file" : props.name}</a>.</p>
      </object>
    </Card>
  );
}