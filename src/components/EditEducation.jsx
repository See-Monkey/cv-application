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

	function addEducation() {
		const newData = [...data];
		newData.push({
			id: crypto.randomUUID(),
			school: "",
			location: "",
			degree: "",
			completedDate: "",
		});

		onChange(newData);
	}

	function removeEducation() {
		const newData = [...data];
		newData.pop();

		onChange(newData);
	}

	return (
		<section className="education">
			<h2>Education</h2>
			{data.map((edu, index) => (
				<div key={edu.id} className="educationSection">
					<div className="inputContainer">
						<label>
							School:{" "}
							<input
								type="text"
								name="school"
								value={edu.school}
								onChange={(e) => handleInputChange(e, index)}
							/>
						</label>
					</div>
					<div className="inputContainer">
						<label>
							Location:{" "}
							<input
								type="text"
								name="location"
								value={edu.location}
								onChange={(e) => handleInputChange(e, index)}
							/>
						</label>
					</div>
					<div className="inputContainer">
						<label>
							Degree:{" "}
							<input
								type="text"
								name="degree"
								value={edu.degree}
								onChange={(e) => handleInputChange(e, index)}
							/>
						</label>
					</div>
					<div className="inputContainer">
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
				</div>
			))}
			<div className="buttonContainer">
				{data.length > 1 && (
					<button
						id="removeEduBtn"
						type="button"
						onClick={() => removeEducation()}
					>
						-
					</button>
				)}
				<button id="addEduBtn" type="button" onClick={() => addEducation()}>
					+
				</button>
			</div>
		</section>
	);
}
