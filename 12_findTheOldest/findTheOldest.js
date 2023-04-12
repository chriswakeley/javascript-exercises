const findTheOldest = function(people) {
    return people.reduce((oldest,  nextPerson) => {
        let age, oldestAge;
        if (!("yearOfDeath" in nextPerson)){
            age = (new Date()).getFullYear() - nextPerson.yearOfBirth;
        }
        else{
            age = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        }
        if (!("yearOfDeath" in oldest)){
            oldestAge = (new Date()).getFullYear() - oldest.yearOfBirth;
        }
        else{
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        if(age > oldestAge){
            oldest = nextPerson;
        }
        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
