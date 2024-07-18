import './App.css'


// todo probably will want to store each habit completion as an array of timestamps so history can be retrieved
// can multiple habits contribute to a single stat?
const data = {
    "heroName": "Cheman",
    "habits": {
        "habit-0001": {
            "name": "Read",
            "description": "Read every day for an hour", // todo how to handle partial completion?
            "daily": 1, // how many times habit should be completed in a day
            "exp": 59432, // level is calculated based on total exp. Remaining exp until next level is displayed
            "completions": [ // unix timestamps of completions. Streak is calculated based on these timestamps
                1721308259, 1721306259, 1721108259
            ]
        },
        "habit-0002": {
            "name": "Brush Teeth",
            "description": "Brush teeth after every meal",
            "daily": 3, // 3 times daily
            "exp": 30,
            "completions": [

            ]
        },
        "habit-0003": {
            "name": "Floss Teeth",
            "description": "Floss before bedtime",
            "daily": 1,
            "exp": 65132334,
            "completions": [
                1721308259
            ]
        }
    }
};


function Hero({name}) {
    return (
        <div>{name}</div>
    );
}

function Stats({habits}) {

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

function Stat({name, exp, streak}) {

    // todo extract calculation logic into separate non-react file
    const level = Math.floor(Math.log(exp));
    const fizzleIntensity = Math.min(streak, 10);

    const nextLevelRatio = (exp - Math.exp(level)) / Math.exp(level + 1);

    return (
        <div>
            <LevelIndicator name={name} level={level}/>
            <ExpBar nextLevelRatio={nextLevelRatio}  fizzleIntensity={fizzleIntensity}/>
        </div>
    );
}

function LevelIndicator({name, level}) {
    return (
        <>
            <span>
                {name}
            </span>
            <span>
                {level}
            </span>
        </>
    );
}


function ExpBar({nextLevelRatio, fizzleIntensity}) {


    return (
        <progress className="exp-bar" value={nextLevelRatio} max="1" />
    );
}

function Habits({habits}) {

    const content = Object.entries(habits).map(
        ([key, habit]) =>
        <Habit key={key} name={habit.name} description={habit.description} daily={habit.daily} completed={habit.completed} />
    );

    return (
        <>
            {content}
        </>
    )
}

function Habit({name, description, isDisabled, daily, completed}) {

    function handleDone() {
    }

    return (
        <div>
            <span>{name}</span>
            <span>{description}</span>
            <span>{completed} / {daily}</span>
            <DoneButton disabled={isDisabled} onDone={handleDone}/>
        </div>
    );
}

function DoneButton({isDisabled, onDone}) {
    return (
        <button disabled={isDisabled} onClick={onDone}>Done</button>
    );
}

function App() {



    return (
        <>
            <Hero name={data.heroName}/>
            <Stats habits={data.habits}/>
            <Habits habits={data.habits}/>
        </>
    )
}

export default App