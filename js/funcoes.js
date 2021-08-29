function validar() {
  var nome = document.getElementById('exampleFormControlInput1').value;
  var email = document.getElementById('exampleFormControlInput2').value;
  var texto =  document.getElementById('exampleFormControlTextarea1').value;

  if(nome == '' && email == '' && texto == '' ) {
      window.alert('Preencha os campos nome, email e texto!');
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px red';
  }else if(nome == '' && email == '' && texto != '') {
      window.alert('Preencha os campos nome e email!');
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px green';
  }else if(nome == '' && email != '' && texto == '') {
      window.alert('Preencha os campos nome e texto!');
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px red';
  }else if(nome != '' && email == '' && texto == ''){
      window.alert('Preencha os campos email e texto!');
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px red';
  }else if(nome != '' && email != '' && texto == ''){
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px red';
      window.alert('Preencha o campo texto!');

  } else if(nome == '' && email != '' && texto != ''){
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px green';
      window.alert('Preencha o campo nome!');
  } else if(nome != '' && email.search("@")==-1 && texto != ''){
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px green';
      window.alert('Preencha o campo email!');
  }
  else if(nome == '') {
      window.alert('Preencha o campo nome!');
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px red';
  }else if(email == ''){
      window.alert('Preencha o campo email!');
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px red';

  }else if(email.search("@")==-1) {
      window.alert('Email invalido');
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px red';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px green';
   } 
  
  else if(texto == '') {
      window.alert('Preencha o campo texto!');
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px red';
  }else {
      window.alert('Sua mensagem foi enviada ao nosso sistema :) !');
      document.getElementById('exampleFormControlInput1').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlInput2').style.border = 'solid 0.5px green';
      document.getElementById('exampleFormControlTextarea1').style.border = 'solid 0.5px green';
  }
  

}