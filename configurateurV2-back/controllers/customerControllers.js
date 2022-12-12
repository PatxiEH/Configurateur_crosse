import CustomerModel from "../models/customerModel.js"

export const getAll = (req, res) => {
	res.send("test réussi")
}
export const create = async (req,res) => {
	const customer = new CustomerModel(req.body.formData)
	console.log(req.body.formData)

	try {
		await customer.save()
		res.status(200).send("la fiche a été enregistrée")

	}
	catch (err) {
		res.status(500).send(err)
	}
	
}