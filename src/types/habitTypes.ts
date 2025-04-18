export type Habit = {
    id: string, 
    title: string,
    completed: boolean
}

export type HabitState = {
    list: Habit[]
}