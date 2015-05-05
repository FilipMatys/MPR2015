using System;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace LightSwitchApplication
{
    public class Global : HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            RouteTable.Routes.MapHttpRoute(
                name: "ReportsRoute",
                routeTemplate: "reports/{controller}/{id}",
                defaults: new
            {
                id = RouteParameter.Optional
            });
            RouteTable.Routes.MapHttpRoute(
                name: "DynamicScritpsRoute",
                routeTemplate: "dynamic/{controller}");
        }
    }
}
