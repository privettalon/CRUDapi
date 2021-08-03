using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Organization
    {
        [Key]
        public int OrganizationId { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string OrganizationName { get; set; }
        [Column(TypeName = "nvarchar (50)")]
        public string Location { get; set; }

        public int NumberOfStuff { get; set; }
        
        [Column(TypeName = ("nvarchar (12)"))]
        public string ContactNumber { get; set; }
    }
}
