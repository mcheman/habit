import Stat from './Stat';

export default function Stats({habits}) {

    // todo streak should be calculated based on how many days had their habits fulfilled consecutively, rather than total completions

    const content = Object.entries(habits).map(
        ([key, habit]) =>
            <Stat key={key} name={habit.name} exp={habit.exp} streak={habit.completions.length}/>
    );

    return (
        <div>
            {content}
        </div>
    );
}
