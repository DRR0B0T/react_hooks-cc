import React, {useState, useMemo, useEffect} from 'react'

function complexCompute(num) {
    console.log('anything')
    let i = 0
    while(i < 100000000) i++
    return num * 2
}


function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] =useState(false)

    const styles = useMemo(() =>
            ({color: colored ? 'darkblue' : 'orange'})
        ,[colored])



    const computed = useMemo(() => {
        return complexCompute(number)
    },[number])


    useEffect(() => {
        console.log('styled change')
    },[styles])

    return (
        <div>
            <h1 style={styles}>Вычисляемле свойство: {computed}</h1>
            <button  className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button  className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button  className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
        </div>
    );
}

export default App;
