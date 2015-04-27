using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Server;
using System;
using System.Web.UI;

namespace LightSwitchApplication
{
    public partial class Register : Page
    {
        protected void submit_Click(object sender, EventArgs e)
        {
            if (!Page.IsValid)
                return;

            using (var context = ServerApplicationContext.CreateContext(ServerApplicationContextCreationOptions.SkipAuthentication))
            {
                var user = context.DataWorkspace.ApplicationData.Users.AddNew();
                user.Login = username.Text;
                user.Password = password.Text;
                user.Email = email.Text;
                user.Phone = phoneNumber.Text;
                user.Role = "Company";
                user.Name = companyName.Text;

                var company = context.DataWorkspace.ApplicationData.Companies.AddNew();
                company.Name = companyName.Text;
                company.ICO = identificationNumber.Text;
                company.DIC = vatIdentificationNumber.Text;
                company.ContactName = contactPersonName.Text;
                company.ContactPhone = phoneNumber.Text;
                company.Link = link.Text;
                company.Address = address.Text;

                user.Company = company;

                if (participate.Checked)
                {
                    var conference = (from c in context.DataWorkspace.ApplicationData.Conferences where c.Active select c).SingleOrDefault();
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

            Response.Redirect("LogIn.aspx", true);
        }
    }
}
