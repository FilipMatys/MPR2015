using Microsoft.LightSwitch;
using System.Linq;

namespace LightSwitchApplication
{
    public partial class User
    {
        partial void Login_Validate(EntityValidationResultsBuilder results)
        {
            var dup = (from u in this.DataWorkspace.ApplicationData.Users
                         where u.Id != this.Id && u.Login == this.Login
                         select u);
            if (dup.Execute().Any())
                results.AddPropertyError("Username " + this.Login + " already exists.");
        }

        partial void Email_Validate(EntityValidationResultsBuilder results)
        {
            var dup = (from u in this.DataWorkspace.ApplicationData.Users
                       where u.Id != this.Id && u.Email == this.Email
                       select u);
            if (dup.Execute().Any())
                results.AddPropertyError("Email " + this.Email + " already exists.");
        }

        partial void Password_Validate(EntityValidationResultsBuilder results)
        {
            if (Id == 0 && string.IsNullOrEmpty(Password))
                results.AddPropertyError("Password is required");
        }
    }
}
