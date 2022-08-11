using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class Class: DbContext
    {
        public Class(DbContextOptions<Class>options): base(options) {}
        public DbSet<Dummy> Dummy { get; set; }
    }
}
