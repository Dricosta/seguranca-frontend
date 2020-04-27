import React, { useState, useEffect } from 'react';
import GlobalStyle from './css/global';
import * as S from './css/styles';
import { BsTrash } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import api from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [statusForm, setStatusForm] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', points: 0 });
  const [statusEdit, setStatusEdit] = useState(false);

  useEffect(() => {
    async function FetchAllTasks(){
      const tasks = await api.get('/tasks');

      setTasks(tasks.data);
    }

    FetchAllTasks();
  }, [])


   async function handleEditAndCreateTask(){

    if(statusEdit){

      const taskAux = [...tasks];

      const { title, description, points, id } = newTask;

      const response = await api.put(`/tasks/${id}`, { title, description, points });

      const taskUpdate = response.data;


      console.log(taskUpdate);

      if(response.status === 200){
        const newTasksUpdated = taskAux.map(task => {
          if(task.id === id){
            task = taskUpdate;
          }

          return task;
        });

        setTasks(newTasksUpdated);
        setStatusForm(!statusForm);
      }

    } else {
      const { title, description, points } = newTask;
    
      const response = await api.post('/tasks', { title, description, points });
  
      const NewTaskAux = response.data;
        
      if(response.status === 200){
        setStatusForm(!statusForm);
        setTasks([ ...tasks, NewTaskAux ]);
      }
    }
  }

  async function handleDeleteTask(id){
    const TaskAux = [...tasks];
    const response = await api.delete(`/tasks/${id}`);

  
    if(response.status === 200){
      const taskfindIndex = tasks.findIndex(task => task.id === id);
      TaskAux.splice(taskfindIndex, 1);
      setTasks(TaskAux);
    }
  }

  async function handleOpenUpdateTask(id){
    setStatusEdit(true);

    !statusForm && setStatusForm(!statusForm);

    const taskEdit = tasks.find(item => item.id === id);

    taskEdit.id = id;

    setNewTask(taskEdit);
  }

  function handleOpenForm(){
    setStatusEdit(false);

    !statusForm && setStatusForm(!statusForm)

    setNewTask({ title: '', description: '', points: '' })
  
  }


  return (
    <>
      <GlobalStyle/>
      <S.Container>
        <S.BoxTasks>

          {tasks.length <= 0 &&
            <S.CardNotFound>
              <span>Você não possui nenhuma tarefa</span>
            </S.CardNotFound>
          }

          {tasks.map(task => (
            <S.CardTask key={task.id}>
              <S.CardTaskContent>
                <S.CardTitle>{task.title}</S.CardTitle>
                <S.CardDescription>{task.description}</S.CardDescription>
                <S.CardPoints>{task.points}</S.CardPoints>
              </S.CardTaskContent>
              <S.CardTaskButtons>
                <BsTrash size={19} className="btn-trash" onClick={() => handleDeleteTask(task.id)}/>
                <FiEdit size={18} className="btn-edit" onClick={() => handleOpenUpdateTask(task.id)}/>
              </S.CardTaskButtons>
            </S.CardTask>
          ))}

          <S.FormAddTask show={statusForm}>
            <S.Input 
            type="text" 
            placeholder="Titulo" 
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            value={newTask.title}
            />

            <S.Input 
            type="text" 
            placeholder="Descrição" 
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            value={newTask.description}
            />

            <S.Input 
            type="number" 
            placeholder="Pontos" 
            onChange={(e) => setNewTask({ ...newTask, points: e.target.value })} 
            value={newTask.points}
            />

            <S.BtnAddTask onClick={() => handleEditAndCreateTask()}> {statusEdit ? <span>Editar</span> : <span>Adicionar</span>}</S.BtnAddTask>
          </S.FormAddTask>

          <S.ButtonCreateTask onClick={() => handleOpenForm()}>
            Nova tarefa
          </S.ButtonCreateTask>
        </S.BoxTasks>
      </S.Container>
    </>
  );
}

export default App;
