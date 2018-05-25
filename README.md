# pager
pager 分页插件

[![](http://ooqymz3vm.bkt.clouddn.com/pager.png)](https://yeild.github.io/pager/demo.html)

WHY?

  一些项目使用jquery开发，需要用到分页插件，然而网上搜到的分页插件要么样式不够美观，要么功能不够丰富，要么接口设计太难用，而且还需要单独引入css文件。 于是参考antd的样式和交互，
  做了这个分页插件。

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
    current: 1, // 当前页数
    pageSize: 10, // 每页显示条数
    total: 789, // 数据总数
    showJumper: true, // 是否显示跳转到页输入框
    sizeChangeable: false, // todo 是否可选择每页显示条数
    showTotal: false, // todo 是否显示数据总数
    onChange: function (current) {
      // $.ajax({ ... })
      document.querySelector('#data').innerHTML = current
    },
    onSizeChange: function () {
      // todo
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

