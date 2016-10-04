using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(personalPortfolio.Startup))]
namespace personalPortfolio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
