using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;

namespace LightSwitchApplication
{
    /// <summary>
    /// ASP.NET extension methods.
    /// </summary>
    public static class Extensions
    {
        /// <summary>
        /// Add list of users into membership user collection.
        /// </summary>
        /// <param name="collection">membership user collection</param>
        /// <param name="users">users list</param>
        public static void AddRange(this MembershipUserCollection collection, IEnumerable<MembershipUser> users)
        {
            foreach (var user in users)
                collection.Add(user);
        }
    }
}
