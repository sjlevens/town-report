// JavaScript source code

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
        this.age = new Date().getFullYear() - this.buildYear;

    }
}

class Park extends TownElement {
    constructor(name, buildYear, area, numberOfTrees) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area; //m2
        this.density = this.numberOfTrees / this.area;
    }

    classifyPark() {
        console.log(`${this.name} was built in ${this.buildYear} and is ${this.age} years old. It is a ${this.area} m^2 park with a tree density of ${this.density} trees/m^2.`);
    }

}
class Street extends TownElement {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const streetSizes = new Map()
        streetSizes.set(1, 'tiny');
        streetSizes.set(2, 'small');
        streetSizes.set(3, 'normal');
        streetSizes.set(4, 'large');
        streetSizes.set(5, 'huge');
        console.log(`${this.name} was built in ${this.buildYear} and is ${this.age} years old. It is a ${streetSizes.get(this.size)} street that is ${this.length} metres long.`);
    }

}

function calcAverage(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    return [sum, sum / arr.length];
}

const townStreets = [
    new Street('Cullen Close', 2010, 8, 1),
    new Street('Scotsman Street', 2009, 100, 3),
    new Street('The Crescent', 1940, 2000, 5),
    new Street('Glebe Point Road', 1830, 3000, 4)
]


const townParks = [
    new Park('Jubilee Park', 1985, 1000, 500),
    new Park('Australia Park', 1940, 4000, 1200),
    new Park('Sydney Park', 1910, 2500, 1000),
    new Park('Memorial Rest', 2000, 200, 22)
    ]


function streetReport(streets) {
    const lengths = calcAverage(streets.map(el => el.length)); // [sum, avg]
    console.log(`\n------------Street Report-------------`)
    streets.forEach((value) => value.classifyStreet());
    console.log(`\nOur ${streets.length} streets have an average length of ${lengths[1]} m, and a combined length of ${lengths[0]} m`);
    

}

function parkReport(parks) {
    const ages = calcAverage(parks.map(el => el.age)); // [sum, avg]
    console.log(`\n------------Park Report-------------`)
    parks.forEach((value) => value.classifyPark());
    console.log(`\nOur ${parks.length} parks have an average age of ${ages[1]}, and a combined age of ${ages[0]}`);
}

streetReport(townStreets);

parkReport(townParks);

