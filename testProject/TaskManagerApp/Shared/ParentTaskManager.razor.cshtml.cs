using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace TaskManagerApp.Shared
{
    public class ParentTaskManager.razor : PageModel
    {
        private readonly ILogger<ParentTaskManager.razor> _logger;

        public ParentTaskManager.razor(ILogger<ParentTaskManager.razor> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}