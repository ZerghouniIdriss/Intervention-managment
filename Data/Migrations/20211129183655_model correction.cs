using Microsoft.EntityFrameworkCore.Migrations;

namespace Project3.Data.Migrations
{
    public partial class modelcorrection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Addmission_Date",
                table: "Interventions");

            migrationBuilder.RenameColumn(
                name: "status",
                table: "Interventions",
                newName: "Status");

            migrationBuilder.AddColumn<string>(
                name: "Admission_Date",
                table: "Interventions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Admission_Date",
                table: "Interventions");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Interventions",
                newName: "status");

            migrationBuilder.AddColumn<string>(
                name: "Addmission_Date",
                table: "Interventions",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
