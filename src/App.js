import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

//Jelou

function App() {

	const [calc, setCalc] = useState("");
	const [currentOperation, setCurrentOperation] = useState("");
	const [resul, setResul] = useState("");

	//Marca que operadores se utilizan
	const ope = ['*', '+', '-', '/', '.'];


	//Cada botón es un valor e imprime cuando se aprieta un botón
	const updateCalc = valor => {
		//Concatenar 
		setCalc(calc + valor);
		/*console.log(calc);
		console.log(valor);*/
		//Si un valor no es un operador
		if (!ope.includes(valor)) {
			setResul(eval(calc + valor).toString());
		}
	}

	const calcularResul = () =>{
		if ((isNaN(calc) && /^(.)\1+$/.test(String(calc))) || (String(calc).length == 1 && ('' || '*'|| '+'|| '-'|| '/'|| '.')) || calc === ''){
			swal({
				title: "Error",
				text: "No haz introducido ningún número",
				icon: "warning",
				button: "Volver"
			}
			);
		}else{
			setCurrentOperation(eval(resul).toString());
		}
	}


	const eliminarUltimo = () =>{
		if (calc == ''){
			return;
		}
		const valor = calc.slice(0, -1);
		setCalc(valor);
		setResul(valor);
	}


	const eliminarTodo = () => {
		if (calc == '' && calcularResul == '') {
			return;
		}else{
			const valor = '';
			setResul(valor);
			setCurrentOperation(valor);
			setCalc(valor);
		}
	}




	//Función para crear los digitos del 9-1
	/*const botonDigitos = () =>{
		const digitos = [];

		for(let i = 9; i > 0; i--){
			//El .push() agrega elementos al array
			digitos.push(	
				<button className="digits" onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
			)
		}
		return digitos;
	}*/



  return (
    <div className="App">
      <div className="calcu">
		  <h1 className="titulo">Calculadora</h1>
		  <div className="display">
			  {/*Mostrar Resultado */}
			<div className="resultado-previo">
			{resul ?  <span>({resul})&nbsp;</span> : ''}
			{calc || "0"}
			</div>
			<div className="resultado-actual">
				{resul ? currentOperation : ''}
			</div>
			
		  </div>

		  {/*Operadores */}
		  <div className="operadores">
			  <button onClick={() => updateCalc('*')}>x</button>
			  <button onClick={() => updateCalc('+')}>+</button>
			  <button onClick={() => updateCalc('-')}>-</button>
			  <button onClick={() => updateCalc('/')}>/</button>
			  <button onClick={eliminarTodo}>C</button>
			  <button onClick={eliminarUltimo}>DEL</button>
		  </div>

		  {/*Digitos */}
		  <div className="digitos">
		  <button onClick={() => updateCalc('7')}>7</button>
		  <button onClick={() => updateCalc('8')}>8</button>
		  <button onClick={() => updateCalc('9')}>9</button>
		  <button onClick={() => updateCalc('4')}>4</button>
		  <button onClick={() => updateCalc('5')}>5</button>
		  <button onClick={() => updateCalc('6')}>6</button>
		  <button onClick={() => updateCalc('1')}>1</button>
		  <button onClick={() => updateCalc('2')}>2</button>
		  <button onClick={() => updateCalc('3')}>3</button> 
		  </div>
		  <div className="digitos-aux">
			  <button onClick={() => updateCalc('0')}>0</button>
			  <button id="boton-color" onClick={() => updateCalc('.')}>.</button>
			  <button  id="boton-color" onClick={calcularResul}>=</button>
			</div>
			
			
	  </div>

	  
    </div>
  );
}

export default App;
