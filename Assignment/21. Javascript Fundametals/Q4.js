const dayRegex = /\b(\d{1,2})\b/;
const monthRegex = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/;;
const yearRegex = /\b(\d{4})\b/;

const date1 = "15 January 2023"
const date2 = "18 March 2028"
const date3 = "25 December 2028"

function checkTheString (string) {
    const date = string.match(dayRegex);
    const month = string.match(monthRegex);
    const year = string.match(yearRegex);

    console.log(`Date: ${date[0]}`);
    console.log(`Month: ${month[0]}`);
    console.log(`Year: ${year[0]}`);
}

checkTheString(date1);
// Date: 15
// Month: January
// Year: 2023
checkTheString(date2);
// Date: 18
// Month: March
// Year: 2028
checkTheString(date3);
// Date: 25
// Month: December
// Year: 2028


