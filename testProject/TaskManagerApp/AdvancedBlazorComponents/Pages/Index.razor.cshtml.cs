using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace AdvancedBlazorComponents.Pages
{
    public class Index.razor : PageModel
    {
        private readonly ILogger<Index.razor> _logger;

        public Index.razor(ILogger<Index.razor> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}