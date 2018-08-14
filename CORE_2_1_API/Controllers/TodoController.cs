using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CORE_2_1_API.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CORE_2_1_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TodoController : ControllerBase
  {
    private readonly TodoContext _context;
    public TodoController(TodoContext context)
    {
      _context = context;
      if (_context.TodoItems.Count() == 0)
      {
        TodoItem first = new TodoItem();

        first.Title = "First title";
        first.Author = "Johannes";
        first.IsCompleted = false;

        _context.TodoItems.Add(first);
        _context.SaveChanges();
      }
    }
    [HttpGet]
    public ActionResult<List<TodoItem>> GetAll()
    {
      TodoItem first = new TodoItem();

      first.Title = "First title";
      first.Author = "Johannes";
      first.IsCompleted = false;

      return _context.TodoItems.ToList();
    }

    [HttpGet("{id}", Name = "GetTodo")]
    public ActionResult<TodoItem> GetById(long id)
    {
      var item = _context.TodoItems.Find(id);
      if (item == null)
      {
        return NotFound();
      }
      return item;
    }

    [HttpPost]
    public IActionResult Create(TodoItem item)
    {
      _context.TodoItems.Add(item);
      _context.SaveChanges();
      return CreatedAtRoute("GetTodo", new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public IActionResult Update(long id, TodoItem item)
    {
      var todo = _context.TodoItems.Find(id);
      if(todo == null)
      {
        return NotFound();
      }
      todo.IsCompleted = item.IsCompleted;
      todo.Title = item.Title;
      todo.Author = item.Author;

      _context.TodoItems.Update(todo);
      _context.SaveChanges();
      return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(long id)
    {
      var removeTodo = _context.TodoItems.Find(id);
      if(removeTodo == null)
      {
        return NotFound();
      }
      
      _context.TodoItems.Remove(removeTodo);
      _context.SaveChanges();
      return NoContent();
    }

  }
}
