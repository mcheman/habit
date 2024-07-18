import LevelIndicator from "./LevelIndicator.jsx";

export default function Stat({name, exp}) {

    // todo extract calculation logic into separate non-react file
    const level = Math.floor(Math.log(exp));

    return (
        <div>
            {name}:
            <LevelIndicator level={level}/>
        </div>
    );
}