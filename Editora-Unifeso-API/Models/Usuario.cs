namespace Editora_Unifeso_API.Models
{
    public class Usuario
    {
        internal string TokenRecuperacao;
        internal DateTime? TokenExpiracao;

        public int Id { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }

        public ICollection<Notificacao> Notificacoes { get; set; }
    }
}
