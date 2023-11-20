import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const incCount = () => {
        setCount(c => c + 1)
    }

    const decCount = () => {
        setCount(c => c - 1)
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', }}>
            <div style={{width: '400px', display:'flex', justifyContent:'space-around', alignItems:'center'}}>

                <button onClick={decCount}>DEC</button>
                <h1>Count:{count}</h1>
                <button onClick={incCount}>INC</button>
            </div>
        </div>
    )
}