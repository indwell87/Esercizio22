while (true) {
    choose_beverage = prompt('Scegli una bevanda: \n1. Acqua \n2. Coca Cola \n3. Birra');
  
    if (choose_beverage == 1) {
      console.log('E’ stata selezionata l’acqua');
      break; 

    } else if (choose_beverage == 2) {
      console.log('E’ stata selezionata la Coca Cola');
      break; 

    } else if (choose_beverage == 3) {
      console.log('E’ stata selezionata la birra');
      break;  
      
    } else {
      console.log('Scelta non valida, riprova.');
    }
  }
  