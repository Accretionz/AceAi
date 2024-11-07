export const menuItems = [
    {name: "Products", link: "/products", subItems: [
        {
            name: "product1",
            link: "/product1",
            description: "best product"
        }
    ]},
    { name: "Solutions", link: "/solutions" },
    {
        name: "Company",
        link: "/company",
        subItems: [
          {
            name: "Blog",
            link: "/company/blog",
            description: "Read recent news",
          },
          {
            name: "README",
            link: "/company/readme",
            description: "A story about magic",
          },
          {
            name: "Brand",
            link: "/company/brand",
            description: "Assets and guidelines",
          },
          {
            name: "Careers",
            link: "/company/careers",
            description: "Help us bring magic back to software",
          },
          { name: "About", link: "/company/about", description: "Meet the team" },
        ],
      },
    { name: "Customers", link: "/customers" },
    { name: "Pricing", link: "/pricing" },
    { name: "Schedule Demo", link: "https://calendly.com/samhajj/meet" },
  ];