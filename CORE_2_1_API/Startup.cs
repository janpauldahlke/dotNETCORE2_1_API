using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using CORE_2_1_API.Models;
using NJsonSchema;
using NSwag.AspNetCore;
using System.Reflection;

namespace CORE_2_1_API
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddDbContext<TodoContext>(opt =>
        opt.UseInMemoryDatabase("TodoList"));
      services.AddCors();
      services.AddMvc()
        .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
        .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

    }

    public void Configure(IApplicationBuilder app)
    {

      app.UseCors(builder => builder
        .AllowCredentials()
        .AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod()
      );
      app.UseDefaultFiles();
      app.UseStaticFiles();
      //this swagger follows
      //https://docs.microsoft.com/de-de/aspnet/core/tutorials/getting-started-with-nswag?view=aspnetcore-2.1&tabs=visual-studio%2Cvisual-studio-xml
      app.UseSwaggerUi(typeof(Startup).GetTypeInfo().Assembly, settings =>
      {
        settings.GeneratorSettings.DefaultPropertyNameHandling = PropertyNameHandling.CamelCase;
      });
      app.UseMvc();
    }
  }
}
