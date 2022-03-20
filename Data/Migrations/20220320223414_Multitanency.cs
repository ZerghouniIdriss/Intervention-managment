using Microsoft.EntityFrameworkCore.Migrations;

namespace Project3.Data.Migrations
{
    public partial class Multitanency : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Cliniques",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Interventions_UserId",
                table: "Interventions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Cliniques_UserId",
                table: "Cliniques",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cliniques_AspNetUsers_UserId",
                table: "Cliniques",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Interventions_AspNetUsers_UserId",
                table: "Interventions",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cliniques_AspNetUsers_UserId",
                table: "Cliniques");

            migrationBuilder.DropForeignKey(
                name: "FK_Interventions_AspNetUsers_UserId",
                table: "Interventions");

            migrationBuilder.DropIndex(
                name: "IX_Interventions_UserId",
                table: "Interventions");

            migrationBuilder.DropIndex(
                name: "IX_Cliniques_UserId",
                table: "Cliniques");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Cliniques");
        }
    }
}
