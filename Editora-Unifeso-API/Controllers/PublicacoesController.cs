using Editora_Unifeso_API.Data;
using Editora_Unifeso_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Editora_Unifeso_API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Editora_Unifeso_API.Controllers
{
   

    [Route("api/[controller]")]
    [ApiController]
    public class PublicacoesController : ControllerBase
    {
        private readonly EditoraContext _context;
        private readonly IEmailService _emailService;

        public PublicacoesController(EditoraContext context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Publicacao>>> GetPublicacoes()
        {
            return await _context.Publicacoes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Publicacao>> GetPublicacao(int id)
        {
            var publicacao = await _context.Publicacoes.FindAsync(id);
            if (publicacao == null)
            {
                return NotFound();
            }
            return publicacao;
        }

        [HttpPost]
        public async Task<ActionResult<Publicacao>> PostPublicacao(Publicacao publicacao)
        {
            _context.Publicacoes.Add(publicacao);
            await _context.SaveChangesAsync();

            // Enviar notificação por email
            var usuarios = await _context.Usuarios.ToListAsync();
            foreach (var usuario in usuarios)
            {
                var mensagem = $"Uma nova publicação foi adicionada: {publicacao.Titulo}";
                await _emailService.EnviarEmailAsync(usuario.Email, "Nova Publicação na Editora Unifeso", mensagem, usuario.Id);
            }

            return CreatedAtAction(nameof(GetPublicacao), new { id = publicacao.Id }, publicacao);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPublicacao(int id, Publicacao publicacao)
        {
            if (id != publicacao.Id)
            {
                return BadRequest();
            }

            _context.Entry(publicacao).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublicacao(int id)
        {
            var publicacao = await _context.Publicacoes.FindAsync(id);
            if (publicacao == null)
            {
                return NotFound();
            }

            _context.Publicacoes.Remove(publicacao);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }

}

