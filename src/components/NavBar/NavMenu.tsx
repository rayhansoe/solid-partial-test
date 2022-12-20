import { A, useLocation } from "solid-start";

const NavMenu = () => {
	const location = useLocation();
	return (
		<>
			<li>
				<A
					class={`flex items-center justify-center text-xl transition-transform ${
						location.pathname === "/" ? "" : "text-gray-500"
					} hover:scale-105 `}
					href='/'
				>
					Home
				</A>
			</li>
			<li>
				<A
					class={`flex items-center justify-center text-xl transition-transform ${
						location.pathname === "/store" ? "" : "text-gray-500"
					} hover:scale-105 `}
					href='/store'
				>
					Store
				</A>
			</li>
			<li>
				<A
					class={`flex items-center justify-center text-xl transition-transform ${
						location.pathname === "/about" ? "" : "text-gray-500"
					} hover:scale-105 `}
					href='/about'
				>
					About
				</A>
			</li>
		</>
	);
};

export default NavMenu;
