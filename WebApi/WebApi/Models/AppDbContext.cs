using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext( DbContextOptions options) : base(options)
        {
        }

        public DbSet<Organization> Organizations { get; set; }
    }
}
