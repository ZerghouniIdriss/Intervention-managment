using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Project3.Models
{
   
    [Table("Interventions")]

    public class Intervention
    {
        [Key]
        public int Id { get; set; }
        public string F_Name { get; set; }
        public string L_Name { get; set; }
        public string Admission_Date { get; set; }
        public int Clinique { get; set; }
        public string Ref { get; set; }
        public string Motif { get; set; }
        public int Status { get; set; }
    }
}
