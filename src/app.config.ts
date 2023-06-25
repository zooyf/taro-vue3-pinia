export default defineAppConfig({
  pages: ['pages/index/index', 'pages/daily_good/index', 'pages/my/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro3',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  },
  subPackages: [
    {
      root: 'package',
      pages: ['package-a/index', 'package-b/index', 'package-c/index', 'icon/index']
    }
  ],
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#FF0000',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/daily_good/index',
        text: '行善'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  }
});
