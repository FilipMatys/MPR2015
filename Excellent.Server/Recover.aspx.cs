using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LightSwitchApplication
{
    public partial class Recover : Page
    {
        protected void PasswordRecovery_VerifyingUser(object sender, LoginCancelEventArgs e)
        {
            PasswordRecovery.UserName = Membership.FindUsersByEmail(PasswordRecovery.UserName).Cast<MembershipUser>().Select(t => t.UserName).FirstOrDefault();
        }
    }
}
