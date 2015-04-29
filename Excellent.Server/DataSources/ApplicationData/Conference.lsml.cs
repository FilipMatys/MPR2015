using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;



namespace LightSwitchApplication
{
    public partial class Conference
    {
        partial void Conference_Created()
        {
            Exception ex;
            ex = new Exception();
            throw new ArgumentException("A start-up parameter is required.");
            Console.WriteLine("First display of filenames to the console:");
            //MessageBox.Show("Do you want to save changes?");
            this.Description = "Kocourkov";
            /*Deadline ded = new Deadline();
            ded.Description = "pokkku";
            ded.Type = "Logo";
            this.Deadlines.Add(ded);
            this.Deadlines.AddNew();
            */
        }
    }
}
