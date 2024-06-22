using Editora_Unifeso_API.Data;
using Editora_Unifeso_API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Adicionar servi�os ao cont�iner.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllersWithViews();

// Configurar o contexto do banco de dados
builder.Services.AddDbContext<EditoraContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configura��o de autentica��o e outros servi�os
var key = Encoding.ASCII.GetBytes(builder.Configuration["Jwt:Key"]);
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder =>
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());
});

// Adicionar servi�os espec�ficos
builder.Services.AddSingleton<IPasswordHasher, Argon2PasswordHasher>();
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<UsuarioService>();
builder.Services.AddScoped<RecuperacaoSenhaService>();

var app = builder.Build();

// Aplicar migra��es automaticamente
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<EditoraContext>();
    dbContext.Database.Migrate();
}

// Configurar o pipeline de solicita��o HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
