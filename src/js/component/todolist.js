import React, { useState } from "react";
export function Todolist() {
	//const[nombre de variable, funcion que modifica la variable]
	const [task, setTask] = useState("");
	const [listarray, setListarray] = useState([]);
	//addtask agrega task a la lista
	function handAddTask(event) {
		if (event.keyCode == 13 && task !== "") {
			//&& task !== "" que no suceda cuando este vacio
			setListarray([...listarray, task]);
			setTask(""); //esto sirve para evitar que agrege cosas en blanco
		}
		//keycode es para asignar una letra al keyup, 13 es codigo del enter
		//es agregar todo lo que ya tenia mas la nueva, list tiene toda la lista de tarea
	}
	function handDeleteTask(index) {
		listarray.splice(index, 1); //splice borra
		setListarray([...listarray]);
	}
	return (
		<div className="formulario">
			<label className="titulo">to do list</label>
			<p>
				<input
					className="tarea"
					type="text"
					placeholder="add a new task" /*target significa que llama , value tiene que ser igual al nombre de la variable que va a llamar*/
					onChange={event => setTask(event.target.value)} //cada que hay un cambio en input se ejecuta el evento y llama la funcion set task, lo guarda en la variable tarea y cada que presiona enter lo agrega en una lista
					value={task}
					onKeyUp={handAddTask} //los eventos {funcion, la funcion debe ser una nueva para agregar tareas}
				/>
			</p>
			<ul>
				{listarray.map((
					element,
					index
					//nombre del array.map((parametro de la funcion)funcion flecha), cada elemento del array tiene un task
				) => (
					<li key={index}>
						{element}
						<span onClick={() => handDeleteTask()}>
							<i className="fas fa-trash-alt"></i>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
