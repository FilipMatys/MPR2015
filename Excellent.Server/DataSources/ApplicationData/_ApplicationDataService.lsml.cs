using System;
using System.Linq;
using System.Net.Mail;
using System.Web.Security;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void Users_Updating(User entity)
        {
            // set back original password if not changed
            if (string.IsNullOrEmpty(entity.Password))
            {
                var originalPassword = entity.Details.Properties.Password.OriginalValue;
                entity.Password = originalPassword;
            }
        }

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

            using (var client = new SmtpClient())
            {
                var mail = new MailMessage
                {
                    Subject = "Account created",
                    Body = string.Format("User name: {0}\nPassword: {1}", entity.Login, entity.Password)
                };
                mail.To.Add(entity.Email);

                client.Send(mail);
            }
        }

        partial void PastCompanyParticipations_PreprocessQuery(ref IQueryable<Participation> query)
        {
            query = query.Where(t => t.Company.User.Login == Application.User.Identity.Name);
        }

        partial void Notes_Inserting(Note entity)
        {
            // set note user to current user
            entity.User = CurrentUser();
        }

        partial void CurrentUser_PreprocessQuery(ref IQueryable<User> query)
        {
            var currentUserUid = Application.User.Identity.Name;
            query = from user in query where user.Login == currentUserUid select user;
        }

        private void UpdateComputedAttributes(Participation entity)
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
        }

        partial void Participations_Inserting(Participation entity)
        {
            UpdateComputedAttributes(entity);

            entity.State = "Registered";
        }

        partial void Participations_Updating(Participation entity)
        {
            UpdateComputedAttributes(entity);
        }

        private void UpdateComputedAttributes(Conference entity)
        {
            entity.ConfYear = entity.DateFrom.Year;
        }

        partial void Conferences_Inserting(Conference entity)
        {
            UpdateComputedAttributes(entity);
        }

        partial void Conferences_Updating(Conference entity)
        {
            UpdateComputedAttributes(entity);
        }

        partial void ParticipationsFilter_PreprocessQuery(string CompanyName, string ICO, decimal? MinExpectedPayment, decimal? MaxExpectedPayment, string CompanyContactPersonName, string Email, string Phone, string State, string Sponsorship, string IsPaid, int? MinConfYear, int? MaxConfYear, int? ConferenceId, int? ContactPersonId, int? CompanyId, ref IQueryable<Participation> query)
        {
            if (ContactPersonId != null)
            {
                query = query.Where(t => t.UserParticipations.Any(s => s.User.Id == ContactPersonId));
            }
        }

        partial void Attachements_Updated(Attachement entity)
        {
            if (entity.Data == null)
                return;

            switch (entity.Type)
            {
                case "Contract":
                    if (entity.Participation.State == "Approved")
                        entity.Participation.State = "ContractSigned";
                    break;
                default:
                    break;
            }
        }

        partial void UserParticipations_Inserted(UserParticipation entity)
        {
            if (entity.Participation.State == "Registered")
            {
                entity.Participation.State = "Approved";
            }
        }

        partial void Conferences_Updated(Conference entity)
        {
            switch (entity.Active)
            {
                case "Closed":
                    foreach (var participation in entity.Participations.Where(t => t.State != "Cancelled"))
                    {
                        participation.State = "Completed";
                    }

                    break;
                default:
                    break;
            }
        }
    }
}
