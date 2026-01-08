import { useState } from "react";

import Header from "./components/Header";
import EditPersonal from "./components/EditPersonal";
import EditEducation from "./components/EditEducation";
import EditExperience from "./components/EditExperience";
import DisplayCV from "./components/DisplayCV";

export default function App() {
	const [editMode, toggleEditMode] = useState(true);

	const [personalData, setPersonalData] = useState({
		name: "Spongebob Squarepants",
		email: "sponge@bob.com",
		phone: "714-986-1999",
		address: "124 Conch St",
		city: "Bikini Bottom",
		state: "Ocean",
		zip: "00001",
	});

	const [educationData, setEducationData] = useState([
		{
			id: crypto.randomUUID(),
			school: "Mrs. Puff's Boating School",
			location: "Bikini Bottom",
			degree: "License",
			completedDate: "Aug 1999",
		},
	]);

	const [experienceData, setExperienceData] = useState([
		{
			id: crypto.randomUUID(),
			company: "Krusty Krab",
			title: "Fry Cook / Waiter",
			responsibilities: "-Making the patties good for my customers",
			startDate: "May 1999",
			endDate: "Present",
		},
	]);

	return (
		<>
			<Header />
			{editMode === true && (
				<main>
					<form>
						<EditPersonal
							data={personalData}
							onChange={(data) => setPersonalData(data)}
						/>
						<EditEducation
							data={educationData}
							onChange={(data) => setEducationData(data)}
						/>
						<EditExperience
							data={experienceData}
							onChange={(data) => setExperienceData(data)}
						/>
						<button
							id="submitBtn"
							type="button"
							onClick={() => toggleEditMode(false)}
						>
							Submit
						</button>
					</form>
				</main>
			)}

			{editMode === false && (
				<main>
					<DisplayCV
						personal={personalData}
						education={educationData}
						experience={experienceData}
					/>
					<button id="editBtn" onClick={() => toggleEditMode(true)}>
						Edit
					</button>
				</main>
			)}
		</>
	);
}
