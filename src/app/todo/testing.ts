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

enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 15,
    Book = 10
}


function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine

console.log(mediaType)