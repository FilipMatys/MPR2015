using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class User
    {
        partial void Login_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            var dup = (from u in this.DataWorkspace.ApplicationData.Users
                         where u.Id != this.Id && u.Login == this.Login
                         select u);
            if (dup.Cast<User>().Count() > 0)
                results.AddPropertyError("Username " + this.Login + " already exists.");
            return;
        }

        partial void Email_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            var dup = (from u in this.DataWorkspace.ApplicationData.Users
                       where u.Id != this.Id && u.Email == this.Email
                       select u);
            if (dup.Cast<User>().Count() > 0)
                results.AddPropertyError("Email " + this.Email + " already exists.");
            return;
        }
    }
}
