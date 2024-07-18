import './App.css'


// todo probably will want to store each habit completion as an array of timestamps so history can be retrieved
// can multiple habits contribute to a single stat?
const data = {
    "heroName": "Cheman",
    "stats": {
        "stat-0001": {
            "name": "Hygiene",
            "streak": 10, // fizzle is calculated from streak
            "exp": 23450 // level is calculated based on total exp. Remaining exp until next level is displayed
        },
        "stat-0002": {
            "name": "Intelligence",
            "streak": 2,
            "exp": 54
        }

    },
    "habits": {
        "habit-0001": {
            "name": "Read",
            "description": "Read every day for an hour", // todo how to handle partial completion?
            "daily": 1, // how many times habit should be completed in a day
            "completed": 1, // how many times completed today, reset to 0 at end of day
            "stat": "stat-0001" // link to corresponding stat key. TODO may want stat to keep track of this
        },
        "habit-0002": {
            "name": "Brush Teeth",
            "description": "Brush teeth after every meal",
            "daily": 3, // 3 times daily
            "completed": 2,
            // TODO initial state will be daily only. More complex rules could come later (like read 1000 pages of book in a year?)
            // "available": [ // time periods when habit is available
            //     "daily", // if habit can be completed multiple times, repeat the condition it can be completed under. Completion requirements will either be
            //     // matched to the most specific condition available at each point, or solved for given X completions and the conditions
            //     "daily",
            //     "daily"
            // ],
            "stat": "stat-0002"
        },
        "habit-0003": {
            "name": "Floss Teeth",
            "description": "Floss before bedtime",
            "daily": 1,
            "completed": 0,
            "stat": "stat-0001"
        }
    }
};


function Hero({name}) {
    return (
        <div>{name}</div>
    );
}

function Stats({stats}) {



    const content = Object.entries(stats).map(
        ([key, stat]) =>
            <Stat key={key} name={stat.name} exp={stat.exp} streak={stat.streak}/>
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
            <Stats stats={data.stats}/>
            <Habits habits={data.habits}/>
        </>
    )
}

export default App