import { useEffect, useState } from "react";
import { List } from "./List";
import { Logo } from "./Logo";

const dataMock = [...new Array(1000).keys()].map((n) => ({
  id: n + 1,
  title: `Item ${n + 1}`,
}));

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(dataMock);

  useEffect(() => {
    if (!(count % 10)) {
      console.log("called");

      setData((prevState) => {
        const shallowCopy = [...prevState];
        shallowCopy.reverse();
        return shallowCopy;
      });
    }
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Logo />
      <List data={data} />
    </div>
  );
}

export default App;
