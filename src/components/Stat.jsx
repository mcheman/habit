import ExpBar from "./ExpBar.jsx";
import LevelIndicator from "./LevelIndicator.jsx";

export default function Stat({name, exp, streak}) {

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