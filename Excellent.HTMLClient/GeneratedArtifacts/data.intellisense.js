/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Company, {
        /// <field>
        /// Called when a new company is created.
        /// <br/>created(msls.application.Company entity)
        /// </field>
        created: [lightSwitchApplication.Company]
    });

    msls._addEntryPoints(lightSwitchApplication.Participation, {
        /// <field>
        /// Called when a new participation is created.
        /// <br/>created(msls.application.Participation entity)
        /// </field>
        created: [lightSwitchApplication.Participation]
    });

    msls._addEntryPoints(lightSwitchApplication.Exception, {
        /// <field>
        /// Called when a new exception is created.
        /// <br/>created(msls.application.Exception entity)
        /// </field>
        created: [lightSwitchApplication.Exception]
    });

    msls._addEntryPoints(lightSwitchApplication.User, {
        /// <field>
        /// Called when a new user is created.
        /// <br/>created(msls.application.User entity)
        /// </field>
        created: [lightSwitchApplication.User]
    });

    msls._addEntryPoints(lightSwitchApplication.Note, {
        /// <field>
        /// Called when a new note is created.
        /// <br/>created(msls.application.Note entity)
        /// </field>
        created: [lightSwitchApplication.Note]
    });

    msls._addEntryPoints(lightSwitchApplication.Attachement, {
        /// <field>
        /// Called when a new attachement is created.
        /// <br/>created(msls.application.Attachement entity)
        /// </field>
        created: [lightSwitchApplication.Attachement]
    });

    msls._addEntryPoints(lightSwitchApplication.Attendee, {
        /// <field>
        /// Called when a new attendee is created.
        /// <br/>created(msls.application.Attendee entity)
        /// </field>
        created: [lightSwitchApplication.Attendee]
    });

    msls._addEntryPoints(lightSwitchApplication.Conference, {
        /// <field>
        /// Called when a new conference is created.
        /// <br/>created(msls.application.Conference entity)
        /// </field>
        created: [lightSwitchApplication.Conference]
    });

    msls._addEntryPoints(lightSwitchApplication.Deadline, {
        /// <field>
        /// Called when a new deadline is created.
        /// <br/>created(msls.application.Deadline entity)
        /// </field>
        created: [lightSwitchApplication.Deadline]
    });

}(msls.application));
