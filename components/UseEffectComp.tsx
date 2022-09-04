import {useState, useEffect} from 'react'

const UseEffectComp = () => {
    const [val, setVal] = useState(1)

    useEffect(() => {
        const timer = window.setInterval(() => {
          setVal((v)=> v + 1)
        }, 1000);

        return () => window.clearInterval(timer);
    }, [])

  return (
    <div className="my-16">
        <h1 className="text-5xl">UseEffect</h1>
        <h2 className="text-3xl text-gray-800 mt-5 tracking-widest">{val}</h2>
    </div>
  )
}

export default UseEffectComp