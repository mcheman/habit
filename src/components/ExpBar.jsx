export default function ExpBar({nextLevelRatio, fizzleIntensity}) {


    return (
        <progress className="exp-bar" value={nextLevelRatio} max="1" />
    );
}
