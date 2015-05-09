using Microsoft.LightSwitch.Server;
using System;
using System.Web.UI;

namespace LightSwitchApplication
{
    /// <summary>
    /// Public registration page.
    /// </summary>
    public partial class Register : Page
    {
        /// <summary>
        /// Page load event handler.
        /// </summary>
        /// <param name="sender">event sender</param>
        /// <param name="e">event args</param>
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack)
                return;

            using (var context = ServerApplicationContext.CreateContext(ServerApplicationContextCreationOptions.SkipAuthentication))
            {
                participate.Visible = context.DataWorkspace.ApplicationData.ActiveConference() != null;
            }
        }

        /// <summary>
        /// Form submit event handler.
        /// </summary>
        /// <param name="sender">event sender</param>
        /// <param name="e">event args</param>
        protected void submit_Click(object sender, EventArgs e)
        {
            if (!Page.IsValid)
                return;

            using (var context = ServerApplicationContext.CreateContext(ServerApplicationContextCreationOptions.SkipAuthentication))
            {
                // create new user with associated company
                var user = context.DataWorkspace.ApplicationData.Users.AddNew();
                user.Login = username.Text;
                user.Password = password.Text;
                user.Email = email.Text;
                user.Phone = phoneNumber.Text;
                user.Role = "Company";
                user.Name = contactPersonName.Text;

                var company = context.DataWorkspace.ApplicationData.Companies.AddNew();
                company.Name = companyName.Text;
                company.ICO = identificationNumber.Text;
                company.DIC = vatIdentificationNumber.Text;
                company.Link = link.Text;
                company.Address = address.Text;

                user.Company = company;

                // create participation on active conference, if required
                if (participate.Checked)
                {
                    var conference = context.DataWorkspace.ApplicationData.ActiveConference();
                    if (conference != null)
                    {
                        var participation = context.DataWorkspace.ApplicationData.Participations.AddNew();

                        participation.Company = company;
                        participation.Conference = conference;
                        participation.State = "Registered";
                    }
                }

                // save registration
                context.DataWorkspace.ApplicationData.SaveChanges();
            }

            // after sucessful save, redirect to login page
            Response.Redirect("LogIn.aspx", true);
        }
    }
}
