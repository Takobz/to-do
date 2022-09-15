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

        [HttpGet]
        [Route("to-do-items/all-complete")]
        public IEnumerable<ToDoItem> GetAllCompleteToDoItems()
        {
            return _toDoDatabaseService.GetAllCompleteToDoItems();
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
            return Ok();
        }

        [HttpPost]
        [Route("to-do-items/set-to-complete")]
        public IActionResult SetToDoItemToComplete(int id)
        {
            try
            {
                _toDoDatabaseService.SetToDoItemToComplete(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok();
        }

        [HttpPost]
        [Route("to-do-items/set-to-active")]
        public IActionResult SetToDoItemToIncomplete(int id)
        {
            try
            {
                _toDoDatabaseService.SetToDoItemToActive(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok();
        }

        [HttpPost]
        [Route("to-do-items/set-all-to-complete")]
        public IActionResult SetAllToToDoItemsToComplete()
        {
            try
            {
                _toDoDatabaseService.SetAllToDoItemsToComplete();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok();
        }

        [HttpPost]
        [Route("to-do-items/set-all-to-active")]
        public IActionResult SetAllToToDoItemsToActive()
        {
            try
            {
                _toDoDatabaseService.SetAllToDoItemsToActive();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok();
        }

        [HttpDelete]
        [Route("to-do-items/delete-item")]
        public IActionResult DeleteToDoItem(int id)
        {
            try
            {
                _toDoDatabaseService.DeleteToDoItem(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok();
        }
    }
}