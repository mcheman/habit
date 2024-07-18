import { useState} from "react";

export default function NewHabit({setHabits}){
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
  }

  return (
    <div>
      {/*form that looks like the habit component*/}
      <span>New Habit</span>
        <label htmlFor="name">Name:
          <input type="text" name="name" placeholder="name" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="description">Description:
          <input type="text" name="description" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <label htmlFor="daily">Times Per Day:
          <input type="number" name="daily" placeholder="1" min="1" onChange={(e) => setDaily(Number(e.target.value))}/>
        </label>
        <button onClick={add}>Add Habit</button>
    </div>
  )
}

