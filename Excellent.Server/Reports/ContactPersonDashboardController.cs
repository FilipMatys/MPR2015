using Microsoft.LightSwitch;
using System;
using System.Linq;
using System.Web.Http;

namespace LightSwitchApplication.Reports
{
    /// <summary>
    /// Contact person dashboard data provider.
    /// </summary>
    public class ContactPersonDashboardController : ApiController
    {
        /// <summary>
        /// GET api/<controller>
        /// </summary>
        /// <returns>dashboard data</returns>
        public ContactPersonDashboardData Get()
        {
            using (var context = ServerApplicationContext.CreateContext())
            {
                var data = new ContactPersonDashboardData();

                var conference = context.DataWorkspace.ApplicationData.ActiveConference().SingleOrDefault();
                if (conference != null)
                {
                    var currentUserUid = context.Application.User.Identity.Name;

                    data.Active = true;
                    data.Year = conference.DateFrom.Year;
                    data.Place = conference.Place;
                    data.AssignedParticipations = conference.Participations.Count(t => t.UserParticipations.Any(s => s.User.Login == currentUserUid));
                    data.ActiveParticipations = conference.Participations.Count(t => t.State == "Completed");
                    data.UnassignedParticipations = conference.Participations.Count(t => !t.UserParticipations.Any());
                    data.SignedContracts = conference.Participations.Count(t => t.State == "ContractSigned");
                    data.PaidSponsorships = conference.Participations.Count(t => t.State == "Paid");
                }

                data.CompaniesCount = context.DataWorkspace.ApplicationData.Companies.Count();

                return data;
            }
        }
    }

    /// <summary>
    /// Contact person dashboard data.
    /// </summary>
    public class ContactPersonDashboardData
    {
        public bool Active { get; set; }
        public int Year { get; set; }
        public string Place { get; set; }
        public int AssignedParticipations { get; set; }
        public int ActiveParticipations { get; set; }
        public int UnassignedParticipations { get; set; }
        public int CompaniesCount { get; set; }
        public int SignedContracts { get; set; }
        public int PaidSponsorships { get; set; }

    }
}
