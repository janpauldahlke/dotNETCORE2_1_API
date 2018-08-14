using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CORE_2_1_API.Models
{
    public class TodoItem
    {
      public long Id { get; set; }
      public string Title { get; set; }
      public string Author { get; set; }
      public bool IsCompleted { get; set; }
    }
}
