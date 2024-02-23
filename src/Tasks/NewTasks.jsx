import { useState } from "react"

export default function NewTasks({onAddTask}){
    const [enterTask, setenterTask]=useState('');

    function handleChange(event){
        setenterTask(event.target.value);
    }

    function handleSubmit(){
        onAddTask(enterTask);
        setenterTask('');
    }

    return <>
        <div className="flex items-center gap-4 ">
        <input type='text' className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enterTask}/>
        <button onClick={handleSubmit} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
       
    </>
}