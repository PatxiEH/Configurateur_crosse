import React, { useState } from "react";
import postCustomerForm from "../services/customer.js";
import calculate from "../functions/calculate.js";

import priseMesure from "../assets/images/prise_mesures.png";
import crosses from "../assets/images/prise_mesures_crosse.png";

const inputGroup = "flex justify-between items-center";
const inputLabel = "w-6/12";
const inputAndAppend = "flex flex-row w-6/12";
const input = "border w-11/12 p-2";
const append = "border p-2";
const radioGroupContainer = "flex border rounded bg-slate-100 relative";
const radioGroup = " flex ";
const inputRadio = " invisible peer absolute left-0 top-0";
const radio = "hover:bg-slate-300 peer-checked:bg-slate-300 p-2";
const inputFullSize = "border w-12/12 p-2";

const Form = () => {
	const [user, setUser] = useState({});
	const [vt, setVt] = useState();

	const handleChange = ({ currentTarget }) => {
		const { name, value } = currentTarget;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("test");

		const result = await calculate(user);
		setVt(result);
		console.log(vt);
	};

	return (
		<div className="container mx-auto">
			<form
				className="container mx-auto flex flex-row-reverse gap-10 border-b-2 pb-8 mb-2"
				onSubmit={handleSubmit}
			>
				<div className="flex  basis-1/2  flex-col gap-y-4 ">
					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="taille">
							1- Taille:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["taille"]}
								name="taille"
								type="number"
								maxLength="4"
							/>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="Lng_epaule_oeil">
							2- Longueur épaule/index:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["Lng_epaule_oeil"]}
								name="Lng_epaule_oeil"
								type="number"
							/>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="Lng_coude_index">
							3- Longueur coude/index:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["Lng_coude_index"]}
								name="Lng_coude_index"
								type="number"
							/>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="Lng_bras_index">
							4- Longueur bras/index:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["Lng_bras_index"]}
								name="Lng_bras_index"
								type="number"
							/>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="Lng_main">
							5- Longueur main:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["Lng_main"]}
								name="Lng_main"
								type="number"
							/>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="lrg_main">
							6- Largeur main:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["lrg_main"]}
								name="lrg_main"
								type="number"
							/>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="lrg_poitrine">
							7- Largeur poitrine:
						</label>

						<div className={inputAndAppend}>
							<select
								className={input}
								onChange={(e) => handleChange(e)}
								name="lrg_poitrine"
								type="number"
								value={user["lrg_poitrine"]}
							>
								<option value="30-31">30-31</option>
								<option value="32-33">32-33</option>
								<option value="34-35">34-35</option>
								<option value="36-37">36-37</option>
								<option value="38-39">38-39</option>
								<option value="40-41">40-41</option>
								<option value="42-43">42-43</option>
								<option value="44-45">44-45</option>
								<option value="46-47">46-47</option>
								<option value="48-49">48-49</option>
								<option value="50-52">50-52</option>
							</select>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="H_epaule_oeil">
							8- Hauteur épaule/oeil:
						</label>

						<div className={inputAndAppend}>
							<select
								className={input}
								onChange={(e) => handleChange(e)}
								name="H_epaule_oeil"
								type="number"
								value={user["H_epaule_oeil"]}
							>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
							</select>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="carrure">
							9- Carrure:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["carrure"]}
								name="carrure"
								type="number"
							/>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="crosse_epaule">
							10- Crosse/oeil:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["crosse_epaule"]}
								name="crosse_epaule"
								type="number"
							/>

							<div className="">
								<div className={append}>cm</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="poids">
							11- Poids:
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["poids"]}
								name="poids"
								type="number"
							/>

							<div className="">
								<div className={append}>kg</div>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel}>12- Oeil directeur:</label>

						<div className={radioGroupContainer}>
							<div className={radioGroup}>
								<input
									className={inputRadio}
									onChange={(e) => {
										handleChange(e);
										console.log(e);
									}}
									value="gauche"
									id="gauche"
									name="oeil_directeur"
									type="radio"
									checked={user["oeil_directeur"] === "gauche"}
								/>
								<label htmlFor="gauche" className={radio}>
									{" "}
									Gauche{" "}
								</label>
							</div>

							<div className={radioGroup}>
								<input
									className={inputRadio}
									onChange={(e) => handleChange(e)}
									value="droit"
									id="droit"
									name="oeil_directeur"
									type="radio"
									checked={user["oeil_directeur"] === "droit"}
								/>

								<label htmlFor="droit" className={radio}>
									{" "}
									Droit{" "}
								</label>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel}>13- Épaulement:</label>

						<div className={radioGroupContainer}>
							<div className={radioGroup}>
								<input
									className={inputRadio}
									onChange={(e) => {
										handleChange(e);
										console.log(e);
									}}
									value="gauche"
									id="epaulement_gauche"
									name="epaulement"
									type="radio"
									checked={user["epaulement"] === "gauche"}
								/>
								<label htmlFor="epaulement_gauche" className={radio}>
									{" "}
									Gauche{" "}
								</label>
							</div>

							<div className={radioGroup}>
								<input
									className={inputRadio}
									onChange={(e) => handleChange(e)}
									value="droit"
									id="epaulement_droit"
									name="epaulement"
									type="radio"
									checked={user["epaulement"] === "droit"}
								/>

								<label htmlFor="epaulement_droit" className={radio}>
									{" "}
									Droit{" "}
								</label>
							</div>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel}>14- Forme du visage:</label>

						<div className={radioGroupContainer}>
							<div className={radioGroup}>
								<input
									className={inputRadio}
									onChange={(e) => {
										handleChange(e);
										console.log(e);
									}}
									value="mince"
									id="mince"
									name="visage"
									type="radio"
									checked={user["visage"] === "mince"}
								/>
								<label htmlFor="mince" className={radio}>
									{" "}
									Mince{" "}
								</label>
							</div>

							<div className={radioGroup}>
								<input
									className={inputRadio}
									onChange={(e) => handleChange(e)}
									value="moyen"
									id="moyen"
									name="visage"
									type="radio"
									checked={user["visage"] === "moyen"}
								/>

								<label htmlFor="moyen" className={radio}>
									{" "}
									Moyen{" "}
								</label>
							</div>

							<div className={radioGroup}>
								<input
									className={inputRadio}
									onChange={(e) => handleChange(e)}
									value="rond"
									id="rond"
									name="visage"
									type="radio"
									checked={user["visage"] === "rond"}
								/>

								<label htmlFor="rond" className={radio}>
									{" "}
									Rond{" "}
								</label>
							</div>
						</div>
					</div>

					<button className="bg-slate-100 hover:bg-slate-300 border font-bold py-2 px-4 rounded">
						Enregistrer
					</button>
				</div>

				<div className="flex  basis-1/2  flex-col gap-y-4">
					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="date">
							Date :
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["date"]}
								name="date"
								type="date"
							/>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="nom">
							Nom :
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["nom"]}
								name="nom"
								type="text"
							/>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="prenom">
							Prénom :
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["prenom"]}
								name="prenom"
								type="text"
							/>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="telephone">
							Téléphone :
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["telephone"]}
								name="telephone"
								type="text"
							/>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="adresse">
							Adresse :
						</label>

						<div className={inputAndAppend}>
							<textarea
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["adresse"]}
								name="adresse"
							/>
						</div>
					</div>

					<div className={inputGroup}>
						<label className={inputLabel} htmlFor="ville">
							Ville :
						</label>

						<div className={inputAndAppend}>
							<input
								className={input}
								onChange={(e) => handleChange(e)}
								value={user["ville"]}
								name="ville"
								type="text"
							/>
						</div>
					</div>

					<img className="pt-8" src={priseMesure} alt="prise de mesures" />
				</div>
			</form>

			<div className="py-4 border-b-2">
				<img className="w-full" src={crosses} alt="prise mesure crosse" />
			</div>

			<div className="container flex justify-between	gap-8  mx-auto py-8">
				<div className="flex flex-col gap-y-6">
					<h2 className="text-3xl font-bold"> Valeurs théoriques</h2>

					<div className="flex gap-10">
						<div className="flex flex-col gap-y-4">
							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Longueur crosse FD:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										disabled
										value={vt?.longueurFD}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Pente talon BC:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										disabled
										value={vt?.penteBC.BCmin}
										name="taille"
										type="number"
										maxLength="4"
									/>

									<input
										className={input}
										disabled
										value={vt?.penteBC.BCmax}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Pente busc AH:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										disabled
										value={vt?.penteAH.AHmin}
										name="taille"
										type="number"
										maxLength="4"
									/>

									<input
										className={input}
										disabled
										value={vt?.penteAH.AHmin}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>
							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Avantage talon:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										disabled
										value={vt?.avantageTalon}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Avantage bec:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										disabled
										value={vt?.avantageBec}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-y-6">
					<h2 className="text-3xl font-bold"> Valeurs d'origine</h2>

					<div className="flex gap-10">
						<div className="flex flex-col gap-y-4">
							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Longueur crosse FD:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Pente talon BC:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>

									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Pente busc AH:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>

									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>
							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Avantage talon:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Avantage bec:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-y-6">
					<h2 className="text-3xl font-bold"> Valeurs finales</h2>

					<div className="flex gap-10">
						<div className="flex flex-col gap-y-4">
							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Longueur crosse FD:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Pente talon BC:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>

									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Pente busc AH:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>

									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>
							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Avantage talon:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>

							<div className={inputGroup}>
								<label className={inputLabel} htmlFor="taille">
									Avantage bec:
								</label>

								<div className={inputAndAppend}>
									<input
										className={input}
										value={user["taille"]}
										name="taille"
										type="number"
										maxLength="4"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
