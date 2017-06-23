using System.Collections.Generic;

namespace PlanetSupplements.API.Models
{
    public class CartViewModel
    {
       public double SubTotal { get; set; }

        public double Tax { get; set; }

        public int Items { get; set; }

        public double Total { get; set; }

        public List<Cart> Cart { get; set; }
    }
}