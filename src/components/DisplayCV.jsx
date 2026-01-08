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

import "../styles/displayCV.css";

export default function DisplayCV({ personal, education, experience }) {
	return (
		<div className="pageContainer">
			<div className="pageHeader">
				<p className="displayName">{personal.name}</p>
				<p className="displayEmail">{personal.email}</p>
			</div>
			<div className="contactContainer">
				<div className="addressContainer">
					<h3>Address</h3>
					<p>{personal.address}</p>
					<p>
						{personal.city}, {personal.state} {personal.zip}
					</p>
				</div>
				<div className="phoneContainer">
					<h3>Phone</h3>
					<p>{personal.phone}</p>
				</div>
			</div>
			<div className="educationSection">
				<h3>Education</h3>
				{education.map((edu) => (
					<div key={edu.id} className="educationContainer">
						<div className="schoolContainer">
							<h4>{edu.school}</h4>
							<p>{edu.location}</p>
						</div>
						<p>
							{edu.degree}, completed {edu.completedDate}
						</p>
					</div>
				))}
			</div>
			<div className="experienceSection">
				<h3>Work Experience</h3>
				{experience.map((exp) => (
					<div key={exp.id} className="experienceContainer">
						<div className="jobContainer">
							<div className="columnContainer">
								<h4>{exp.company}</h4>
								<p className="jobTitle">{exp.title}</p>
							</div>
							<p className="jobDates">
								{exp.startDate} - {exp.endDate}
							</p>
						</div>
						<p className="displayResp">{exp.responsibilities}</p>
					</div>
				))}
			</div>
		</div>
	);
}
