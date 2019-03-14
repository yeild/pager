# pager
pager 分页插件 

[![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312163535099-1532371672.png)](https://yeild.github.io/pager/demo.html)

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
    onChange: function (current, pageSize) {
      console.log(current, pageSize)
    },
    onSizeChange: function (current, pageSize) {
      console.log(current, pageSize)
    }
  })
```
