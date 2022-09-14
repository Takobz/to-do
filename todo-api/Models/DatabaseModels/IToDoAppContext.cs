using Microsoft.EntityFrameworkCore;

namespace ToDoApp.Models.DatabaseModels
{
    public interface IToDoAppContext 
    {
        public DbSet<ToDoItem> ToDoItem { get; set; }

        public void SaveChangesToDatabase();
    }
}