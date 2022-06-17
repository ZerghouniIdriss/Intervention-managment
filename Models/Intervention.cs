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
        public int Age { get; set; }
        public DateTime? Admission_Date { get; set; }
        public DateTime? Sortie_Date { get; set; }

        public int Clinique { get; set; }
        public string Ref { get; set; }
        public string Motif { get; set; }
        public string Diag { get; set; }
        public string Examen_Clinique { get; set; }
        public string Biologie_hb { get; set; }
        public string Biologie_gb { get; set; }
        public string Biologie_plg { get; set; }
        public string Biologie_uree { get; set; }
        public string Biologie_crea { get; set; }
        public string Biologie_na{ get; set; }
        public string Biologie_k { get; set; }
        public string Biologie_ca{ get; set; }
        public string Biologie_glycemie { get; set; }
        public string Biologie_tp { get; set; }
        public string Biologie_inr { get; set; }
        public string Biologie_tck { get; set; }
        public string Biologie_crp { get; set; }
        public string Biologie_other { get; set; }
        public string Radiologie { get; set; }
        public string Operateur { get; set; }
        public string Mutualiste { get; set; }
        public string Conclusion { get; set; }
        public string MAJ { get; set; }
        public string RG { get; set; }
        public string NR { get; set; }
        public double Honoraire { get; set; }
        public double Remise { get; set; }
        public DateTime Update_Date { get; set; }
        public int Status { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
