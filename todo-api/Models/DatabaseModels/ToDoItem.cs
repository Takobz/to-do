using System.Diagnostics.CodeAnalysis;

namespace ToDoApp.Models.DatabaseModels
{
    public class ToDoItem
    {
        public int ID { get; set; }

        public string? Description { get; set; }

        public bool IsComplete { get; set; }
    }
}