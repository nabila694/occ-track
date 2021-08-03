function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const result = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
   // result.check1 = data.get('check1');
   // result.check2=data.get('check2');
    
   // const results = document.querySelector('.results pre');
    //console.log({result});
    const outputJSON=JSON.stringify(result);
    console.log(outputJSON);
    
  }
  
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleFormSubmit);