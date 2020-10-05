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
        harvestedAt: "Gulf of Mexico",
        image: "https://www.welovesharks.club/wp-content/uploads/2017/04/Depositphotos_99722956_m-2015.jpg"
    },
    {
        name: "Betty",
        length: "2 ft.",
        species: "Longtooth Barracuda",
        food: "Squid",
        harvestedAt: "Cumberland River",
        image: "https://images.pexels.com/photos/886210/pexels-photo-886210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Nemo",
        length: "2 in.",
        species: "Clownfish",
        food: "Squid",
        harvestedAt: "Great Barrier Reef",
        image: "https://i0.wp.com/metro.co.uk/wp-content/uploads/2017/09/finding-nemo.jpg?quality=90&strip=all&crop=0px%2C62px%2C1024px%2C538px&resize=1200%2C630&zoom=1&ssl=1"
    },
    {
        name: "Dory",
        length: "4 in.",
        species: "Blue Tang",
        food: "Clownfish",
        harvestedAt: "New Zealand Sea",
        image: "https://pbs.twimg.com/profile_images/773917612648591365/hFl6DSSh_400x400.jpg"
    }
]