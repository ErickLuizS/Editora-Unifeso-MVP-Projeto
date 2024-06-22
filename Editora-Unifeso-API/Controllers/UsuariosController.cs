    using Editora_Unifeso_API.Data;
using Editora_Unifeso_API.Models;
using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;


namespace Editora_Unifeso_API.Controllers
{
    

    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly EditoraContext _context;

        public UsuariosController(EditoraContext context)
        {
            _context = context;
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<Usuario>> GetUsuario(string username)
        {
            var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.Username == username);
            if (usuario == null)
            {
              return NotFound();
            }
             return usuario;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Usuario usuario)
        {
            if (id != usuario.Id)
            {
                return BadRequest();
            }

            _context.Entry(usuario).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }

}
