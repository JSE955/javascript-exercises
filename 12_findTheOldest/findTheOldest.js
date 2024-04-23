const findTheOldest = function(people) {
    const today = new Date();
    return people.reduce((person, nextPerson) => {
        let personAge = (person.yearOfDeath || today.getFullYear()) - person.yearOfBirth;
        let nextPersonAge = (nextPerson.yearOfDeath || today.getFullYear()) - nextPerson.yearOfBirth;
        if (personAge > nextPersonAge) {
            return person;
        } else {
            return nextPerson;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
