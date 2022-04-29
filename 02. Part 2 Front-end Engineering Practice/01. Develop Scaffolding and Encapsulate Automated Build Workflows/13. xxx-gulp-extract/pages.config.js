module.exports = {
  build: {
    src: 'src',
    dist: 'release',
    temp: '.tmp',
    public: 'public',
    paths: {
      styles: 'assets/styles/*.scss',
      scripts: 'assets/scripts/*.js',
      pages: '*.html',
      images: 'assets/images/**',
      fonts: 'assets/fonts/**'
    }
  },
  data: {
    menus: [
      {
        name: 'Home',
        icon: 'aperture',
        link: 'index.html'
      },
      {
        name: 'Features',
        link: 'features.html'
      },
      {
        name: 'About',
        link: 'about.html'
      },
      {
        name: 'Contact',
        link: '#',
        children: [
          {
            name: 'Twitter',
            link: 'https://twitter.com/w_xxx'
          },
          {
            name: 'About',
            link: 'https://weibo.com/xxxme'
          },
          {
            name: 'divider'
          },
          {
            name: 'About',
            link: 'https://github.com/xxx'
          }
        ]
      }
    ],
    pkg: require('./package.json'),
    date: new Date()
  }
}
