import { useState } from 'react';

function App() {

	const [calc, setCalc] = useState("");
	const [currentOperation, setCurrentOperation] = useState("");
	const [resul, setResul] = useState("");

	//Marca que operadores se utilizan
	const ope = ['*', '+', '-', '/', '.'];

	//Cada botón es un valor e imprime cuando se aprieta un botón
	const updateCalc = valor => {
		if (
			//Si el valor es un operador y calc esta vacio
			ope.includes(valor) && calc === '' ||
			//Si el valor es un Operador y si el ultimo es un operador -> no se hace nada
			// .slice(-1) te devuelve u
			ope.includes(valor) && ope.includes(calc.slice(-1))
			) {
			return;
		}
		setCalc(calc + valor);
		//Si (el último) un valor no es un operador
		if (!ope.includes(valor)) {
			setResul(eval(calc + valor).toString());
		}
		
	}


	const calcularResul = () =>{
		/*setCalc(eval(calc).toString());*/
		setCurrentOperation(eval(calc).toString());
	}


	const eliminarUltimo = () =>{
		if (calc == ''){
			return;
		}
		const valor = calc.slice(0, -1);
		setCalc(valor);
	}

	const eliminarResultado = () =>{
		//si calcularResul no hay nada, regresa nada
		if (calcularResul == ''){
			return;
		}
		const valor = '';
		setCurrentOperation(valor);
	}


	//Función para crear los digitos del 9-1
	const botonDigitos = () =>{
		const digitos = [];

		for(let i = 9; i > 0; i--){
			//El .push() agrega elementos al array
			digitos.push(	
				<button  onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
			)
		}
		return digitos;
	}

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
			  <button onClick={() => updateCalc('*')}>*</button>
			  <button onClick={() => updateCalc('+')}>+</button>
			  <button onClick={() => updateCalc('-')}>-</button>
			  <button onClick={() => updateCalc('/')}>/</button>
			  <button onClick={eliminarResultado}>C</button>
			  <button onClick={eliminarUltimo}>DEL</button>
		  </div>

		  {/*Digitos */}
		  <div className="digitos">
			  {botonDigitos()}
			  <button onClick={() => updateCalc('0')}>0</button>
			  <button onClick={() => updateCalc('.')}>.</button>
			  <button onClick={calcularResul}>=</button>
		  </div>

	  </div>
    </div>
  );
}

export default App;
