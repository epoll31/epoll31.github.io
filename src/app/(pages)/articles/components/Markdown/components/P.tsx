
export default function P(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) {
    return (
        <p className='text-base font-normal font-serif mb-4 leading-7'>
            {props.children}
        </p>
    );
}