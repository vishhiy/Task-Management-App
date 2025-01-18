    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const todoLane = document.getElementById('todo-lane');
    const inProgressLane = document.getElementById('inprogress-lane');
    const doneLane = document.getElementById('done-lane');

    function createTaskElement(taskText) {
      const task = document.createElement('div');
      task.className = 'task';

      const taskDescription = document.createElement('span');
      taskDescription.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => task.remove());

      const moveButton = document.createElement('button');
      moveButton.textContent = 'Move';
      moveButton.addEventListener('click', () => moveTask(task));

      task.appendChild(taskDescription);
      task.appendChild(deleteButton);
      task.appendChild(moveButton);

      return task;
    }

    function moveTask(task) {
      const parentLane = task.parentElement;
      if (parentLane.id === 'todo-lane') {
        inProgressLane.appendChild(task);
      } else if (parentLane.id === 'inprogress-lane') {
        doneLane.appendChild(task);
      } else if (parentLane.id === 'done-lane') {
        todoLane.appendChild(task);
      }
    }

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const taskText = taskInput.value.trim();
      if (taskText) {
        const taskElement = createTaskElement(taskText);
        todoLane.appendChild(taskElement);
        taskInput.value = '';
      }
    });