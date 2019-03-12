# pager
pager 分页插件 

[![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312163535099-1532371672.png)](https://yeild.github.io/pager/demo.html)

  一些项目使用jquery开发，需要用到分页插件，然而网上搜到的分页插件要么样式不够美观，要么功能不够丰富，要么接口设计太难用，而且还需要单独引入css文件。 于是遵循ant design实现了这个分页插件。

### 用法

1. 下载 [pager.min.js](https://raw.githubusercontent.com/yeild/pager/master/dist/pager.min.js)

2.  在页面中引入
```
<script src="pager.min.js"></script>
```

3. 初始化Pager
```
Pager.init({
    el: document.getElementById('pageContainer'), // 页面容器
    current: 1, // 当前页数, 默认1
    pageSize: 10, // 每页显示条数，默认10
    total: 789, // 数据总数
    showJumper: true, // 是否显示跳转到页输入框， 默认true
    sizeChangeable: false, // 是否可选择每页显示条数, 默认false
    showTotal: false, // 是否显示数据总数, 默认false
    onChange: function (current, size) {
      console.log(current, size)
    },
    onSizeChange: function (current, size) {
      console.log(current, size)
    }
  })
```

### 特点
* 不依赖jquery等外部库，引入就可用
* 使用 webpack 将css文件打包，不需要单独引入

### development
```
npm install
npm run dev
npm run build
```

