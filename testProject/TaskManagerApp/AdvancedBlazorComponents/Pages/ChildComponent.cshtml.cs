using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace AdvancedBlazorComponents.Pages
{
    public class ChildComponent : PageModel
    {
        private readonly ILogger<ChildComponent> _logger;

        public ChildComponent(ILogger<ChildComponent> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}