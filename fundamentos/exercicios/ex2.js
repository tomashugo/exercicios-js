function descobrirTriangulo (a,b,c) {
    if (a === b) {
        if (a === c) {
            console.log('Triângulo equilátero')
        }
        else {
            console.log('Triângulo isóceles')
        }
    }
    else if (a === c || b === c) {
        console.log('Triângulo isóceles')
    } 
    else {
        console.log('Triângulo escaleno')
    }
}

descobrirTriangulo(10,10,10)
descobrirTriangulo(10,10,1)
descobrirTriangulo(10,1,10)
descobrirTriangulo(1,10,10)
descobrirTriangulo(1,2,3)