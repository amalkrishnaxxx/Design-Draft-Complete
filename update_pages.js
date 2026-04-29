const fs = require('fs');

const pages = [
  {
    file: 'pages/architects-in-thrissur.js',
    keys: [
      "best architects Thrissur Kerala",
      "residential architectural services Thrissur",
      "house planning architects Thrissur",
      "modern architecture firms Thrissur",
      "building design consultants Thrissur",
      "home design architects Kerala",
      "architectural design services Kerala",
      "house designers Thrissur Kerala",
      "custom house design services Thrissur"
    ]
  },
  {
    file: 'pages/home-developers-in-thrissur.js',
    keys: [
      "real estate developers Thrissur Kerala",
      "property development company Thrissur",
      "residential property developers Thrissur",
      "custom home developers Kerala",
      "villa developers Thrissur Kerala",
      "premium home construction Thrissur",
      "complete home building solutions Thrissur"
    ]
  },
  {
    file: 'pages/contractors-in-thrissur.js',
    keys: [
      "top construction company Thrissur Kerala",
      "residential construction company Kerala",
      "turnkey construction company Thrissur",
      "building contractors Thrissur Kerala",
      "licensed civil contractors Thrissur",
      "general construction contractors Thrissur",
      "top building firms Kerala Thrissur",
      "infrastructure construction companies Thrissur",
      "engineering construction firms Thrissur"
    ]
  },
  {
    file: 'pages/interior-designers-in-thrissur.js',
    keys: [
      "interior design services Thrissur",
      "home interior specialists Thrissur",
      "modular kitchen designers Thrissur",
      "living space interior designers Kerala",
      "luxury interior design Thrissur homes",
      "space planning experts Thrissur",
      "space optimization home interiors Kerala"
    ]
  },
  {
    file: 'pages/builders-in-thrissur.js',
    keys: [
      "best builders in Thrissur",
      "trusted home builders Thrissur",
      "custom home builders Thrissur",
      "independent house builders Thrissur",
      "affordable house construction Thrissur",
      "house construction services Thrissur",
      "local construction experts Thrissur",
      "hire builders in Thrissur"
    ]
  }
];

pages.forEach(p => {
  if (fs.existsSync(p.file)) {
    let content = fs.readFileSync(p.file, 'utf8');
    const keysString = 'keywords={[\n          ' + p.keys.map(k => '"' + k + '"').join(',\n          ') + '\n        ]}';
    content = content.replace(/keywords=\{\[[\s\S]*?\]\}/, keysString);
    fs.writeFileSync(p.file, content);
  }
});

console.log('Pages updated.');
