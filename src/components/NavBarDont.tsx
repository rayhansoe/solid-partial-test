import { A, useLocation } from "solid-start";

export const NavBar = () => {
	const location = useLocation();

	return (
		<div class='flex items-center bg-white justify-center w-full shadow-md'>
			<nav class='container flex  items-center justify-between mx-auto p-4'>
				<ul class='flex items-center gap-6'>
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
				</ul>

				<button class='relative flex items-center justify-center p-3 rounded-full border border-gray-200 drop-shadow-md cart-button hover:drop-shadow-lg'>
					<svg
						class='w-6 h-6 text-blue-500 '
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
					</svg>
					<div class='absolute flex justify-center items-center rounded-3xl px-2 bg-red-600 text-white text-xs font-extrabold min-w-[1.5rem] min-h-[1.5rem] -top-1 -right-1 translate-x-1/3 -translate-y-[8%]'>
						99
						<span class='animate-ping absolute inline-flex h-full w-full rounded-3xl bg-red-600 opacity-25'></span>
					</div>
				</button>
			</nav>
		</div>
	);
};
