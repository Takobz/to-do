using Microsoft.EntityFrameworkCore;

namespace ToDoApp.Models.DatabaseModels
{
    public class ToDoAppContext : DbContext, IToDoAppContext 
    {
        private readonly IConfiguration _configuration;

        public ToDoAppContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private DbSet<ToDoItem> _toDoItems;
        
        public DbSet<ToDoItem> ToDoItem 
        { 
            get => _toDoItems; 
            set => _toDoItems = value ?? throw new ArgumentNullException($"DbSet:ToDoItems instance can't be null"); 
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_configuration["sqlServerConnectionString"]);
            }
        }

        public void SaveChangesToDatabase()
        {
            SaveChanges();
        }
        
    }
}