
import "./App.css";
import Counter from "./component/counter";
import Stats from "./component/Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Features/Counters/countersSlice";
import Posts from "./component/Posts";

// const initialCounter = [
//   {
//     id: 1,
//     value: 0,
//   },
//   {
//     id: 2,
//     value: 0,
//   },
// ];

function App() {
  // const [counters, setCounters] = useState(initialCounter);
  const counters = useSelector((state) => state.counters)
  const dispatch = useDispatch()

  const totalValue = counters.reduce((sum, currVal)=> sum + currVal.value, 0)

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId))
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId))
  };

  return (
    <div className="w-full h-screen bg-gray-100 text-slate-700">
      <h1 className="max-w-md text-center mx-auto text-black text-4xl font-semibold py-10">
        Simple Counter
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => (
          <Counter key={counter.id} count={counter.value} onIncrement={()=> handleIncrement(counter.id)} onDecrement={()=> handleDecrement(counter.id)} />
        ))}
        <Stats totalCount={totalValue} />
        <Posts/>
      </div>
    </div>
  );
}

export default App;
