import { useState } from "react";
import { json } from "stream/consumers";

const UseStateComp = () => {
  const [arr, setArr] = useState<number[]>([]);

  return (
    <div>
      <div className="my-16">
        <h1 className="text-5xl">UseState</h1>
        <h2 className="text-3xl text-gray-800 mt-5 tracking-widest">{JSON.stringify(arr)}</h2>
        <button className="bg-gray-500 text-white px-3 py-2 mt-8 tracking-wider rounded-md active:bg-gray-900" onClick={() => setArr([...arr, arr.length + 1])}>
          Add to Arr
        </button>
      </div>
    </div>
  );
};

export default UseStateComp;
