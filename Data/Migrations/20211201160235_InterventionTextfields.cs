using Microsoft.EntityFrameworkCore.Migrations;

namespace Project3.Data.Migrations
{
    public partial class InterventionTextfields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Conclusion",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Diag",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Examen_Clinique",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MAJ",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Radiologie",
                table: "Interventions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Conclusion",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Diag",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Examen_Clinique",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "MAJ",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Radiologie",
                table: "Interventions");
        }
    }
}
