import axios from 'axios'


const postCustomerForm = (formData) => {
	console.log(formData)
	const data = JSON.stringify(formData)

	return axios({
		method: 'post',
		url: 'http://localhost:3000/customers/new',
		data: {
			formData
		}
	  });
}

export default postCustomerForm ;