namespace Editora_Unifeso_API.Controllers
{
    using Editora_Unifeso_API.Data;
    using Editora_Unifeso_API.Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    public class NotificacoesController : ControllerBase
    {
        private readonly EditoraContext _context;

        public NotificacoesController(EditoraContext context)
        {
            _context = context;
        }

        [HttpGet("{usuarioId}")]
        public async Task<ActionResult<IEnumerable<Notificacao>>> GetNotificacoes(int usuarioId)
        {
            return await _context.Notificacoes
                .Where(n => n.UsuarioId == usuarioId)
                .OrderByDescending(n => n.DataEnvio)
                .ToListAsync();
        }
    }

}
