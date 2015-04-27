<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="LightSwitchApplication.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="registerForm" runat="server">
        <asp:HyperLink runat="server" NavigateUrl="~/LogIn.aspx">Back</asp:HyperLink>

        <h1>Register</h1>

        <div>
            <asp:Label runat="server" AssociatedControlID="username" Text="Username"></asp:Label>
            <asp:TextBox ID="username" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="usernameValidator" runat="server" ErrorMessage="Username is required" ControlToValidate="username"></asp:RequiredFieldValidator>

            <asp:Label runat="server" AssociatedControlID="password" Text="Password"></asp:Label>
            <asp:TextBox ID="password" TextMode="Password" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="passwordValidator" runat="server" ErrorMessage="Password is required" ControlToValidate="password"></asp:RequiredFieldValidator>
        
            <asp:Label runat="server" AssociatedControlID="passwordCheck" Text="Password check"></asp:Label>
            <asp:TextBox ID="passwordCheck" TextMode="Password" runat="server"></asp:TextBox>
            <asp:CompareValidator ID="passwordCompareValidator" runat="server" ErrorMessage="Passwords must match" ControlToValidate="password" ControlToCompare="passwordCheck" ></asp:CompareValidator>

            <asp:Label runat="server" AssociatedControlID="companyName" Text="Company name"></asp:Label>
            <asp:TextBox ID="companyName" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="companyNameValidator" runat="server" ErrorMessage="Company name is required" ControlToValidate="companyName"></asp:RequiredFieldValidator>

            <asp:Label runat="server" AssociatedControlID="identificationNumber" Text="Identification number"></asp:Label>
            <asp:TextBox ID="identificationNumber" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="identificationNumberValidator" runat="server" ErrorMessage="Identification number is required" ControlToValidate="identificationNumber"></asp:RequiredFieldValidator>

            <asp:Label runat="server" AssociatedControlID="vatIdentificationNumber" Text="VAT Identification number"></asp:Label>
            <asp:TextBox ID="vatIdentificationNumber" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="vatIdentificationNumberValidator" runat="server" ErrorMessage="VAT identification number is required" ControlToValidate="vatIdentificationNumber"></asp:RequiredFieldValidator>

            <asp:Label runat="server" AssociatedControlID="participate" Text="Participate in the upcoming event"></asp:Label>
            <asp:CheckBox ID="participate" runat="server" />

            <asp:Label runat="server" AssociatedControlID="address" Text="Address"></asp:Label>
            <asp:TextBox ID="address" TextMode="MultiLine" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="addressValidator" runat="server" ErrorMessage="Address is required" ControlToValidate="address"></asp:RequiredFieldValidator>

            <asp:Label runat="server" AssociatedControlID="contactPersonName" Text="Contact person name"></asp:Label>
            <asp:TextBox ID="contactPersonName" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="contactPersonNameValidator" runat="server" ErrorMessage="Contact person name is required" ControlToValidate="contactPersonName"></asp:RequiredFieldValidator>

            <asp:Label runat="server" AssociatedControlID="phoneNumber" Text="Phone number"></asp:Label>
            <asp:TextBox ID="phoneNumber" TextMode="Phone" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="phoneNumberValidator" runat="server" ErrorMessage="Phone number is required" ControlToValidate="phoneNumber"></asp:RequiredFieldValidator>

            <asp:Label runat="server" AssociatedControlID="email" Text="Email"></asp:Label>
            <asp:TextBox ID="email" TextMode="Email" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="emailValidator" runat="server" ErrorMessage="Email is required" ControlToValidate="email"></asp:RequiredFieldValidator>

            <asp:Label runat="server" AssociatedControlID="link" Text="Link"></asp:Label>
            <asp:TextBox ID="link" TextMode="Url" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="linkValidator" runat="server" ErrorMessage="Link is required" ControlToValidate="link"></asp:RequiredFieldValidator>

            <asp:Button ID="submit" runat="server" Text="Register" OnClick="submit_Click" />
    
        </div>
        <asp:ValidationSummary ID="ValidationSummary1" runat="server" />

        <asp:ScriptManager runat="server">
            <Scripts>
                <asp:ScriptReference Name="jquery" />
            </Scripts>
        </asp:ScriptManager>
    </form>
</body>
</html>
