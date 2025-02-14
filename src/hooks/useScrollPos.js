import { useLayoutEffect, useState } from "react";

export default function useScrollPos() {
	const [scrollPos, setScrollPos] = useState({
		x: 0,
		y: 0,
	});

	useLayoutEffect(() => {
		const getScrollPos = () =>
			setScrollPos({
				x: window.scrollX || document.documentElement.scrollLeft,
				y:
					window.scrollY ||
					document.documentElement.scrollTop ||
					document.body.scrollTop,
			});

		window.addEventListener("scroll", getScrollPos);

		return () => window.removeEventListener("scroll", getScrollPos);
	}, []);

	return [scrollPos.x, scrollPos.y];
}

// use this in another component:

// import { useScrollPos } from "./useScrollPos";

// const App = () => {
//   const scrollPos = useScrollPos();
//   console.log(scrollPos[0], scrollPos[1]);

//   return (
// <div>
//   <p>
//     your scroll position is: <br/>
//     {scrollPos}
//   </p>
// </div>
//   );
// };
// export default App;
