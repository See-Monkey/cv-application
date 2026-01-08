// data = {
//     company: "",
//     title: "",
//     responsibilities: "",
//     startDate: "",
//     endDate: "",
// }

export default function EditExperience({ data, onChange }) {
	function handleInputChange(event, index) {
		const { name, value } = event.target;

		const newData = [...data];
		newData[index] = { ...newData[index], [name]: value };

		onChange(newData);
	}

	function addExperience() {
		const newData = [...data];
		newData.push({
			id: crypto.randomUUID(),
			company: "",
			title: "",
			responsibilities: "",
			startDate: "",
			endDate: "",
		});

		onChange(newData);
	}

	function removeExperience() {
		const newData = [...data];
		newData.pop();

		onChange(newData);
	}

	return (
		<section className="experience">
			<h2>Experience</h2>
			{data.map((exp, index) => (
				<div key={exp.id} className="experienceSection">
					<div className="inputContainer">
						<label>
							Company:{" "}
							<input
								type="text"
								name="company"
								value={exp.company}
								onChange={(e) => handleInputChange(e, index)}
							/>
						</label>
					</div>
					<div className="inputContainer">
						<label>
							Title:{" "}
							<input
								type="text"
								name="title"
								value={exp.title}
								onChange={(e) => handleInputChange(e, index)}
							/>
						</label>
					</div>
					<div className="inputContainer">
						<label>
							Responsibilities:{" "}
							<textarea
								name="responsibilities"
								value={exp.responsibilities}
								onInput={(e) => handleInputChange(e, index)}
							/>
						</label>
					</div>
					<div className="inputContainer">
						<label>
							Start Date:{" "}
							<input
								type="text"
								name="startDate"
								value={exp.startDate}
								onChange={(e) => handleInputChange(e, index)}
							/>
						</label>
					</div>
					<div className="inputContainer">
						<label>
							End Date:{" "}
							<input
								type="text"
								name="endDate"
								value={exp.endDate}
								onChange={(e) => handleInputChange(e, index)}
							/>
						</label>
					</div>
				</div>
			))}
			<div className="buttonContainer">
				{data.length > 1 && (
					<button
						id="removeExpBtn"
						type="button"
						onClick={() => removeExperience()}
					>
						-
					</button>
				)}
				<button id="addExpBtn" type="button" onClick={() => addExperience()}>
					+
				</button>
			</div>
		</section>
	);
}
