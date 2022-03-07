using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project3.Data;
using Project3.Models;
using Microsoft.AspNetCore.Authorization;

namespace Project3.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CliniquesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CliniquesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Cliniques
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Clinique>>> GetCliniques()
        {
            return await _context.Cliniques.ToListAsync();
        }

        // GET: api/Cliniques/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Clinique>> GetClinique(int id)
        {
            var clinique = await _context.Cliniques.FindAsync(id);

            if (clinique == null)
            {
                return NotFound();
            }

            return clinique;
        }

        // PUT: api/Cliniques/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClinique(int id, Clinique clinique)
        {
            if (id != clinique.Id)
            {
                return BadRequest();
            }

            _context.Entry(clinique).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CliniqueExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cliniques
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Clinique>> PostClinique(Clinique clinique)
        {
            _context.Cliniques.Add(clinique);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClinique", new { id = clinique.Id }, clinique);
        }

        // DELETE: api/Cliniques/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Clinique>> DeleteClinique(int id)
        {
            var clinique = await _context.Cliniques.FindAsync(id);
            if (clinique == null)
            {
                return NotFound();
            }

            _context.Cliniques.Remove(clinique);
            await _context.SaveChangesAsync();

            return clinique;
        }

        private bool CliniqueExists(int id)
        {
            return _context.Cliniques.Any(e => e.Id == id);
        }
    }
}
