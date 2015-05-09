<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Recover.aspx.cs" Inherits="LightSwitchApplication.Recover" MasterPageFile="~/public.Master" %>

<asp:Content ID="recoverPage" ContentPlaceHolderID="mainContent" runat="Server">
    <form id="form1" runat="server">
        <div class="accountInfo">
            <h2>Recover</h2>
            <asp:PasswordRecovery ID="PasswordRecovery" runat="server" OnVerifyingUser="PasswordRecovery_VerifyingUser">
                <UserNameTemplate>
                    <asp:TextBox runat="server" ID="UserName" placeholder="Email address" CssClass="btm-space"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ControlToValidate="UserName" ErrorMessage="User Name is required." ValidationGroup="PasswordRecovery" ToolTip="User Name is required." ID="UserNameRequired">*</asp:RequiredFieldValidator>
                    <asp:Literal runat="server" ID="FailureText" EnableViewState="False"></asp:Literal>
                    <asp:Button runat="server" CommandName="Submit" CssClass="btn btn-primary fullWidth" Text="Recover" ValidationGroup="PasswordRecovery" ID="SubmitButton"></asp:Button>
                </UserNameTemplate>
            </asp:PasswordRecovery>
        </div>
    </form>
</asp:Content>
