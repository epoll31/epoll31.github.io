
export default function Pre(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
    return (
        <pre className='mb-4'>
            {props.children}
        </pre>
    );
}