interface Animal {
    "animal_name": string,
    "hair": number,
    "feathers": number,
    "eggs": number,
    "milk": number,
    "airborne": number,
    "aquatic": number,
    "predator": number,
    "toothed": number,
    "backbone": number,
    "breathes": number,
    "venomous": number,
    "fins": number,
    "legs": number,
    "tail": number,
    "domestic": number,
    "catsize": number,
    "class_type": number
}

import * as animals from './animals.json';

// 1. How many animals have hair?
const animalsWithHairCount = animals.reduce((count: number, animal: Animal) => {
    if(animal.hair === 1) count++;

    return count;
}, 0)

console.log({animalsWithHairCount})

// 2. List the names of the aquatic animals

const aquaticAnimals = animals.filter((animal: Animal) => {
    if(animal.aquatic) return true;
    return false;
}).map((animal) => animal.animal_name).sort()

console.log({aquaticAnimals})

// 3. What is the average number of times the letter "a" appears in the names of aquatic animals?

const aCount = aquaticAnimals.reduce((count: number, animal: string) => {

    // global and not case sensitive
    const regex = /a/gi;

    const matches = animal.match(regex);

    console.log({matches: matches?.length, name: animal})
    count = count + (matches ? matches.length : 0);

    return count;
}, 0);

console.log({aCount, animals: aquaticAnimals.length})
const aAverage = aCount / aquaticAnimals.length;

console.log({aAverage})

// 4. What is the type of the data in animals.json?
// Animal interface added above

// 5. Which of the answers below is not correct and why is it not correct?

// in 2 - turtle is not added as it's flagged as aquatic in the json
