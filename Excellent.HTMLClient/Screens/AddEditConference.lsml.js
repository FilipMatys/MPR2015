/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditConference.ContractLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Contract";
};
myapp.AddEditConference.NumberOfParticipantsLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Number Of Participants";
};
myapp.AddEditConference.ParticipantsLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Participants";
};
myapp.AddEditConference.LogoLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Logo";
};
myapp.AddEditConference.PosterLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Poster";
};
myapp.AddEditConference.VideoPresentationLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Video Presentation";
};
myapp.AddEditConference.PresentationListLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Presentation List";
};
myapp.AddEditConference.ContractDescription_postRender = function (element, contentItem) {
    // Write code here.
    
};
myapp.AddEditConference.setClose_execute = function (screen) {
    // Write code here.
    screen.Conference.Active = false;

};
myapp.AddEditConference.setActive_execute = function (screen) {
    // Write code here.
   // EntityCollection<Conference> con;
  //  IDataServiceQueryable<Conference> conQuery;

    
    screen.details.dataWorkspace
        .ApplicationData
        .setNotActive()
        .execute();
        
    //myapp.activeWorkspace.AplicationData.setNotActive().execute();

    // screen.

    //IDataServiceQueryable<Conference> orders = ( from o in this.DataWorkspace.SalesData.Orders 
//orderby o.Discount descending selecto).Take(10); 

    screen.Conference.Active = true;
    //screen.Conference.Description = "True";
};