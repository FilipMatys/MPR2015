using System.Linq;
using System.Web.Security;

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
    }
}
