using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Project3.Models
{
    [Table("Cliniques")]

    public class Clinique
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
