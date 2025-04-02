using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace TaskManagerApp.Shared
{
    public class ChildTaskDisplay.razor : PageModel
    {
        private readonly ILogger<ChildTaskDisplay.razor> _logger;

        public ChildTaskDisplay.razor(ILogger<ChildTaskDisplay.razor> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}