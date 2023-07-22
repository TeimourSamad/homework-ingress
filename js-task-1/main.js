const printFullName = () => {
    return 'Teymur Samadzada'
}

const printFullNameWithParam = (firstname, lastname) => {
    return `${firstname} ${lastname}`
}

const calcRectPerimeter = (length, width) => {
    return 2 * (length + width)
}

const calcBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2)
}

const pow = (x, n) => {
    let result = 1
    for(let i = 0; i<n;i++) {
        result = result * x
    }
    return result
}



