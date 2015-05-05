using Microsoft.LightSwitch;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace LightSwitchApplication.DynamicScripts
{
    /// <summary>
    /// Dynamic JS code provider.
    /// </summary>
    public class ScriptsController : ApiController
    {
        /// <summary>
        /// GET dynamic/scripts
        /// </summary>
        /// <returns>dynamic scripts content</returns>
        public HttpResponseMessage Get()
        {
            using (var context = ServerApplicationContext.CreateContext())
            {
                var user = context.DataWorkspace.ApplicationData.Users.Where(t => t.Login == context.Application.User.Identity.Name).SingleOrDefault();
                string homePageName = null;
                if (user != null)
                {
                    switch (user.Role)
                    {
                        case "Administrator":
                            homePageName = "AdminDashboard";
                            break;
                        case "Employee":
                            homePageName = "ContactPersonDashboard";
                            break;
                        case "Company":
                            homePageName = "CompanyDashboard";
                            break;
                    }
                }

                var result = new StringBuilder();
                result.Append(@"$(document).ready(function () {
                    msls._run(" + (homePageName != null ? ("'" + homePageName + "'") : string.Empty) + @")
                    .then(null, function failure(error) {
                        alert(error);
                    });
                });");

                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(result.ToString(), Encoding.UTF8, "application/javascript");
                return res;
            }
        }
    }
}
