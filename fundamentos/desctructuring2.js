const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 8, 8]
console.log(n1, n3, n5, n6)

const [a1, a2] = [10, 7, 8, 8]
console.log(a1,a2)

const [, [, b]] = [[1,23,4],[4,6]]
console.log(b)