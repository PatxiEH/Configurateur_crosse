import mongoose from "mongoose";
const {Schema} = mongoose;

const CustomerShema = new Schema({
	taille : String,
	Lng_epaule_oeil : String,
	Lng_coude_index : String,
	Lng_bras_index : String,
	Lng_main : String,
	lrg_main : String,
	lrg_poitrine : String,
	H_epaule_oeil : String,
	carrure : String,
	crosse_epaule : String,
	poids : String,
	oeil_directeur : String,
	epaulement : String,
	forme_visage : String,
	date : String,
	nom : String,
	prenom : String,
	telephone : String,
	adresse : String,
	ville: String,
	valeursTheoriques : Object,
})
const Customer = mongoose.model('Customer', CustomerShema);

export default Customer;