// var employees: [number, string][];
// employees = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
// console.log(employees[1],[2])
// var employee: [number, string] = [1, "Steve"];
// console.log(employee[0]); // returns 1
// console.log(employee[1]); // returns "Steve"tsc
// var employee: [number, string] = [1, "Steve"];
// // retrieving value by index and performing an operation 
// employee[1] = employee[1].concat(" Jobs"); 
// console.log(employee); //Output: [1, 'Steve Jobs']
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 5] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 15] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 10] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
var mediaType = getMedia('Forbes'); // returns Magazine
console.log(mediaType);
