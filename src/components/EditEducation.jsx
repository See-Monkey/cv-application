// data = {
//     school: "",
//     location: "",
//     degree: "",
//     completedDate: "",
// }

export default function EditEducation({ data, onChange }) {
	function handleInputChange(event, index) {
		const { name, value } = event.target;

		const newData = [...data];
		newData[index] = { ...newData[index], [name]: value };

		onChange(newData);
	}

	return (
		<section className="education">
			<h2>Education</h2>
			{data.map((edu, index) => (
				<div key={edu.id}>
					<label>
						School:{" "}
						<input
							type="text"
							name="school"
							value={edu.school}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</label>
					<label>
						Location:{" "}
						<input
							type="text"
							name="location"
							value={edu.location}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</label>
					<label>
						Degree:{" "}
						<input
							type="text"
							name="degree"
							value={edu.degree}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</label>
					<label>
						Date Completed:{" "}
						<input
							type="text"
							name="completedDate"
							value={edu.completedDate}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</label>
				</div>
			))}
		</section>
	);
}
