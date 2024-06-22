namespace Editora_Unifeso_API.Models
{
    public class Publicacao
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public DateTime DataPublicacao { get; set; }
        public string Resumo { get; set; }
        public string Categorias { get; set; }
        public string Arquivo { get; set; }
    }
}
