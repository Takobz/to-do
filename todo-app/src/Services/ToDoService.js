export const getAllToDoItems = async () => {
  try {
    const response = await fetch('https://localhost:7095/to-do-items/all');
    return await response.json();
  } catch (error) 
  {
    return []
  }
}

export const addToDoItem = async (description) => {
    try {
        const response = await fetch('https://localhost:7095/to-do-items/create?description='+description, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        });
        return await response.json();
      } catch (error) 
      {
        console.log(error);
        return []
      }
}

export const setToDoToComplete = async (id) => {
    try {
        const response = await fetch('https://localhost:7095/to-do-items/set-to-complete?id='+ id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        });
        return await response.json();
      } catch (error) 
      {
        console.log(error);
        return []
      }
}

export const deletToDoToComplete = async (id) => {
    try {
        const response = await fetch('https://localhost:7095/to-do-items/delete-item?id='+ id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        });
        return await response.json();
      } catch (error) 
      {
        console.log(error);
        return []
      }
}

export const setAllToDoItemsToComplete = async () => {
    try {
        const response = await fetch('https://localhost:7095/to-do-items/set-all-to-complete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        });
        return await response.json();
      } catch (error) 
      {
        console.log(error);
        return []
      }
}

 export const setAllToDoItemsToActive = async () => {
    try {
        const response = await fetch('https://localhost:7095/to-do-items/set-all-to-active', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        });
        return await response.json();
      } catch (error) 
      {
        console.log(error);
        return []
      }
}