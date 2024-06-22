namespace Editora_Unifeso_API.Models
{
    public class Avaliacao
    {
        public int Id { get; set; }
        public int PublicacaoId { get; set; }
        public string Usuario { get; set; }
        public int Nota { get; set; }
    }
}
