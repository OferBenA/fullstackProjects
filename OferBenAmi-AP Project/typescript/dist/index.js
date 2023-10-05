// import { apDetailsEntry, formExtention } from "./classes/classesAndInterfaces.js";
// import { pushRow } from "./functions/pushRow.js";
var apDetailsEntry = /** @class */ (function () {
    function apDetailsEntry(vendorName, modelName, hostName, macAddr, ipAddr, Version) {
        this.vendorName = vendorName;
        this.modelName = modelName;
        this.hostName = hostName;
        this.macAddr = macAddr;
        this.ipAddr = ipAddr;
        this.Version = Version;
    }
    return apDetailsEntry;
}());
var jsonCounter = 0;
function submitForm(event) {
    event.preventDefault();
    var elements = event.target.elements;
    var newEntry = {
        vendorName: elements.vendorName.value,
        modelName: elements.modelName.value,
        hostName: elements.hostName.value,
        macAddr: elements.macAddr.value,
        ipAddr: elements.ipAddr.value,
        Version: elements.Version.value
    };
    localStorage.setItem("itemNum" + jsonCounter++, JSON.stringify(newEntry));
    console.log(newEntry);
    pushRow(newEntry);
}
//view
function pushRow(submittedApDetails) {
    var apTable = document.querySelector(".apTable");
    var newRow = document.createElement("tr");
    var vendorNametd = document.createElement("td");
    var modelNametd = document.createElement("td");
    var hostNametd = document.createElement("td");
    var macAddrtd = document.createElement("td");
    var ipAddrtd = document.createElement("td");
    var Versiontd = document.createElement("td");
    var deletetd = document.createElement("td");
    var deleteCheckBox = document.createElement("input");
    deleteCheckBox.setAttribute("type", "checkBox");
    deletetd.appendChild(deleteCheckBox);
    vendorNametd.textContent = submittedApDetails.vendorName;
    modelNametd.textContent = submittedApDetails.modelName;
    hostNametd.textContent = submittedApDetails.hostName;
    macAddrtd.textContent = submittedApDetails.macAddr;
    ipAddrtd.textContent = submittedApDetails.ipAddr;
    Versiontd.textContent = submittedApDetails.Version;
    newRow.appendChild(vendorNametd);
    newRow.appendChild(modelNametd);
    newRow.appendChild(hostNametd);
    newRow.appendChild(macAddrtd);
    newRow.appendChild(ipAddrtd);
    newRow.appendChild(Versiontd);
    newRow.appendChild(deletetd);
    apTable === null || apTable === void 0 ? void 0 : apTable.appendChild(newRow);
}
