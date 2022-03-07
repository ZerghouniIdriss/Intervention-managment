using Microsoft.EntityFrameworkCore.Migrations;

namespace Project3.Data.Migrations
{
    public partial class addexamenclinique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Examen_Clinique",
                table: "Interventions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Examen_Clinique",
                table: "Interventions");
        }
    }
}
