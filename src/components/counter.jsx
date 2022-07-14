import {useState} from "react";
import  "bootstrap/dist/css/bootstrap.css";

const Counter = (props) => {

    const [value, setValue] = useState(props.value);


    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };

    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";

    const handleIncrement = () => {
        setValue((count) => count + 1);
    };

    const handleDecrement = () => {
        setValue((count) => count - 1);
    };


    return (
        <div>
            <span>{props.name}</span>
            <span className={classes}> {formatValue()} </span>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleIncrement}>
                +
            </button>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleDecrement}>
                -
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
