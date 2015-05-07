using Microsoft.LightSwitch;
using System.Linq;
using System.Web.Security;
using System;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void Users_Updated(User entity)
        {
            var membershipUser = Membership.FindUsersByName(entity.Login).Cast<MembershipUser>().SingleOrDefault();
            if (membershipUser != null)
            {
                membershipUser.Email = entity.Email;
                membershipUser.ChangePassword(membershipUser.ResetPassword(), entity.Password);
                Membership.UpdateUser(membershipUser);
            }
        }

        partial void Users_Deleted(User entity)
        {
            Membership.DeleteUser(entity.Login);
        }

        partial void Users_Inserted(User entity)
        {
            Membership.CreateUser(entity.Login, entity.Password, entity.Email);
        }

        partial void PastCompanyParticipations_PreprocessQuery(ref IQueryable<Participation> query)
        {
            query = query.Where(t => t.Company.User.Login == Application.User.Identity.Name);
        }

        partial void setNotActive_PreprocessQuery(ref IQueryable<Conference> query)
        {
            foreach (Conference con in Conferences)
            {
                //con.Active = true;
                if (con.Active)
                {
                    con.Active = false;
                    
                    break;
                }
            }
            this.DataWorkspace.ApplicationData.SaveChanges();
        }

        partial void Notes_Inserting(Note entity)
        {
            // set note user to current user
            entity.User = CurrentUser;
        }

        /// <summary>
        /// Gets current user.
        /// </summary>
        private User CurrentUser
        {
            get
            {
                var currentUserUid = Application.User.Identity.Name;
                return Users.Where(t => t.Login == currentUserUid).SingleOrDefault();
            }
        }

        partial void Participations_Inserting(Participation entity)
        {
            // sponsorship level
            var payment = entity.ExpectedPayment;

            if (payment >= entity.Conference.GoldMin)
            {
                entity.Sponsorship = "Gold";
            }
            else if ((payment >= entity.Conference.SilverMin) && (payment < entity.Conference.GoldMin))
            {
                entity.Sponsorship = "Silver";
            }
            else if ((payment >= entity.Conference.BronzeMin) && (payment < entity.Conference.SilverMin))
            {
                entity.Sponsorship = "Bronze";
            }
            else
            {
                entity.Sponsorship = "Without";
            }

            // is paid
            var actState = entity.State;

            if ((actState == "Paid") || (actState == "Completed"))
            {
                entity.IsPaid = "Yes";
            }
            else
            {
                entity.IsPaid = "No";
            }

            // year
            var confDate = entity.Conference.DateFrom;
            string year = confDate.ToString("yyyy");
            entity.ConfYear = Convert.ToInt32(year);
        }

        partial void Participations_Updating(Participation entity)
        {
            // sponsorship level
            var payment = entity.ExpectedPayment;

            if (payment >= entity.Conference.GoldMin)
            {
                entity.Sponsorship = "Gold";
            }
            else if ((payment >= entity.Conference.SilverMin) && (payment < entity.Conference.GoldMin))
            {
                entity.Sponsorship = "Silver";
            }
            else if ((payment >= entity.Conference.BronzeMin) && (payment < entity.Conference.SilverMin))
            {
                entity.Sponsorship = "Bronze";
            }
            else
            {
                entity.Sponsorship = "Without";
            }

            // is paid
            var actState = entity.State;

            if ((actState == "Paid") || (actState == "Completed"))
            {
                entity.IsPaid = "Yes";
            }
            else
            {
                entity.IsPaid = "No";
            }

            // year
            var confDate = entity.Conference.DateFrom;
            string year = confDate.ToString("yyyy");
            entity.ConfYear = Convert.ToInt32(year);
        }
    }
}
