import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">React Counter</h1>
        <div className="text-6xl font-semibold text-blue-600">{count}</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-2xl"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-2xl"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded-2xl"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
