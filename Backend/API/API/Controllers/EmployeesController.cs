using API.Data;
using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeDbContext _employeeDbContext;
        public EmployeesController(EmployeeDbContext dbConetxt)
        {
            _employeeDbContext = dbConetxt;
        }

        [HttpGet]
        public async Task<IActionResult> getAllEmployees()
        {
            if (_employeeDbContext.Employees is null)
            {
                return NotFound();
            }

            var emplpyeeList = await _employeeDbContext.Employees.OrderBy(e => e.Name).ToListAsync();
            return Ok(emplpyeeList);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getEmployeeById(int id)
        {
            if (_employeeDbContext.Employees is null)
                return NotFound();

            var targetedEmployee = await _employeeDbContext.Employees.FindAsync(id);
            if (targetedEmployee is null)
                return NotFound($"No Employee found with ID: {id}");

            return Ok(targetedEmployee);
        }


        [HttpPost]
        public async Task<IActionResult> addEmployee(EmployeeDto empDto)
        {
            Employee newEmployee = new Employee
            {
                Name = empDto.Name,
                Address = empDto.Address,
                Title = empDto.Title,
                Age = empDto.Age
            };

            await _employeeDbContext.Employees.AddAsync(newEmployee);
            await _employeeDbContext.SaveChangesAsync();

            return Created("/api/employees", newEmployee);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> updateEmployee(int id, [FromBody]EmployeeDto updatedEmployee)
        {
            var employee = await _employeeDbContext.Employees.SingleOrDefaultAsync(e => e.Id == id);
            if(employee is null)
                return NotFound($"No Employee found with ID: {id}");

            employee.Name = updatedEmployee.Name;
            employee.Address = updatedEmployee.Address;
            employee.Age = updatedEmployee.Age;
            employee.Title = updatedEmployee.Title;
            try
            {
                await _employeeDbContext.SaveChangesAsync();
                return Ok(employee);
            }
            catch (Exception ex)
            {
                 return BadRequest(ex.Message);
            }
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> removeEmployee(int id)
        {
            if (_employeeDbContext.Employees is null)
                return NotFound();

            var employeeToBeDeleted = await _employeeDbContext.Employees.FindAsync(id);
            if (employeeToBeDeleted is null)
                return NotFound($"No Employee found with ID: {id}");
            _employeeDbContext.Remove(employeeToBeDeleted);
            await _employeeDbContext.SaveChangesAsync();
            return Ok(employeeToBeDeleted);
        }
    }
}