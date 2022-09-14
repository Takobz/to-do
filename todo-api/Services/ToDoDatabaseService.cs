using AutoMapper;
using ToDoApp.Models.DatabaseModels;

namespace ToDoApp.Services
{
    public class ToDoDatabaseService : IToDoDatabaseService
    {
        private readonly IToDoAppContext _toDoAppContext;
        private readonly IMapper _mapper;

        public ToDoDatabaseService(IToDoAppContext toDoAppContext, IMapper mapper)
        {
            _toDoAppContext = toDoAppContext;
            _mapper = mapper;
        }

        public void CreateToDoItem(string description)
        {
            if(string.IsNullOrEmpty(description))
            {
                throw new ArgumentNullException("description needed to create item");
            }

            var todoItem = new Models.DatabaseModels.ToDoItem
            {
                IsComplete = 0,
                Description = description
            };

            _toDoAppContext.ToDoItem.Add(todoItem);
            _toDoAppContext.SaveChangesToDatabase();
        }

        public void DeleteToDoItem(int id)
        {
            var toDoItem = new ToDoApp.Models.DatabaseModels.ToDoItem
            {
                ID = id
            };

            _toDoAppContext.ToDoItem.Remove(toDoItem);
            _toDoAppContext.SaveChangesToDatabase();
        }

        public List<Models.ToDoItem> GetAllActiveToDoItems()
        {
            var dbToDoItems =_toDoAppContext.ToDoItem
                .Select(x => x)
                .Where(x => x.IsComplete == 1)
                .ToList();

            return _mapper.Map<List<Models.DatabaseModels.ToDoItem>, List<Models.ToDoItem>>(dbToDoItems);
        }

        public List<Models.ToDoItem> GetAllCompleteToDoItems()
        {
            var dbToDoItems = _toDoAppContext.ToDoItem
                .Select(x => x)
                .Where(x => x.IsComplete == 1)
                .ToList();

            return _mapper.Map<List<Models.DatabaseModels.ToDoItem>, List<Models.ToDoItem>>(dbToDoItems);
        }

        public List<Models.ToDoItem> GetAllToDoItems()
        {
            var dbToDoItems = _toDoAppContext.ToDoItem
                .Select(x => x)
                .ToList();

            return _mapper.Map<List<Models.DatabaseModels.ToDoItem>, List<Models.ToDoItem>>(dbToDoItems);
        }

        public void SetToDoItemToActive(int id)
        {
            try
            {
                var toDoItem = _toDoAppContext.ToDoItem
                .First(x => x.ID == id)
                .IsComplete = 0;

                _toDoAppContext.SaveChangesToDatabase();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public void SetToDoItemToComplete(int id)
        {
            try
            {
                var toDoItem = _toDoAppContext.ToDoItem
                .First(x => x.ID == id)
                .IsComplete = 1;

                _toDoAppContext.SaveChangesToDatabase();
            }
            catch(Exception)
            {
                throw;
            }
        }
    }
}