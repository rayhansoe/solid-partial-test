"use client";

import { createSignal } from "solid-js";
import { Hydration } from "solid-js/web";
import { unstable_clientOnly, unstable_island } from "solid-start";
// import CounterNoHydration from "./CounterNoHydration";
const CounterIsland = unstable_island(() => import("./CounterNoHydration"));
const CounterNoHydration = unstable_clientOnly(() => import("./CounterNoHydration"));
export default function Counter() {
	return (
		<div>
			<h1>dasdas</h1>
			<CounterNoHydration />
			{/* <CounterIsland /> */}
		</div>
	);
}
