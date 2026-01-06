// personalData = {
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
// }
// educationData = {
//     school: "",
//     location: "",
//     degree: "",
//     completedDate: "",
// }
// experienceData = {
//     company: "",
//     title: "",
//     responsibilities: "",
//     startDate: "",
//     endDate: "",
// }

export default function DisplayCV({ personal, education, experience }) {
	return (
		<main>
			<h2>{personal.name}</h2>
		</main>
	);
}
