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

	return (
		<section className="experience">
			<h2>Experience</h2>
			{data.map((exp, index) => (
				<div key={index}>
					<label>
						Company:{" "}
						<input
							type="text"
							name="company"
							value={exp.company}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</label>
					<label>
						Title:{" "}
						<input
							type="text"
							name="title"
							value={exp.title}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</label>
					<label>
						Responsibilities:{" "}
						<input
							type="text"
							name="responsibilities"
							value={exp.responsibilities}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</label>
					<label>
						Start Date:{" "}
						<input
							type="text"
							name="startDate"
							value={exp.startDate}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</label>
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
			))}
		</section>
	);
}
