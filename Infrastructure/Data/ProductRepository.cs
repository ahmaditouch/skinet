using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _context;
        public ProductRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<IReadOnlyList<ProductBrand>> GetProductBrandsdAsync()
        {
            return await _context.ProductBrands.ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products
              .Include(p => p.ProductType) // eager loading 
              .Include(p => p.ProductBrand)
              .FirstOrDefaultAsync(p=> p.Id ==id); // single or default throw exeption if more than one res
        }

        public async Task<IReadOnlyList<Product>> GetProductsdAsync()
        {
            return await _context.Products
            .Include(p => p.ProductType) // eager loading 
            .Include(p => p.ProductBrand)
            .ToListAsync();
        }

        public async Task<IReadOnlyList<ProductType>> GetProductTypesdAsync()
        {
            return await _context.ProductTypes.ToListAsync();
        }
    }
}