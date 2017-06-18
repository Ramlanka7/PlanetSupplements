﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanetSupplements.API.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public IEnumerable<byte[]> Images { get; set; }

        public bool OnSale { get; set; }
    }
}