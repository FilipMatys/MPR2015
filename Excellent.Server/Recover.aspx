<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Recover.aspx.cs" Inherits="LightSwitchApplication.Recover" MasterPageFile="~/public.Master" %>


<asp:Content id="recoverPage" ContentPlaceHolderID="mainContent" Runat="Server">
    <form id="form1" runat="server">
    <div class="accountInfo">
        <h2>Recover</h2>
        <asp:TextBox ID="Email" placeholder="Email address" CssClass="btm-space" runat="server"></asp:TextBox>
        <asp:Button ID="RecoverButton" runat="server" CssClass="btn btn-primary fullWidth" Text="Recover" OnClick="RecoverButton_Click" />
    </div>
    </form>
</asp:Content>