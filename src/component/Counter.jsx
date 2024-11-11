/* eslint-disable react/prop-types */

const Counter = ({onIncrement, onDecrement, count}) => {
  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const decrementCount = () => {
  //   setCount((prev) => prev - 1);
  // };

  return (
    <div className="bg-white p-5 space-y-5 rounded shadow-md">
      <p className="text-lg font-semibold">
        Count: <span className="font-lg font-serif">{count}</span>
      </p>
      <div className="flex justify-center gap-8">
        <button
          onClick={onIncrement}
          className="bg-blue-600 hover:scale-105 font-semibold active:bg-blue-500 px-4 py-1 rounded-sm text-white"
        >
          Increment
        </button>
        <button
          onClick={onDecrement}
          className="bg-red-600 hover:scale-105 font-semibold active:bg-red-500 px-4 py-1 rounded-sm text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
