import { useState} from "react";

export default function NewHabit({setHabits, onClose}){
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [daily, setDaily] = useState(1);

  function add(){

    let habit = {
      "name": name,
      "description": description,
      "daily": daily,
      "exp": 1,
      "completions": []
    }
    setHabits(habit)
    // reset values to clear out inputs
    setName("")
    setDescription("")
    setDaily(1)
    onClose()
  }

  return (
    <div>
        <h4>New Habit</h4>
        <label htmlFor="name">Name:
          <input type="text"  value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="description">Description:
          <input type="text" name="description"  value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <label htmlFor="daily">Times Per Day:
          <input type="number" name="daily" min="1" value={daily} onChange={(e) => setDaily(Number(e.target.value))}/>
        </label>
        <button onClick={add}>Add Habit</button>
    </div>
  )
}

