using AutoMapper;

namespace ToDoApp.Models.Profiles
{
    public class ToDoItemProfile : Profile
    {
        public ToDoItemProfile()
        {
            CreateMap<Models.DatabaseModels.ToDoItem, Models.ToDoItem>();
            CreateMap<Models.ToDoItem, Models.DatabaseModels.ToDoItem>();
        }
    }
}