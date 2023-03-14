import { useState } from "react";

function App() {
	const [isSubmited, setIsSubmited] = useState(false);
	return (
		<div className="bg-blue-very_dark h-screen">
			{isSubmited ? (
				<main className="bg-blue-dark">
					How did we do? Please let us know how we did with your
					support request. All feedback is appreciated to help us
					improve our offering! 1 2 3 4 5 Submit
				</main>
			) : (
				<section className="bg-blue-dark">
					You selected 1 out of 5 Thank you! We appreciate you taking
					the time to give a rating. If you ever need more support,
					don't hesitate to get in touch!
				</section>
			)}
		</div>
	);
}

export default App;
