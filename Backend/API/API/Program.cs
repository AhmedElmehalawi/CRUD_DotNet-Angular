using Microsoft.EntityFrameworkCore;
using API.Data;
var builder = WebApplication.CreateBuilder(args);
string txt = "";

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<EmployeeDbContext>(n => n.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDbCon")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(txt, builder =>
    {
        builder.AllowAnyHeader();
        builder.AllowAnyMethod();
        builder.AllowAnyOrigin();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseCors(txt);
app.MapControllers();

app.Run();
