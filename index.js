// Write your solution in this file!

const employee = {
    name: "Barack",
    streetAddress: "1600 Pennsylvania",
}

function updateEmployeeWithKeyAndValue(
    emp, key, value
) {

    const updatedEmployee = {
        ...emp,
        [key]: value
    }
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(
    emp, key, value
) {
    //console.log(emp)
    emp[key] = value
    //console.log(emp)
    return emp;

}


function deleteFromEmployeeByKey(
    emp, key
) {
    // console.log(emp)
    // console.log(key)
    const updatedEmployee = {
        ...emp,

    }
    delete updatedEmployee[key]
    // console.log(updatedEmployee)
    return updatedEmployee;
}


function destructivelyDeleteFromEmployeeByKey(
    emp, key
) {
    delete emp[key]
    return emp;
}



