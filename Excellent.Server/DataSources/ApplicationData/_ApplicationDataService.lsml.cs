﻿using System.Linq;
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
    }
}