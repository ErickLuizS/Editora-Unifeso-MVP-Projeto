   using Editora_Unifeso_API.Data;
    using Editora_Unifeso_API.Models;
    using MailKit.Net.Smtp;
    using MimeKit;
    using System.Net.Mail;
    using System.Threading.Tasks;


namespace Editora_Unifeso_API.Services
{
  

    public interface IEmailService
    {
        Task EnviarEmailAsync(string para, string assunto, string mensagem, int usuarioId = 0);
    }

    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        private readonly EditoraContext _context;

        public EmailService(IConfiguration configuration, EditoraContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        public async Task EnviarEmailAsync(string para, string assunto, string mensagem, int usuarioId = 0)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress("Editora Unifeso", _configuration["EmailSettings:From"]));
            emailMessage.To.Add(new MailboxAddress("", para));
            emailMessage.Subject = assunto;
            emailMessage.Body = new TextPart("plain") { Text = mensagem };

            using (var client = new MailKit.Net.Smtp.SmtpClient())
            {
                await client.ConnectAsync(_configuration["EmailSettings:SmtpServer"], int.Parse(_configuration["EmailSettings:Port"]), false);
                await client.AuthenticateAsync(_configuration["EmailSettings:Username"], _configuration["EmailSettings:Password"]);
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }

            if (usuarioId > 0)
            {
                var notificacao = new Notificacao
                {
                    UsuarioId = usuarioId,
                    Mensagem = mensagem,
                    DataEnvio = DateTime.UtcNow
                };
                _context.Notificacoes.Add(notificacao);
                await _context.SaveChangesAsync();
            }
        }
    }

}
