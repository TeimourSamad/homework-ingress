const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'blue',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
]



// *******MAP**********


const getAllNames = () => {
    persons.map(person => {
        return person
    })
}


const getAllHeights = () => {
    persons.map(person => {
       return person.height
    })
}


const getNameAndHeight = () => {
    persons.map(person => {
        return (person.name, person.height)
    })
}


const getFirstnames = () => {
    persons.map(person => {
        return person.name
    })
}

getFirstnames()
getNameAndHeight()
getAllHeights()
getAllNames()



// *****FILTER*****


const getMoreThanHundered = () => {
    return persons.filter(person => person.mass > 100)
}

const getHeightLessThanTHundered = () => {
    return persons.filter(person => person.height < 200)
}

const getAllMale = () => {
    return persons.filter(person => person.gender == 'male')
}

const getAllFemale = () => {
    return persons.filter(person => person.gender == 'female')
}

getAllFemale()
getAllMale()
getHeightLessThanTHundered()
getMoreThanHundered()


// *****SORT******


const sortByMass = () => {
    persons.sort((a, b) => {
        return a.mass - b.mass
    })
}


const sortByHeight = () => {
    persons.sort((a, b) => {
        return a.height - b.height
    })
}

const sortByName = () => {
    persons.sort(person => console.log(person.name))
}

const sortByGender = () => {
    persons.sort(person => console.log(person.gender))
}

sortByName()
sortByGender()
sortByHeight()
sortByMass()



// ****EVERY****

const everyCharHaveBlueEyes = () => {
    return persons.every(person => person.eye_color == 'blue')
}

const everyCharMoreThanFourth = () => {
     return persons.every(person => person.mass > 40)
}

const isEveryShorterThanTwoHundered = () => {
     return persons.every(person => person.height < 200)
}

const isEveryMale = () => {
     return persons.every(person => person.gender == 'male')
}

isEveryMale()
isEveryShorterThanTwoHundered()
everyCharMoreThanFourth()
everyCharHaveBlueEyes()


//*****SOME*****

const atLeastOneMale = () => {
   return persons.some(person => person.gender == 'male')
}

const atLeastOneBlueEye = () => {
   return persons.some(person => person.eye_color == 'blue')
}

const atLeastOneTallerThanTwoTen = () => {
   return persons.some(person => person.height > 210)
}

const atLeastOneLessThanFifth = () => {
   return persons.some(person => person.mass < 50)
}

atLeastOneLessThanFifth()
atLeastOneTallerThanTwoTen()
atLeastOneBlueEye()
atLeastOneMale()