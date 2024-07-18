import Habit from './Habit'

export default function Habits({habits}) {
    const isToday = date => {
        const today = new Date()
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
    };

    const content = Object.entries(habits).map(

        ([key, habit]) => {
            // current is in seconds, must convert to milliseconds
            const completed = habit.completions.reduce((acc, current) => acc + (isToday(new Date(current * 1000)) ? 1 : 0), 0);

            return <Habit key={key} name={habit.name} description={habit.description} daily={habit.daily} completed={completed} />
        }
    );

    return (
        <>
            {content}
        </>
    )
}
