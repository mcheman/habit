import Hero from "./Hero.jsx";
import Stats from "./Stats.jsx";
import Habits from "./Habits.jsx";


// todo probably will want to store each habit completion as an array of timestamps so history can be retrieved
// can multiple habits contribute to a single stat?
const data = {
    "heroName": "Cheman",
    "habits": {
        "habit-0001": {
            "name": "Read",
            "description": "Read every day for an hour", // todo how to handle partial completion?
            "daily": 1, // how many times habit should be completed in a day
            "exp": 59432, // level is calculated based on total exp. Remaining exp until next level is displayed
            "completions": [ // unix timestamps of completions. Streak is calculated based on these timestamps
                1721308259, 1721306259, 1721108259
            ]
        },
        "habit-0002": {
            "name": "Brush Teeth",
            "description": "Brush teeth after every meal",
            "daily": 3, // 3 times daily
            "exp": 30,
            "completions": [

            ]
        },
        "habit-0003": {
            "name": "Floss Teeth",
            "description": "Floss before bedtime",
            "daily": 1,
            "exp": 65132334,
            "completions": [
                1721308259
            ]
        }
    }
};

export default function App() {

    return (
        <>
            <Hero name={data.heroName}/>
            <Stats habits={data.habits}/>
            <Habits habits={data.habits}/>
        </>
    )
}
