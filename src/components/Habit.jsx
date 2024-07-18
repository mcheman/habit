import DoneButton from "./DoneButton.jsx";
import ExpBar from "./ExpBar.jsx";

export default function Habit({name, description, isDisabled, daily, completed, exp, streak}) {

    // todo extract calculation logic into separate non-react file
    const level = Math.floor(Math.log(exp));
    const fizzleIntensity = Math.min(streak, 10);

    const nextLevelRatio = (exp - Math.exp(level)) / Math.exp(level + 1);

    function handleDone() {
    }

    return (
        <div className="habits__habit">
            <span>{name}</span>
            {/* description should be hidden by default but toggled to see */}
            {/*<span>{description}</span>*/}
            <span>Completed today: {completed} / {daily}</span>
            <span>Streak: {streak}</span>
            <ExpBar nextLevelRatio={nextLevelRatio} fizzleIntensity={fizzleIntensity}/>
            <DoneButton disabled={isDisabled} onDone={handleDone}/>
        </div>
    );
}
