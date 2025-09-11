function faltaNumero(arr){
    const n = arr.length + 1
    const sumaEsperada = (n * (n + 1)) / 2;

    const sumaArray = arr.reduce((acum,num) => acum + num , 0);
    
    return sumaEsperada - sumaArray;
}