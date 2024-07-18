export default function DoneButton({isDisabled, onDone}) {
    return (
        <button disabled={isDisabled} onClick={onDone}>Done</button>
    );
}
