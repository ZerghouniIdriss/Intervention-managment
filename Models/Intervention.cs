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
        public string Diag { get; set; }
        public string Examen_Clinique { get; set; }
        public string Radiologie { get; set; }
        public string Operateur { get; set; }
        public string Mutualiste { get; set; }
        public string Conclusion { get; set; }
        public string MAJ { get; set; }
        public double Honoraire { get; set; }
        public double Remise { get; set; }
        public int Status { get; set; }
    }
}
