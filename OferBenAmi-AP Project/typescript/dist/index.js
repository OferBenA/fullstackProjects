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
    var form = event.target;
    var elements = form.elements;
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
}
