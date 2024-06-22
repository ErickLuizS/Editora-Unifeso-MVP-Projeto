namespace Editora_Unifeso_API.Services
{
    using Editora_Unifeso_API.Data;
    using Editora_Unifeso_API.Models;
    using Microsoft.EntityFrameworkCore;
    using System.Threading.Tasks;

    public class UsuarioService
    {
        private readonly EditoraContext _context;
        private readonly IPasswordHasher _passwordHasher;

        public UsuarioService(EditoraContext context, IPasswordHasher passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }

        public async Task<Usuario> Authenticate(string username, string password)
        {
            var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.Username == username);
            if (usuario == null || !_passwordHasher.VerifyPassword(usuario.PasswordHash, password))
                return null;

            return usuario;
        }

        public async Task<Usuario> Register(string username, string password)
        {
            var usuario = new Usuario
            {
                Username = username,
                PasswordHash = _passwordHasher.HashPassword(password)
            };

            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();
            return usuario;
        }
    }

}
