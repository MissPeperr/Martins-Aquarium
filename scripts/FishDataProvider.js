export const useFish = () => {
    return fishCollection.slice()
}

/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        length: "2 ft.",
        species: "Nurse Shark",
        food: "crustaceans",
        harvestedAt: "Gulf of Mexico"
    },
    {
        name: "Betty",
        length: "2 ft.",
        species: "Longtooth Barracuda",
        food: "Squid",
        harvestedAt: "Cumberland River"
    },
    {
        name: "Nemo",
        length: "2 in.",
        species: "Clownfish",
        food: "Squid",
        harvestedAt: "Great Barrier Reef"
    },
    {
        name: "Dory",
        length: "4 in.",
        species: "Blue Tang",
        food: "Clownfish",
        harvestedAt: "New Zealand Sea"
    }
]