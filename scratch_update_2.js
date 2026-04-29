const fs = require('fs');

let js = fs.readFileSync('src/data/mock.js', 'utf8');

// Update companyInfo
js = js.replace(
  /description: 'Design Draft is one of the top builders[^']*'/,
  "description: 'Design Draft is the top construction company Thrissur Kerala and trusted home builders Thrissur with over 25 years of experience. We provide complete home building solutions Thrissur, from residential architectural services Thrissur to premium home construction Thrissur. As local construction experts Thrissur, we deliver turnkey construction company Thrissur services.'"
);

// Update Services descriptions
js = js.replace(
  /shortDescription: 'Expert team managing architectural and engineering aspects[^']*'/,
  "shortDescription: 'Expert best architects Thrissur Kerala managing architectural and engineering aspects, delivering custom house design services Thrissur.'"
);

js = js.replace(
  /fullDescription: 'Our expert team in Kerala manages both architectural and engineering aspects[^']*'/,
  "fullDescription: 'Our expert team provides top-notch residential architectural services Thrissur and building planning and design Thrissur. We deliver custom-built homes and commercial spaces tailored to your needs, acting as the leading building design consultants Thrissur.'"
);

js = js.replace(
  /shortDescription: 'Creating interiors that combine comfort and elegance[^']*'/,
  "shortDescription: 'Premium interior design services Thrissur creating living spaces that combine comfort and elegance, crafted by top home interior specialists Thrissur.'"
);

js = js.replace(
  /fullDescription: 'We work closely with you to bring your dream interiors to life[^']*'/,
  "fullDescription: 'We offer luxury interior design Thrissur homes. Our living space interior designers Kerala work closely with you to bring your dream interiors to life. Whether you need modular kitchen designers Thrissur or space planning experts Thrissur, we are here.'"
);

js = js.replace(
  /shortDescription: 'Trusted home builders and contractors managing every aspect[^']*'/,
  "shortDescription: 'Trusted building contractors Thrissur Kerala managing every aspect from planning to completion with high-quality execution.'"
);

js = js.replace(
  /fullDescription: 'As trusted home builders and contractors in Thrissur, we manage every aspect[^']*'/,
  "fullDescription: 'As licensed civil contractors Thrissur and general construction contractors Thrissur, we manage every aspect of your project. With 25+ years of experience, we provide affordable house construction Thrissur and complete home building solutions Thrissur.'"
);

js = js.replace(
  /shortDescription: 'Expert supervision ensuring your project is executed efficiently[^']*'/,
  "shortDescription: 'Expert supervision by a leading design and build firm Thrissur, ensuring your project is executed efficiently.'"
);

// Update Blog Posts Content snippets
// Blog 1: Modern House Design
js = js.replace(
  /excerpt: 'Discover the latest modern house design trends that are transforming homes across Thrissur[^']*'/,
  "excerpt: 'Discover the latest home design trends Thrissur that are transforming homes. From contemporary house plans Kerala to modern architecture firms Thrissur insights.'"
);

js = js.replace(
  /# Top 10 Modern House Design Ideas in Thrissur for 2026\n\nAs Thrissur continues to grow as a hub for contemporary architecture/,
  "# Top 10 Modern House Design Ideas in Thrissur for 2026\n\nAs Thrissur continues to grow as a hub for contemporary architecture, finding the best architects Thrissur Kerala is crucial. Whether you need custom house design services Thrissur or modern architecture firms Thrissur"
);

// Blog 2: Choose Right Builder
js = js.replace(
  /excerpt: 'Planning to build your dream home in Thrissur\? Learn the essential factors to consider when selecting the best builder for your construction project.'/,
  "excerpt: 'Planning to build your dream home? Learn how to find a trusted construction company near me and hire builders in Thrissur. Follow our construction planning guide Thrissur.'"
);

js = js.replace(
  /Choosing the right builder is one of the most important decisions you'll make when constructing your dream home in Thrissur./,
  "Choosing the right builder is one of the most important decisions you'll make. Whether you need independent house builders Thrissur, villa construction specialists Thrissur, or general construction contractors Thrissur, this guide will help you."
);

// Blog 3: Kerala Style vs Contemporary
js = js.replace(
  /excerpt: 'Comparing traditional Kerala architecture with modern contemporary designs[^']*'/,
  "excerpt: 'Comparing traditional vs modern home Kerala styles. Learn about residential architectural services Thrissur and find the perfect building design consultants Thrissur.'"
);

// Blog 4: Interior Design Trends
js = js.replace(
  /excerpt: 'Stay ahead of the curve with the latest interior design trends transforming homes across Thrissur[^']*'/,
  "excerpt: 'Stay ahead with the latest interior design trends Kerala homes. Our living space interior designers Kerala share tips on space optimization home interiors Kerala.'"
);

// Blog 5: Construction Cost Estimation
js = js.replace(
  /excerpt: 'Comprehensive guide to understanding construction costs in Thrissur[^']*'/,
  "excerpt: 'Comprehensive guide to house construction cost Thrissur. Learn about building cost per sq ft Kerala and home construction budget planning Thrissur.'"
);

js = js.replace(
  /Planning to build your dream home in Thrissur\? Understanding construction costs is crucial for effective budget planning and avoiding surprises./,
  "Planning to build? Using a construction cost calculator Kerala and understanding residential construction pricing Thrissur is crucial. Learn the project cost estimation Thrissur and home building cost breakdown Kerala."
);

fs.writeFileSync('src/data/mock.js', js);
console.log('Done heavily updating mock.js with natural keyword placements.');
