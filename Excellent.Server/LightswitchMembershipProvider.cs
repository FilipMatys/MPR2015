using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Framework;
using Microsoft.LightSwitch.Server;
using System;
using System.Web.Security;

namespace LightSwitchApplication
{
    public sealed class LightswitchMembershipProvider : MembershipProvider
    {
        private ServerApplicationContext Context
        {
            get
            {
                return ServerApplicationContext.Current ?? ServerApplicationContext.CreateContext(ServerApplicationContextCreationOptions.SkipAuthentication);
            }
        }

        private ApplicationDataService ApplicationData
        {
            get
            {
                return Context.DataWorkspace.ApplicationData;
            }
        }

        private EntitySet<User> Users
        {
            get
            {
                return ApplicationData.Users;
            }
        }

        private static MembershipUser ConvertToMembershipUser(User user)
        {
            return new MembershipUser("", user.Login, user.Id, user.Email, null, null, true, false, user.Created.Value.DateTime, DateTime.MinValue, DateTime.MinValue, DateTime.MinValue, DateTime.MinValue);
        }

        public override string ApplicationName { get; set; }

        private User GetByUsername(string username)
        {
            return (from u in Users where u.Login == username select u).SingleOrDefault();
        }

        public override bool ChangePassword(string username, string oldPassword, string newPassword)
        {
            throw new NotImplementedException();
        }

        public override bool ChangePasswordQuestionAndAnswer(string username, string password, string newPasswordQuestion, string newPasswordAnswer)
        {
            throw new NotImplementedException();
        }

        public override MembershipUser CreateUser(string username, string password, string email, string passwordQuestion, string passwordAnswer, bool isApproved, object providerUserKey, out MembershipCreateStatus status)
        {
            throw new NotImplementedException();
        }

        public override bool DeleteUser(string username, bool deleteAllRelatedData)
        {
            throw new NotImplementedException();
        }

        public override bool EnablePasswordReset
        {
            get
            {
                return true;
            }
        }

        public override bool EnablePasswordRetrieval
        {
            get
            {
                return false;
            }
        }

        public override MembershipUserCollection FindUsersByEmail(string emailToMatch, int pageIndex, int pageSize, out int totalRecords)
        {
            var users = (from user in Users
                         where user.Email == emailToMatch
                         select
                             ConvertToMembershipUser(user))
                            .Skip(pageIndex * pageSize).Take(pageSize);
            var result = new MembershipUserCollection();
            result.AddRange(users.Execute());
            totalRecords = result.Count;
            return result;
        }

        public override MembershipUserCollection FindUsersByName(string usernameToMatch, int pageIndex, int pageSize, out int totalRecords)
        {
            var users = (from user in Users
                         where user.Login == usernameToMatch
                         select
                             ConvertToMembershipUser(user))
                            .Skip(pageIndex * pageSize).Take(pageSize); ;
            var result = new MembershipUserCollection();
            result.AddRange(users.Execute());
            totalRecords = result.Count;
            return result;
        }

        public override MembershipUserCollection GetAllUsers(int pageIndex, int pageSize, out int totalRecords)
        {
            var users = (from user in Users
                         select
                             ConvertToMembershipUser(user))
                            .Skip(pageIndex * pageSize).Take(pageSize);
            var result = new MembershipUserCollection();
            result.AddRange(users.Execute());
            totalRecords = result.Count;
            return result;
        }

        public override int GetNumberOfUsersOnline()
        {
            return 0;
        }

        public override string GetPassword(string username, string answer)
        {
            throw new NotImplementedException();
        }

        public override MembershipUser GetUser(string username, bool userIsOnline)
        {
            return ConvertToMembershipUser(GetByUsername(username));
        }

        public override MembershipUser GetUser(object providerUserKey, bool userIsOnline)
        {
            var u = (from user in Users where user.Id == (int)providerUserKey select user).Single();
            return ConvertToMembershipUser(u);
        }

        public override string GetUserNameByEmail(string email)
        {
            return (from user in Users where user.Email == email select user.Login).Single();
        }

        public override int MaxInvalidPasswordAttempts
        {
            get
            {
                return int.MaxValue;
            }
        }

        public override int MinRequiredNonAlphanumericCharacters
        {
            get
            {
                return 0;
            }
        }

        public override int MinRequiredPasswordLength
        {
            get
            {
                return 5;
            }
        }

        public override int PasswordAttemptWindow
        {
            get
            {
                return 0;
            }
        }

        public override MembershipPasswordFormat PasswordFormat
        {
            get
            {
                return MembershipPasswordFormat.Hashed;
            }
        }

        public override string PasswordStrengthRegularExpression
        {
            get
            {
                return ".*";
            }
        }

        public override bool RequiresQuestionAndAnswer
        {
            get
            {
                return false;
            }
        }

        public override bool RequiresUniqueEmail
        {
            get
            {
                return true;
            }
        }

        public override string ResetPassword(string username, string answer)
        {
            throw new NotImplementedException();
        }

        public override bool UnlockUser(string userName)
        {
            throw new NotImplementedException();
        }

        public override void UpdateUser(MembershipUser user)
        {
            throw new NotImplementedException();
        }

        public override bool ValidateUser(string username, string password)
        {
            var user = GetByUsername(username);
            if (user == null)
                return false;

            return user.Password == password;
        }
    }
}
