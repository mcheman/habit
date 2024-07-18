import DoneButton from "./DoneButton.jsx";

export default function Habit({name, description, isDisabled, daily, completed}) {

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
