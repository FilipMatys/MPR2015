using Microsoft.LightSwitch;
using System;
using System.Linq;
using System.Web.Http;

namespace LightSwitchApplication.Reports
{
    public class ContactPersonDashboardController : ApiController
    {
        // GET api/<controller>
        public ContactPersonDashboardData Get()
        {
            using (var context = ServerApplicationContext.CreateContext())
            {
                var data = new ContactPersonDashboardData();

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

    public class ContactPersonDashboardData
    {
        public bool Active { get; set; }
        public DateTime Date { get; set; }
        public string Place { get; set; }
        public string Status { get; set; }
    }
}
