<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Recover.aspx.cs" Inherits="LightSwitchApplication.Recover" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:TextBox ID="Email" runat="server"></asp:TextBox>
        <asp:Button ID="RecoverButton" runat="server" Text="Recover" OnClick="RecoverButton_Click" />
    
    </div>
    </form>
</body>
</html>
