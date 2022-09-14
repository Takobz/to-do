using ToDoApp.Models;

namespace ToDoApp.Services
{
    public interface IToDoDatabaseService
    {
        public void CreateToDoItem(string description);

        public void SetToDoItemToActive(int id);

        public void SetToDoItemToComplete(int id);

        public void DeleteToDoItem(int id);

        public List<ToDoItem> GetAllToDoItems();

        public List<ToDoItem> GetAllActiveToDoItems();

        public List<ToDoItem> GetAllCompleteToDoItems();
    }
}