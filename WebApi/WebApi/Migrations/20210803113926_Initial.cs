using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Organizations",
                columns: table => new
                {
                    OrganizationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrganizationName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Location = table.Column<string>(type: "nvarchar (50)", nullable: true),
                    NumberOfStuff = table.Column<int>(type: "int", nullable: false),
                    ContactNumber = table.Column<string>(type: "nvarchar (12)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organizations", x => x.OrganizationId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Organizations");
        }
    }
}
