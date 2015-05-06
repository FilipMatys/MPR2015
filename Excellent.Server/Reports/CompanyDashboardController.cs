using Microsoft.LightSwitch;
using System;
using System.Linq;
using System.Web.Http;

namespace LightSwitchApplication.Reports
{
    /// <summary>
    /// Contact person dashboard data provider.
    /// </summary>
    public class CompanyDashboardController : ApiController
    {
        // GET api/<controller>
        public CompanyDashboardData Get()
        {
            using (var context = ServerApplicationContext.CreateContext())
            {
                var data = new CompanyDashboardData();

                var conference = context.DataWorkspace.ApplicationData.ActiveConference().SingleOrDefault();
                if (conference != null)
                {
                    data.Active = true;
                    data.Date = conference.DateFrom;
                    data.Place = conference.Place;
                    data.Status = conference.Participations.Where(t => t.Company.User.Login == context.Application.User.Identity.Name).Select(t => t.State).SingleOrDefault();
                }

                return data;
            }
        }
    }

    /// <summary>
    /// Contact person dashboard data.
    /// </summary>
    public class CompanyDashboardData
    {
        public bool Active { get; set; }
        public DateTime Date { get; set; }
        public string Place { get; set; }
        public string Status { get; set; }
    }
}
