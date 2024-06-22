namespace Editora_Unifeso_API.Models
{
    public class Comentario
    {
        public int Id { get; set; }
        public int PublicacaoId { get; set; }
        public string Usuario { get; set; }
        public string Texto { get; set; }
        public DateTime DataComentario { get; set; }
    }
}
