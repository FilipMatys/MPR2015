<%@ Page Inherits="Microsoft.LightSwitch.Security.ServerGenerated.Implementation.LogInPageBase" MasterPageFile="~/public.Master" %>

<asp:Content id="loginPage" ContentPlaceHolderID="mainContent" Runat="Server">

<script runat="server">
    Protected Sub RegisterButton_Click(sender As Object, e As EventArgs)
        Response.Redirect("Register.aspx", True)
    End Sub
</script>


<form id="LogInForm" runat="server">
    <asp:Login ID="LoginUser" runat="server" EnableViewState="false" RenderOuterTable="false">
        <LayoutTemplate>
            <div class="accountInfo">
                <h2>Information system</h2>
                <div>
                    <asp:RequiredFieldValidator ID="UsernameRequired" runat="server" ControlToValidate="Username" ValidationGroup="LoginUserValidationGroup" Text="*" ToolTip="Username is required" CssClass="requiredStyle" />
                    <asp:TextBox ID="Username" runat="server" CssClass="textBoxStyle" placeholder="Username" />
                </div>
                <div>
                    <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" ValidationGroup="LoginUserValidationGroup" Text="*" ToolTip="Password is required" CssClass="requiredStyle" />
                    <asp:TextBox ID="Password" runat="server" TextMode="Password" CssClass="textBoxStyle" placeholder="Password"/>
                </div>
                <div class="submit-login">
                    <div class="rememberme">
                        <asp:CheckBox ID="RememberMe" runat="server" Text="Remember me next time" CssClass="checkStyle" />
                    </div>
                    <div style="margin-bottom: 10px;" class="logInBtn">
                        <asp:Button ID="LoginButton" runat="server" CommandName="Login" ValidationGroup="LoginUserValidationGroup" Text="Sign in" CssClass="btn btn-primary" />
                        <asp:Button ID="RegisterButton" runat="server" Text="Register as sponsor" CssClass="btn btn-primary" UseSubmitBehavior="False" OnClick="RegisterButton_Click" />
                        <asp:HyperLink NavigateUrl="~/Recover.aspx" ID="RecoverLink" runat="server">Forgot your password?</asp:HyperLink>
                    </div>
                </div>
                <span class="failureNotification">
                    <asp:Literal ID="FailureText" runat="server" />
                </span>
                <asp:ValidationSummary ID="LoginUserValidationSummary" runat="server" ValidationGroup="LoginUserValidationGroup" />
            </div>
        </LayoutTemplate>
    </asp:Login>
</form>
</asp:Content>