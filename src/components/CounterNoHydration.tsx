import { createSignal } from "solid-js";
import { NoHydration } from "solid-js/web";
export default function CounterNoHydration() {
	const [count, setCount] = createSignal(0);
	const double = () => count() * 2;
	return (
		// <NoHydration>
		<button
			class='w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]'
			onClick={() => setCount(count() + 1)}
		>
			Clicks: {double()}
		</button>
		// </NoHydration>
	);
}
