namespace Editora_Unifeso_API.Models
{
    public class Notificacao
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
        public string Mensagem { get; set; }
        public DateTime DataEnvio { get; set; }
    }

}
