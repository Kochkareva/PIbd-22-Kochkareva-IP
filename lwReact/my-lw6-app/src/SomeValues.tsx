interface Props{
    firstValue:number;
    secondValue?: number;
}
function SomeValues(props : Props){
    return(
        <h1>First Value: {props.firstValue} and
        Second value : {props.secondValue}</h1>
    );
}

export default SomeValues;