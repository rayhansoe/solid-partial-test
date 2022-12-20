import { unstable_island } from "solid-start";

const CounterIsland = unstable_island(() => import("./Counter"));

const Counter = () => {
	return (
		<div>
			<p>Counter</p>
			<CounterIsland />
		</div>
	);
};

export default Counter;
