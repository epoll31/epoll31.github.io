
export default function OL(props: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>) {
    return props.className === 'contains-task-list' ? (
        <ol className='text-base font-normal font-serif list-none'>{props.children}</ol>
    ) : (
        <ol className='text-base font-normal font-serif list-decimal list-outside'>{props.children}</ol>
    );
}