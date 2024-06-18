type GreetProps = {
    name:string
}
export const Greet = (props: GreetProps) => { 
    const { name } = props;
    return (
        <div><h2>Welcome {name}! You have 10k messages</h2></div>
    )
}
