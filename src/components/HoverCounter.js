/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import withCounter from './HOC/withCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    );
};

export default withCounter(HoverCounter);
