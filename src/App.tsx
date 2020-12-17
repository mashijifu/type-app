import React,{useState} from 'react'
import Button from './Button'

function App() {
    const [color, setColor]=useState("red")

    return (
        <div className="App">
        <Button text="send" color="blue" setColor={color} />
        </div>
    )
}

export default App;
