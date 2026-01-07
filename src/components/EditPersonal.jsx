// data = {
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
// }

export default function EditPersonal({ data, onChange }) {
	function handleInputChange(event) {
		const { name, value } = event.target;

		onChange({ ...data, [name]: value });
	}

	return (
		<section className="personal">
			<h2>Personal</h2>
			<div className="inputContainer">
				<label>
					Name:{" "}
					<input
						type="text"
						name="name"
						value={data.name}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div className="inputContainer">
				<label>
					Email:{" "}
					<input
						type="text"
						name="email"
						value={data.email}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div className="inputContainer">
				<label>
					Phone:{" "}
					<input
						type="text"
						name="phone"
						value={data.phone}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div className="inputContainer">
				<label>
					Address:{" "}
					<input
						type="text"
						name="address"
						value={data.address}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div className="inputContainer">
				<label>
					City:{" "}
					<input
						type="text"
						name="city"
						value={data.city}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div className="inputContainer">
				<label>
					State:{" "}
					<input
						type="text"
						name="state"
						value={data.state}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div className="inputContainer">
				<label>
					Zip:{" "}
					<input
						type="text"
						name="zip"
						value={data.zip}
						onChange={handleInputChange}
					/>
				</label>
			</div>
		</section>
	);
}
