    using Editora_Unifeso_API.Data;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Linq;
    using System.Threading.Tasks;


namespace Editora_Unifeso_API.Services
{


    public class RecuperacaoSenhaService
    {
        private readonly EditoraContext _context;
        private readonly IPasswordHasher _passwordHasher;

        public RecuperacaoSenhaService(EditoraContext context, IPasswordHasher passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }

        public async Task<string> GerarTokenRecuperacaoAsync(string email)
        {
            var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.Email == email);
            if (usuario == null)
                return null;

            var token = Guid.NewGuid().ToString();
            usuario.TokenRecuperacao = token;
            usuario.TokenExpiracao = DateTime.UtcNow.AddHours(1);

            await _context.SaveChangesAsync();

            return token;
        }

        public async Task<bool> ResetarSenhaAsync(string token, string novaSenha)
        {
            var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.TokenRecuperacao == token && u.TokenExpiracao > DateTime.UtcNow);
            if (usuario == null)
                return false;

            usuario.PasswordHash = _passwordHasher.HashPassword(novaSenha);
            usuario.TokenRecuperacao = null;
            usuario.TokenExpiracao = null;

            await _context.SaveChangesAsync();

            return true;
        }
    }
}
