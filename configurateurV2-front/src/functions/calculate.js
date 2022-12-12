import postCustomerForm from "../services/customer"

const penteTalon = {
	
	20: { BCmin: "61", BCmax: "63" },
	19: { BCmin: "60", BCmax: "62" },
	18: { BCmin: "59", BCmax: "61" },
	17: { BCmin: "58", BCmax: "60" },
	16: { BCmin: "57", BCmax: "59" },
	15: { BCmin: "56", BCmax: "58" },
	14: { BCmin: "55", BCmax: "57" },
	13: { BCmin: "54", BCmax: "56" },
	12: { BCmin: "53", BCmax: "55" },
	11: { BCmin: "52", BCmax: "54" },

}

const avantage = {
	
	"50-52": { AvTal: "20", AvBec: "21" },
	"48-49": { AvTal: "18", AvBec: "21" },
	"46-47": { AvTal: "16", AvBec: "19" },
	"44-45": { AvTal: "14", AvBec: "17" },
	"42-43": { AvTal: "12", AvBec: "15" },
	"40-41": { AvTal: "10", AvBec: "13" },
	"38-39": { AvTal: "8", AvBec: "10" },
	"36-37": { AvTal: "8", AvBec: "9" },
	"34-35": { AvTal: "7", AvBec: "9" },
	"32-33": { AvTal: "7", AvBec: "9" },
	"30-31": { AvTal: "6", AvBec: "8" },
	
}

const calculate = (data) =>
{
	let valeursTheoriques = {}
	const { H_epaule_oeil, Lng_bras_index, lrg_poitrine } = data;

	const AHmin = parseInt(H_epaule_oeil) + parseInt(19);
	const AHmax = parseInt(H_epaule_oeil) + parseInt(21);

	valeursTheoriques.longueurFD = parseFloat(Lng_bras_index - 1.8);
	valeursTheoriques.penteBC = penteTalon[H_epaule_oeil]
	valeursTheoriques.penteAH = { AHmin: AHmin, AHmax: AHmax }
	valeursTheoriques.avantageTalon = avantage[lrg_poitrine].AvTal
	valeursTheoriques.avantageBec = avantage[lrg_poitrine].AvBec

	postCustomerForm({...data, valeursTheoriques});
	

	return(valeursTheoriques)
	console.log(valeursTheoriques)
}

export default calculate