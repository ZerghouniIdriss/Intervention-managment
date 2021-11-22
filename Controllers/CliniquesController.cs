using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project3.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CliniquesController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<CliniquesController> _logger;

        public CliniquesController(ILogger<CliniquesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Clinique> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Clinique
            {
                Id = 1,
                Name = "Test"
            })
            .ToArray();
        }


    }
}
