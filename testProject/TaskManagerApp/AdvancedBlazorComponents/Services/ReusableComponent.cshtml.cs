using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace AdvancedBlazorComponents.Services
{
    public class ReusableComponent : PageModel
    {
        private readonly ILogger<ReusableComponent> _logger;

        public ReusableComponent(ILogger<ReusableComponent> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}