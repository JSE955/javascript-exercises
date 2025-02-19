const findTheOldest = function(people) {
    return people.reduce((oldest, nextPerson) => {
        if (oldest.yearOfDeath === undefined) {
            oldest.yearOfDeath = Number(new Date().getFullYear());
        }
        if (nextPerson.yearOfDeath === undefined) {
            nextPerson.yearOfDeath = Number(new Date().getFullYear());
        }
        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        if (nextPersonAge > oldestAge) {
            return nextPerson;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
