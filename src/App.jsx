import { useState } from "react";

import Header from "./components/Header";
import EditPersonal from "./components/EditPersonal";
import EditEducation from "./components/EditEducation";
import EditExperience from "./components/EditExperience";
import DisplayCV from "./components/DisplayCV";

export default function App() {
	const [editMode, toggleEditMode] = useState(true);

	const [personalData, setPersonalData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		state: "",
		zip: "",
	});

	const [educationData, setEducationData] = useState([
		{
			id: crypto.randomUUID(),
			school: "",
			location: "",
			degree: "",
			completedDate: "",
		},
	]);

	const [experienceData, setExperienceData] = useState([
		{
			id: crypto.randomUUID(),
			company: "",
			title: "",
			responsibilities: "",
			startDate: "",
			endDate: "",
		},
	]);

	return (
		<>
			<Header />
			{editMode === true && (
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
					<button type="button" onClick={() => toggleEditMode(false)}>
						Submit
					</button>
				</form>
			)}

			{editMode === false && (
				<main>
					<DisplayCV
						personal={personalData}
						education={educationData}
						experience={experienceData}
					/>
					<button onClick={() => toggleEditMode(true)}>Edit</button>
				</main>
			)}
		</>
	);
}
