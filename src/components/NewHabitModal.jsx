import { useState} from "react";
import { createPortal} from "react-dom";
import NewHabit from "./NewHabit.jsx";

export default function NewHabitModal({setHabits}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>
        Create New Habit
      </button>
      {showModal && createPortal(
        <NewHabit setHabits={setHabits} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}