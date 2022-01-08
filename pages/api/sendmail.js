// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SMTPClient } from "emailjs";

export default function handler(req, res) {
	const { email, name } = req.body;
	// console.log(process.env)

	const client = new SMTPClient({
		user: "lakhe.signups@gmail.com",
		password: "grandCanyon2021#",
		host: "smtp.gmail.com",
		ssl: true,
	});

	try {
		client.send({
			text: `name: ${name} , email: ${email}`,
			from: "lakhe.signups@gmail.com",
			to: "lakhe.signups@gmail.com",
			subject: "testing emailjs",
		});
	} catch (e) {
		console.log(e);
		res.status(400).end(JSON.stringify({ message: "Error" }));
		return;
	}

	res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
