using Microsoft.EntityFrameworkCore.Migrations;

namespace Project3.Data.Migrations
{
    public partial class newfiels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Honoraire",
                table: "Interventions",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "Mutualiste",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Operateur",
                table: "Interventions",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Remise",
                table: "Interventions",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "Biologies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Biologies", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Biologies");

            migrationBuilder.DropColumn(
                name: "Honoraire",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Mutualiste",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Operateur",
                table: "Interventions");

            migrationBuilder.DropColumn(
                name: "Remise",
                table: "Interventions");
        }
    }
}
