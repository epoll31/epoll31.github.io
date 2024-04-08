
export default function Pre(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
    return (
        <pre className='mb-1'>
            {props.children}
        </pre>
    );
}