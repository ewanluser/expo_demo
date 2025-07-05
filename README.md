# 电商应用 (Ecommerce App)

基于 Figma 设计稿实现的 React Native Expo 电商应用，使用 Tailwind CSS 进行样式设计。

## 功能特性

- ✅ 搜索栏
- ✅ 分类轮播
- ✅ 产品展示轮播
- ✅ 图片轮播
- ✅ Banner 横幅
- ✅ Pills 导航标签
- ✅ 底部标签栏 (Home, Discover, Cart, Notifications, Profile)
- ✅ 响应式设计
- ✅ 现代化 UI/UX

## 技术栈

- **React Native** - 移动应用开发框架
- **Expo** - React Native 开发平台
- **Tailwind CSS** (NativeWind) - 实用程序优先的 CSS 框架
- **React Native SVG** - SVG 图标支持
- **TypeScript** - 类型安全

## 项目结构

```
expo_demo/
├── app/                    # 应用页面
│   ├── (tabs)/            # 标签页面
│   │   ├── index.tsx      # 主页
│   │   ├── explore.tsx    # 发现页
│   │   ├── cart.tsx       # 购物车
│   │   ├── notifications.tsx # 通知页
│   │   └── profile.tsx    # 个人资料
│   └── _layout.tsx        # 根布局
├── components/            # 可复用组件
│   └── EcommerceComponents.tsx # 电商组件
├── assets/               # 静态资源
│   └── images/          # 图片和图标
└── global.css           # 全局样式
```

## 设计参考

本项目基于以下 Figma 设计稿实现：
[Figma 设计稿链接](https://www.figma.com/design/8aqH2usp5FN0djNpdt50db/test?node-id=1-1225&t=X4ySjKe7ujkFXhaA-4)

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 扫描二维码或按对应平台键：
   - `i` - iOS 模拟器
   - `a` - Android 模拟器
   - `w` - Web 浏览器

## 主要组件

### SearchBar
搜索栏组件，包含搜索图标和占位符文本。

### CategoryCarousel
分类轮播组件，显示圆形分类图标和标题。

### ProductCarousel
产品轮播组件，展示产品卡片包含图片、品牌、名称和价格。

### ImageCarousel
图片轮播组件，展示方形图片网格。

### Banner
横幅组件，包含标题和分页指示器。

### Pills
导航标签组件，包含图标和标签文本。

## 样式系统

使用 Tailwind CSS (NativeWind) 实现：
- 自定义颜色主题
- 响应式间距
- 现代化组件样式
- 一致的设计语言

## 开发说明

- 使用 TypeScript 确保类型安全
- 遵循 React Native 最佳实践
- 组件化开发，便于维护和复用
- 使用 Expo Router 进行导航管理
