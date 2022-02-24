import {SquareValue} from '../App'

interface SquareProps {
    onClick(): void;
    value: SquareValue;
}
  
const Square: React.FC<SquareProps> = props => {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
};

export default Square