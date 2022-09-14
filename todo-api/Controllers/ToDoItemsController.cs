using Microsoft.AspNetCore.Mvc;
using ToDoApp.Services;
using ToDoApp.Models;

namespace ToDoApp.Controllers
{
    [ApiController]
    public class ToDoItemsController : ControllerBase
    {
        private readonly IToDoDatabaseService _toDoDatabaseService;

        public ToDoItemsController(IToDoDatabaseService toDoDatabaseService)
        {
            _toDoDatabaseService = toDoDatabaseService;
        }

        [HttpGet]
        [Route("to-do-items/all")]
        public IEnumerable<ToDoItem> GetAllToDoItems()
        {
            return _toDoDatabaseService.GetAllToDoItems();
        }

        [HttpGet]
        [Route("to-do-items/all-active")]
        public IEnumerable<ToDoItem> GetAllActiveToDoItems()
        {
            return _toDoDatabaseService.GetAllActiveToDoItems();
        }

        [HttpPost]
        [Route("to-do-items/create")]
        public IActionResult CreateToDoItem(string description)
        {
            try
            {
                _toDoDatabaseService.CreateToDoItem(description);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok($"Item created");
        }
    }
}