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
    screen.findContentItem('setClose').isEnabled = false;
    screen.findContentItem('setActive').isEnabled = true;

};
myapp.AddEditConference.setActive_execute = function (screen) {
    // Write code here.
   
    screen.details.dataWorkspace
        .ApplicationData
        .setNotActive()
        .execute();
        

    screen.Conference.Active = true;
    screen.findContentItem('setClose').isEnabled = true;
    screen.findContentItem('setActive').isEnabled = false;
};

myapp.AddEditConference.created = function (screen) {
    // Write code here.
    if (screen.Conference.Active == false) {

        screen.findContentItem('setClose').isEnabled = false;
    }
    if (screen.Conference.Active == true) {

        screen.findContentItem('setActive').isEnabled = false;
    }
};