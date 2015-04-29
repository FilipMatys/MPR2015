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
myapp.AddEditConference.created = function (screen) {
    // Write code here.
    //Deadline ded; 
    //screen.Deadlines.addNew();

    //screen.getDeadlines();

    //int i;
    //for(i = 0; i < screen.Deadlin)

    //screen.Deadlines.data
    
    

    //lightSwitchApplication.Deadline;
};

myapp.AddEditConference.Deadlines1Template_render = function (element, contentItem) {
    // Write code here.
    var idd = $("<p>id|" + contentItem.value.Id + "|id</p>");
    var orderDate = $("<p>" + contentItem.value.Type + "</p>");
    if (contentItem.value.Type == "Logo") {
        var pok = $("<textarea>This is where the user can enter text...</textarea>");
    }
    idd.appendTo($(element));
    orderDate.appendTo($(element));
    pok.appendTo($(element));
    
};
