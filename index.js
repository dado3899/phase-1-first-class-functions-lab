// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo','bob']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2)
}

const returnLastandFirst = function(drivers){
    return [drivers[0],drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multi){
    return function(fare){
        return fare * multi
    }
}

// const fareDoubler = createFareMultiplier(2)
// const fareTripler = createFareMultiplier(3)

const fareDoubler = function(fare){
    return fare * 2
}
const fareTripler = function(fare){
    return fare * 3
}
// console.log(fareTripler(3)) 
// First arg array second func
function selectDifferentDrivers(array,func){
    console.log(func)
    return func(array)
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))