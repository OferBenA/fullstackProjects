class apDetailsEntry {
	constructor(
		public vendorName: string,
		public modelName: string,
		public hostName: string,
		public macAddr: string,
		public ipAddr: string,
		public Version: string,
	) { }
}
let jsonCounter:number = 0;
interface formExtention extends HTMLFormControlsCollection{
	vendorName: HTMLInputElement;
	modelName: HTMLInputElement;
	hostName: HTMLInputElement;
	macAddr: HTMLInputElement;
	ipAddr: HTMLInputElement;
	Version: HTMLInputElement;
}


function submitForm(event: SubmitEvent) {
	event.preventDefault();
	const form = event.target as HTMLFormElement;
	const elements = form.elements as formExtention;

	let newEntry: apDetailsEntry = {
		vendorName: elements.vendorName.value,
		modelName: elements.modelName.value,
		hostName: elements.hostName.value,
		macAddr: elements.macAddr.value,
		ipAddr: elements.ipAddr.value,
		Version: elements.Version.value,
	};
	localStorage.setItem(`itemNum${jsonCounter++}`,JSON.stringify(newEntry))
	console.log(newEntry)
}