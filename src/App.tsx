import { useState } from "react";
import Star from "/icon-star.svg";
import Illustration from "/illustration.svg";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { motion } from "framer-motion";

function App() {
	const [isSubmited, setIsSubmited] = useState(false);
	const [rating, setRating] = useState("5");
	return (
		<div className="bg-blue-very_dark h-screen flex items-center">
			{isSubmited ? (
				<motion.section
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{
						x: window.innerHeight,
						opacity: 0,
						scale: 0,
						transition: { duration: 1 },
					}}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 100,
					}}
					className="bg-blue-dark flex flex-col gap-8 p-7 rounded-3xl w-fit m-auto items-center text-center"
				>
					<div>
						<img src={Illustration} alt="" />
					</div>
					<span className="text-orange bg-blue-dark contrast-75 rounded-3xl p-2 px-4 items-center">
						You selected {rating} out of 5
					</span>
					<h1>Thank you!</h1>
					<p>
						We appreciate you taking the time to give a rating. If
						you ever need more support, don't hesitate to get in
						touch!
					</p>
					<div className="text-center pt-4">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a
							href="https://github.com/guilhermefigueira"
							target="_blank"
							className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
						>
							Guilherme Figueira
						</a>
						.
					</div>
				</motion.section>
			) : (
				<motion.main
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{
						x: window.innerHeight,
						opacity: 0,
						scale: 0,
						transition: { duration: 1 },
					}}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 50,
					}}
					className="bg-blue-dark flex flex-col gap-5 p-7 rounded-3xl w-fit m-auto "
				>
					<div className="rounded-full bg-blue-dark contrast-75 w-fit p-4">
						<img
							src={Star}
							alt="Yellow Star"
							className="contrast-100"
						/>
					</div>
					<h1>How did we do?</h1>
					<p>
						Please let us know how we did with your support request.
						All feedback is appreciated to help us improve our
						offering!
					</p>
					<ToggleGroup.Root
						className="ToggleGroup"
						type="single"
						value={rating}
						onValueChange={(value) => {
							if (value) setRating(value);
						}}
					>
						<ToggleGroup.Item className="ToggleGroupItem" value="1">
							1
						</ToggleGroup.Item>
						<ToggleGroup.Item className="ToggleGroupItem" value="2">
							2
						</ToggleGroup.Item>
						<ToggleGroup.Item className="ToggleGroupItem" value="3">
							3
						</ToggleGroup.Item>
						<ToggleGroup.Item className="ToggleGroupItem" value="4">
							4
						</ToggleGroup.Item>
						<ToggleGroup.Item className="ToggleGroupItem" value="5">
							5
						</ToggleGroup.Item>
					</ToggleGroup.Root>
					<button
						className="bg-orange text-white w-full mt-4 rounded-full p-3 uppercase hover:bg-white hover:text-orange "
						onClick={() => setIsSubmited(true)}
					>
						Submit
					</button>
					<div className="text-center pt-4">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a
							href="https://github.com/guilhermefigueira"
							target="_blank"
							className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
						>
							Guilherme Figueira
						</a>
						.
					</div>
				</motion.main>
			)}
		</div>
	);
}

export default App;
