

// class Funcionario {

//     constructor(nome,idade,cargo) {

//         this.nome = nome ;
//         this.idade = idade;
//         this.cargo = cargo;
//         this.gerente = false ; 
        

             

//     }

//     seApresentar(){

//         alert(`olá eu sou um ${this.cargo}, meu nome é ${this.nome}. `);

//     }

//     trabalhar(){

       

//             alert(`${this.nome}, está trabalhando!`);

//     }

// }

// class Gerente extends Funcionario {

   

//     constructor(nome,idade, cargo, departamento  ){

       

//         super(nome, idade, cargo);        

//         this.departamento = departamento;

//     }



//     gerenciar(){

//         alert(`olá estou gerenciando o ${this.departamento}, sou ${this.cargo}! `);

//     }

// }



// class Desenvolvedor extends Funcionario{

//     constructor(nome,idade, cargo, linguagem ){  

//         super(nome, idade, cargo);        

//         this.linguagem = linguagem;

       

//     }

//     programar() {        

//         alert(`olá meu nome é ${this.nome}, estou programando na linguagem ${this.linguagem}! meu email é: ${email} `);

//     }

// }

// let nome = document.querySelector('#txt-nome'); 
// let idade = document.querySelector('#idade');
// let dp = document.querySelector('#txt-dp');

// let linguagem = document.querySelector('#txt-linguagem');
// let btnEntrar = document.querySelector('#btn-entrar');

// function habilitarInput() {
//     let cargoProgramador = document.querySelector('.radio-programador');
//     let cargoGerente = document.querySelector('#radio-gerente');
//    console.log("clicou");
// }

function habilitarInput() {
    let cargoProgramador = document.querySelector('.radio-programador');
    let cargoGerente = document.querySelector('#radio-gerente');
    let dp = document.getElementById('txt-dp');
    let linguagem = document.getElementById('txt-linguagem');

    if (cargoGerente.checked) {
        dp.disabled = true;
        linguagem.disabled = false;
        dp.focus();
    } else {
        dp.disabled = false;
        linguagem.disabled = true;
        
    }
}


// let logado = document.querySelector('.logado');
// let content = document.querySelector(".content");

// function logar(ev){
//     if( email.value === 'eu@gmail.com' && senha.value == 123    ){
//         content.style.display = "none";
//         logado.style.display = "grid";
//         const gerente = new Gerente( 'Alberto', 35, 'Gerente de Projetos', 'TI');
//         gerente.seApresentar();        
//         gerente.gerenciar();        
//         gerente.trabalhar();
         
//     }else if(email.value === 'dev@gmail.com' && senha.value == 1234) {

//         const desenvolvedor = new Desenvolvedor('Renato', 28, 'Desenvolvedor', 'JavaScript');
//         desenvolvedor.seApresentar();
//         desenvolvedor.programar();
//         desenvolvedor.trabalhar();
        
//     }
    
   
// }
// btnEntrar.addEventListener('click', logar);




