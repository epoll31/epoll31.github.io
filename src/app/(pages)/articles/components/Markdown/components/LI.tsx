
export default function LI(props: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) {
    return (<li className='text-base font-normal font-serif ml-4'>{props.children}</li>)
}