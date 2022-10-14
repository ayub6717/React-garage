/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Clock from './Clock';

export default function ClockList({ quantities = [] }) {
    return (
        <>
            <div>
                {quantities.map((key) => (
                    <Clock key={key} />
                ))}
            </div>
        </>
    );
}
