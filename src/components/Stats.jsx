import Stat from './Stat';

export default function Stats({habits}) {

    const content = Object.entries(habits).map(
        ([key, habit]) =>
            <Stat key={key} name={habit.name} exp={habit.exp}/>
    );

    return (
        <div className="stats">
            {content}
        </div>
    );
}
