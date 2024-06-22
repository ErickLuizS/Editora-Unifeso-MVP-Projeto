using Editora_Unifeso_API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Editora_Unifeso_API.Data
{
    public class EditoraContext : DbContext
    {
        public EditoraContext(DbContextOptions<EditoraContext> options) : base(options) { }
        public DbSet<Publicacao> Publicacoes { get; set; }
        public DbSet<Comentario> Comentarios { get; set; }
        public DbSet<Avaliacao> Avaliacoes { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
     
        public DbSet<Notificacao> Notificacoes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=postgres;Database=Editora;Username=Admin;Password=369");
        }
    }
}
