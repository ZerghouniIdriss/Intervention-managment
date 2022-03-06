using Microsoft.EntityFrameworkCore.Migrations;

namespace Project3.Data.Migrations
{
    public partial class registration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Examen_Clinique",
                table: "Interventions");

            migrationBuilder.AddColumn<string>(
                name: "Biologie_ca",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_crea",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_crp",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_gb",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_glycemie",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_hb",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_inr",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_k",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_na",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_other",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_plg",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_tck",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_tp",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Biologie_uree",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Biologie_ca",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_crea",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_crp",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_gb",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_glycemie",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_hb",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_inr",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_k",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_na",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_other",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_plg",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_tck",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_tp",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Biologie_uree",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "Examen_Clinique",
                table: "Interventions",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
