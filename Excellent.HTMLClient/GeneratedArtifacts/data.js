/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Company(entitySet) {
        /// <summary>
        /// Represents the Company entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this company.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this company.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this company.
        /// </field>
        /// <field name="ICO" type="String">
        /// Gets or sets the iCO for this company.
        /// </field>
        /// <field name="DIC" type="String">
        /// Gets or sets the dIC for this company.
        /// </field>
        /// <field name="Link" type="String">
        /// Gets or sets the link for this company.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this company.
        /// </field>
        /// <field name="Address" type="String">
        /// Gets or sets the address for this company.
        /// </field>
        /// <field name="ContactName" type="String">
        /// Gets or sets the contactName for this company.
        /// </field>
        /// <field name="ContactPhone" type="String">
        /// Gets or sets the contactPhone for this company.
        /// </field>
        /// <field name="Participations" type="msls.EntityCollection" elementType="msls.application.Participation">
        /// Gets the participations for this company.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this company.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this company.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this company.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this company.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this company.
        /// </field>
        /// <field name="details" type="msls.application.Company.Details">
        /// Gets the details for this company.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Participation(entitySet) {
        /// <summary>
        /// Represents the Participation entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this participation.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this participation.
        /// </field>
        /// <field name="ExpectedPayment" type="String">
        /// Gets or sets the expectedPayment for this participation.
        /// </field>
        /// <field name="NumAttendee" type="Number">
        /// Gets or sets the numAttendee for this participation.
        /// </field>
        /// <field name="State" type="String">
        /// Gets or sets the state for this participation.
        /// </field>
        /// <field name="SpecialRequests" type="String">
        /// Gets or sets the specialRequests for this participation.
        /// </field>
        /// <field name="Attachements" type="msls.EntityCollection" elementType="msls.application.Attachement">
        /// Gets the attachements for this participation.
        /// </field>
        /// <field name="Attendees" type="msls.EntityCollection" elementType="msls.application.Attendee">
        /// Gets the attendees for this participation.
        /// </field>
        /// <field name="Exceptions" type="msls.EntityCollection" elementType="msls.application.Exception">
        /// Gets the exceptions for this participation.
        /// </field>
        /// <field name="Conference" type="msls.application.Conference">
        /// Gets or sets the conference for this participation.
        /// </field>
        /// <field name="Company" type="msls.application.Company">
        /// Gets or sets the company for this participation.
        /// </field>
        /// <field name="Notes" type="msls.EntityCollection" elementType="msls.application.Note">
        /// Gets the notes for this participation.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this participation.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this participation.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this participation.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this participation.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this participation.
        /// </field>
        /// <field name="details" type="msls.application.Participation.Details">
        /// Gets the details for this participation.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Exception(entitySet) {
        /// <summary>
        /// Represents the Exception entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this exception.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this exception.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this exception.
        /// </field>
        /// <field name="DueDate" type="Date">
        /// Gets or sets the dueDate for this exception.
        /// </field>
        /// <field name="Participation" type="msls.application.Participation">
        /// Gets or sets the participation for this exception.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this exception.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this exception.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this exception.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this exception.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this exception.
        /// </field>
        /// <field name="details" type="msls.application.Exception.Details">
        /// Gets the details for this exception.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function User(entitySet) {
        /// <summary>
        /// Represents the User entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this user.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this user.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this user.
        /// </field>
        /// <field name="Login" type="String">
        /// Gets or sets the login for this user.
        /// </field>
        /// <field name="Password" type="String">
        /// Gets or sets the password for this user.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this user.
        /// </field>
        /// <field name="Role" type="String">
        /// Gets or sets the role for this user.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this user.
        /// </field>
        /// <field name="Notes" type="msls.EntityCollection" elementType="msls.application.Note">
        /// Gets the notes for this user.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this user.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this user.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this user.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this user.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this user.
        /// </field>
        /// <field name="details" type="msls.application.User.Details">
        /// Gets the details for this user.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Note(entitySet) {
        /// <summary>
        /// Represents the Note entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this note.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this note.
        /// </field>
        /// <field name="DateNote" type="Date">
        /// Gets or sets the dateNote for this note.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this note.
        /// </field>
        /// <field name="Participation" type="msls.application.Participation">
        /// Gets or sets the participation for this note.
        /// </field>
        /// <field name="User" type="msls.application.User">
        /// Gets or sets the user for this note.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this note.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this note.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this note.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this note.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this note.
        /// </field>
        /// <field name="details" type="msls.application.Note.Details">
        /// Gets the details for this note.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Attachement(entitySet) {
        /// <summary>
        /// Represents the Attachement entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this attachement.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this attachement.
        /// </field>
        /// <field name="type" type="String">
        /// Gets or sets the type for this attachement.
        /// </field>
        /// <field name="DateAtt" type="Date">
        /// Gets or sets the dateAtt for this attachement.
        /// </field>
        /// <field name="Data" type="String">
        /// Gets or sets the data for this attachement.
        /// </field>
        /// <field name="Participation" type="msls.application.Participation">
        /// Gets or sets the participation for this attachement.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this attachement.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this attachement.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this attachement.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this attachement.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this attachement.
        /// </field>
        /// <field name="details" type="msls.application.Attachement.Details">
        /// Gets the details for this attachement.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Attendee(entitySet) {
        /// <summary>
        /// Represents the Attendee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this attendee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this attendee.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this attendee.
        /// </field>
        /// <field name="Participation" type="msls.application.Participation">
        /// Gets or sets the participation for this attendee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this attendee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this attendee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this attendee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this attendee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this attendee.
        /// </field>
        /// <field name="details" type="msls.application.Attendee.Details">
        /// Gets the details for this attendee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Conference(entitySet) {
        /// <summary>
        /// Represents the Conference entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this conference.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this conference.
        /// </field>
        /// <field name="DateFrom" type="Date">
        /// Gets or sets the dateFrom for this conference.
        /// </field>
        /// <field name="DateTo" type="Date">
        /// Gets or sets the dateTo for this conference.
        /// </field>
        /// <field name="Place" type="String">
        /// Gets or sets the place for this conference.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this conference.
        /// </field>
        /// <field name="GoldMin" type="Number">
        /// Gets or sets the goldMin for this conference.
        /// </field>
        /// <field name="SilverMin" type="Number">
        /// Gets or sets the silverMin for this conference.
        /// </field>
        /// <field name="BronzeMin" type="Number">
        /// Gets or sets the bronzeMin for this conference.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this conference.
        /// </field>
        /// <field name="Deadlines" type="msls.EntityCollection" elementType="msls.application.Deadline">
        /// Gets the deadlines for this conference.
        /// </field>
        /// <field name="Participations" type="msls.EntityCollection" elementType="msls.application.Participation">
        /// Gets the participations for this conference.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this conference.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this conference.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this conference.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this conference.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this conference.
        /// </field>
        /// <field name="details" type="msls.application.Conference.Details">
        /// Gets the details for this conference.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Deadline(entitySet) {
        /// <summary>
        /// Represents the Deadline entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this deadline.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this deadline.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this deadline.
        /// </field>
        /// <field name="DateDead" type="Date">
        /// Gets or sets the dateDead for this deadline.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this deadline.
        /// </field>
        /// <field name="Conference" type="msls.application.Conference">
        /// Gets or sets the conference for this deadline.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this deadline.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this deadline.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this deadline.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this deadline.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this deadline.
        /// </field>
        /// <field name="details" type="msls.application.Deadline.Details">
        /// Gets the details for this deadline.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Companies" type="msls.EntitySet">
        /// Gets the Companies entity set.
        /// </field>
        /// <field name="Participations" type="msls.EntitySet">
        /// Gets the Participations entity set.
        /// </field>
        /// <field name="Exceptions" type="msls.EntitySet">
        /// Gets the Exceptions entity set.
        /// </field>
        /// <field name="Users" type="msls.EntitySet">
        /// Gets the Users entity set.
        /// </field>
        /// <field name="Notes" type="msls.EntitySet">
        /// Gets the Notes entity set.
        /// </field>
        /// <field name="Attachements" type="msls.EntitySet">
        /// Gets the Attachements entity set.
        /// </field>
        /// <field name="Attendees" type="msls.EntitySet">
        /// Gets the Attendees entity set.
        /// </field>
        /// <field name="Conferences" type="msls.EntitySet">
        /// Gets the Conferences entity set.
        /// </field>
        /// <field name="Deadlines" type="msls.EntitySet">
        /// Gets the Deadlines entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Company: $defineEntity(Company, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "ICO", type: String },
            { name: "DIC", type: String },
            { name: "Link", type: String },
            { name: "Description", type: String },
            { name: "Address", type: String },
            { name: "ContactName", type: String },
            { name: "ContactPhone", type: String },
            { name: "Participations", kind: "collection", elementType: Participation },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Participation: $defineEntity(Participation, [
            { name: "Id", type: Number },
            { name: "ExpectedPayment", type: String },
            { name: "NumAttendee", type: Number },
            { name: "State", type: String },
            { name: "SpecialRequests", type: String },
            { name: "Attachements", kind: "collection", elementType: Attachement },
            { name: "Attendees", kind: "collection", elementType: Attendee },
            { name: "Exceptions", kind: "collection", elementType: Exception },
            { name: "Conference", kind: "reference", type: Conference },
            { name: "Company", kind: "reference", type: Company },
            { name: "Notes", kind: "collection", elementType: Note },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Exception: $defineEntity(Exception, [
            { name: "Id", type: Number },
            { name: "Type", type: String },
            { name: "DueDate", type: Date },
            { name: "Participation", kind: "reference", type: Participation },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        User: $defineEntity(User, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "Login", type: String },
            { name: "Password", type: String },
            { name: "Email", type: String },
            { name: "Role", type: String },
            { name: "Phone", type: String },
            { name: "Notes", kind: "collection", elementType: Note },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Note: $defineEntity(Note, [
            { name: "Id", type: Number },
            { name: "DateNote", type: Date },
            { name: "Description", type: String },
            { name: "Participation", kind: "reference", type: Participation },
            { name: "User", kind: "reference", type: User },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Attachement: $defineEntity(Attachement, [
            { name: "Id", type: Number },
            { name: "type", type: String },
            { name: "DateAtt", type: Date },
            { name: "Data", type: String },
            { name: "Participation", kind: "reference", type: Participation },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Attendee: $defineEntity(Attendee, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "Participation", kind: "reference", type: Participation },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Conference: $defineEntity(Conference, [
            { name: "Id", type: Number },
            { name: "DateFrom", type: Date },
            { name: "DateTo", type: Date },
            { name: "Place", type: String },
            { name: "Description", type: String },
            { name: "GoldMin", type: Number },
            { name: "SilverMin", type: Number },
            { name: "BronzeMin", type: Number },
            { name: "Active", type: Boolean },
            { name: "Deadlines", kind: "collection", elementType: Deadline },
            { name: "Participations", kind: "collection", elementType: Participation },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Deadline: $defineEntity(Deadline, [
            { name: "Id", type: Number },
            { name: "Type", type: String },
            { name: "DateDead", type: Date },
            { name: "Description", type: String },
            { name: "Conference", kind: "reference", type: Conference },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Companies", elementType: Company },
            { name: "Participations", elementType: Participation },
            { name: "Exceptions", elementType: Exception },
            { name: "Users", elementType: User },
            { name: "Notes", elementType: Note },
            { name: "Attachements", elementType: Attachement },
            { name: "Attendees", elementType: Attendee },
            { name: "Conferences", elementType: Conference },
            { name: "Deadlines", elementType: Deadline }
        ], [
            {
                name: "Companies_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Companies },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Companies(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Participations_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Participations },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Participations(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Exceptions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Exceptions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Exceptions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Users_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Users },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Users(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Notes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Notes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Notes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Attachements_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Attachements },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Attachements(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Attendees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Attendees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Attendees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Conferences_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Conferences },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Conferences(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Deadlines_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Deadlines },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Deadlines(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
