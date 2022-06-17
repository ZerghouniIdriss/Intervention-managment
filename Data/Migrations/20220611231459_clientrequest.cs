using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Project3.Data.Migrations
{
    public partial class clientrequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Interventions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "NR",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RG",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Sortie_Date",
                table: "Interventions",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "NR",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "RG",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Sortie_Date",
                table: "Interventions");
        }
    }
}
