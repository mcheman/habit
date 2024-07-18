export default function NewHabit(habits){

  function add(formData){
  //   TODO: pass the data up and update the habits object
    const habitName = formData.get("name");
    const habitDescription = formData.get("description");
    const habitDaily = formData.get("daily");

    habits["newHabit"] = {
      "name": habitName,
      "description": habitDescription,
      "daily": habitDaily
    }
  }

  return (
    <div>
      {/*form that looks like the habit component*/}
      <span>New Habit</span>
      <form action={add}>
        <label htmlFor="name">Name:
          <input type="text" name="name" placeholder="name"/>
        </label>
        <label htmlFor="description">Description:
          <input type="text" name="description" placeholder="description"/>
        </label>
        <label htmlFor="daily">Times Per Day:
          <input type="number" name="daily" placeholder="1" min="1"/>
        </label>
        <button type="submit" name="button" value="submit">Add Habit</button>
      </form>
    </div>
  )
}

