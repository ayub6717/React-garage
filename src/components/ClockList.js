/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Clock from './Clock';

export default function ClockList({ quantities = [] }) {
    const names = ['ayub','khan','aayhaay'];
    const ListArray = names.map((names,key) =>{
        return <p key={key}>{names}</p>
    })
    return (
        <div>
            <div>
                {quantities.map((key) => (
                    <Clock key={key} />
                ))}

                <p> {ListArray}</p>
            </div>
        </div>
    );
}