using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<Employee> Employees { get; set; }
    }
}
