﻿using Microsoft.LightSwitch;
using System;
using System.Linq;
using System.Web.Http;

namespace LightSwitchApplication.Reports
{
    /// <summary>
    /// Administrator dashboard data provider.
    /// </summary>
    public class AdminDashboardController : ApiController
    {
        /// <summary>
        /// GET api/<controller>
        /// </summary>
        /// <returns>dashboard data</returns>
        public AdminDashboardData Get()
        {
            using (var context = ServerApplicationContext.CreateContext())
            {
                var data = new AdminDashboardData();

                var conference = context.DataWorkspace.ApplicationData.ActiveConference();
                if (conference != null)
                {
                    data.Active = true;
                    data.Year = conference.DateFrom.Year;
                    data.Place = conference.Place;
                    data.MoneyReceived = conference.Participations.Select(t => t.ExpectedPayment).DefaultIfEmpty(0).Sum();
                    data.DaysRemaining = (conference.DateFrom - DateTime.Now).Days;
                    data.PendingParticipations = conference.Participations.Where(t => t.State == "Registered").Count();
                    data.ActiveParticipations = conference.Participations.Where(t => t.State != "Completed").Count();
                    data.GoldCount = conference.Participations.Where(t => t.ExpectedPayment >= conference.GoldMin).Count();
                    data.SilverCount = conference.Participations.Where(t => t.ExpectedPayment >= conference.SilverMin && t.ExpectedPayment < conference.GoldMin).Count();
                    data.BronzeCount = conference.Participations.Where(t => t.ExpectedPayment >= conference.BronzeMin && t.ExpectedPayment < conference.SilverMin).Count();
                }

                data.CompaniesCount = context.DataWorkspace.ApplicationData.Companies.Count();

                return data;
            }
        }
    }

    /// <summary>
    /// Administrator dashboard data.
    /// </summary>
    public class AdminDashboardData
    {
        public bool Active { get; set; }
        public int Year { get; set; }
        public string Place { get; set; }
        public decimal MoneyReceived { get; set; }
        public int DaysRemaining { get; set; }
        public int PendingParticipations { get; set; }
        public int ActiveParticipations { get; set; }
        public int CompaniesCount { get; set; }
        public int GoldCount { get; set; }
        public int SilverCount { get; set; }
        public int BronzeCount { get; set; }
    }
}
