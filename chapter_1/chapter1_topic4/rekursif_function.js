function computeFactorial(n) {

    if (n == 1) return 1

    return n * computeFactorial(n - 1)

}


console.log(computeFactorial(5))