function imprimirSecDes(numero) {
    if (numero >= 0) {
      console.log(numero);
      imprimirSecDes(numero - 1);
    }
  }
  

  imprimirSecDes(10);
  