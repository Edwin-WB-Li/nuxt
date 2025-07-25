---
title: My Markdown Post
description: This is an example of a blog post using Nuxt Content
date: 2025-07-24
image: https://images.pexels.com/photos/1050312/pexels-photo-1050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
minRead: 8
author:
  name: Emma Thompson
  avatar:
    src: https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    alt: Emma Thompson
---

> 微信公众号排版工具。问题或建议

建议使用 **Chrome** 浏览器，体验最佳效果。

使用微信公众号编辑器有一个十分头疼的问题：粘贴出来的代码，格式错乱，空间小还带行号，而且特别丑。Markdown.com.cn 编辑器能够解决这个问题。

Markdown是一种轻量级的「标记语言」。

请阅读下方文本熟悉工具使用方法，本文可直接拷贝到微信中预览。

# GFM

## Autolink literals

<[www.example.com](http://www.example.com)>, <https://example.com>, and <contact@example.com>.

## Footnote

A note[1](#user-content-fn-1){#user-content-fnref-1 aria-described-by="footnote-label" dataFootnoteRef=""}

## Strikethrough

~~one~~ or ~~two~~ tildes.

## Tasklist

- to do
- done

## 1 Markdown.com.cn 简介

- 支持自定义样式的 Markdown 编辑器
- 支持微信公众号、知乎和稀土掘金
- 点击右上方对应图标，一键复制到各平台

## 2 Markdown语法教程

### 2.1 标题

不同数量的`#`可以完成不同的标题，如下：

# 一级标题

## 二级标题

### 三级标题

### 2.2 字体

粗体、斜体、粗体和斜体，删除线，需要在文字前后加不同的标记符号。如下：

**这个是粗体**

_这个是斜体_

**_这个是粗体加斜体_**

~~这里想用删除线~~

注：如果想给字体换颜色、字体或者居中显示，需要使用内嵌HTML来实现。

### 2.3 无序列表

无序列表的使用，在符号`-`后加空格使用。如下：

- 无序列表 1
- 无序列表 2
- 无序列表 3

如果要控制列表的层级，则需要在符号`-`前使用空格。如下：

- 无序列表 1

**由于微信原因，最多支持到二级列表**。

### 2.4 有序列表

有序列表的使用，在数字及符号`.`后加空格后输入内容，如下：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

### 2.5 引用

引用的格式是在符号`>`后面书写文字。如下：

> 读一本好书，就是在和高尚的人谈话。 ——歌德

> 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰

### 2.7 链接

微信公众号仅支持公众号文章链接，即域名为`https://mp.weixin.qq.com/`的合法链接。使用方法如下所示：

对于该论述，欢迎读者查阅之前发过的文章，[你是《未来世界的幸存者》么？](https://mp.weixin.qq.com/s/s5IhxV2ooX3JN_X416nidA)[](){#jump_8}

### 2.8 图片

插入图片，格式如下：

![这里写图片描述](https://markdown.com.cn/images/i-am-svg.svg)

支持 jpg、png、gif、svg 等图片格式，**其中 svg 文件仅可在微信公众平台中使用**，svg 文件示例如下：

![](https://markdown.com.cn/images/i-am-svg.svg)

支持图片**拖拽和截图粘贴**到编辑器中。

注：支持图片 **_拖拽和截图粘贴_** 到编辑器中，仅支持 https 的图片，图片粘贴到微信时会自动上传微信服务器。

### 2.9 分割线

可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：

---

### 2.10 表格

可以使用冒号来定义表格的对齐方式，如下：

| 姓名       | 年龄 |         工作 |
| :--------- | :--: | -----------: |
| 小可爱     |  18  |     吃可爱多 |
| 小小勇敢   |  20  |   爬棵勇敢树 |
| 小小小机智 |  22  | 看一本机智书 |

## 3. 特殊语法

### 3.1 脚注

> 支持平台：微信公众号、知乎。

脚注与链接的区别如下所示：

```text
链接：[文字](链接)
脚注：[文字](脚注解释 "脚注名字")
```

有人认为在[大前端时代](https://en.wikipedia.org/wiki/Front-end_web_development 'Front-end web development')的背景下，移动端开发（Android、IOS）将逐步退出历史舞台。

[全栈工程师](%E6%98%AF%E6%8C%87%E6%8E%8C%E6%8F%A1%E5%A4%9A%E7%A7%8D%E6%8A%80%E8%83%BD%EF%BC%8C%E5%B9%B6%E8%83%BD%E5%88%A9%E7%94%A8%E5%A4%9A%E7%A7%8D%E6%8A%80%E8%83%BD%E7%8B%AC%E7%AB%8B%E5%AE%8C%E6%88%90%E4%BA%A7%E5%93%81%E7%9A%84%E4%BA%BA%E3%80%82 '什么是全栈工程师')在业务开发流程中起到了至关重要的作用。

脚注内容请拉到最下面观看。

### 3.2 代码块

> 支持平台：微信代码主题仅支持微信公众号！其他主题无限制。

如果在一个行内需要引用代码，只要用反引号引起来就好，如下：

Use the `printf()` function.

在需要高亮的代码块的前一行及后一行使用三个反引号，同时**第一行反引号后面表示代码块所使用的语言**，如下：

```java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
```

支持以下语言种类：

```bash
bash
clojure，cpp，cs，css
dart，dockerfile, diff
erlang
go，gradle，groovy
haskell
java，javascript，json，julia
kotlin
lisp，lua
makefile，markdown，matlab
objectivec
perl，php，python
r，ruby，rust
scala，shell，sql，swift
tex，typescript
verilog，vhdl
xml
yaml
```

```typescript
interface AnimateLogoCloudProps {
	class?: string
	title?: string
	logos?: Logo[]
}

interface SphereIcon {
	x: number
	y: number
	z: number
	scale: number
	opacity: number
	id: number
}
```

如果想要更换代码高亮样式，可在上方**代码主题**中挑选。

其中**微信代码主题与微信官方一致**，有以下注意事项：

- 带行号且不换行，代码大小与官方一致
- 需要在代码块处标志语言，否则无法高亮
- 粘贴到公众号后，用鼠标点代码块内外一次，完成高亮

diff 不能同时和其他语言的高亮同时显示，且需要调整代码主题为微信代码主题以外的代码主题才能看到 diff 效果，使用效果如下:

```diff
+ 新增项
- 删除项
```

**其他主题不带行号，可自定义是否换行，代码大小与当前编辑器一致**

### 3.3 数学公式

> 支持平台：微信公众号、知乎。

行内公式使用方法，比如这个化学公式：$\ce{Hg^2+ -> [I-] HgI2 -> [I-] [Hg^{II}I4] ^2-}$

块公式使用方法如下：

$$H(D\_2) = -\left(\frac{2}{4}\log\_2 \frac{2}{4} + \frac{2}{4}\log\_2 \frac{2}{4}\right) = 1$$

矩阵：

$$
\begin{pmatrix}
1 & a\_1 & a\_1^2 & \cdots & a\_1^n \\
1 & a\_2 & a\_2^2 & \cdots & a\_2^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & a\_m & a\_m^2 & \cdots & a\_m^n \\
\end{pmatrix}
$$

公式由于微信不支持，目前的解决方案是转成 svg 放到微信中，无需调整，矢量不失真。

目前测试如果公式量过大，在 Chrome 下会存在粘贴后无响应，但是在 Firefox 中始终能够成功。

### 3.4 TOC

> 支持平台：微信公众号、知乎。

TOC 全称为 Table of Content，列出全部标题。

[TOC]

由于微信只支持到二级列表，本工具仅支持二级标题和三级标题的显示。

### 3.5 注音符号

> 支持平台：微信公众号。

支持注音符号，用法如下：

Markdown Nice 这么好用，简直是{喜大普奔|hē hē hē hē}呀！

### 3.6 横屏滑动幻灯片

> 支持平台：微信公众号。

通过`<![](url),![](url)>`这种语法设置横屏滑动滑动片，具体用法如下：

## 4 其他语法

### 4.1 HTML

支持原生 HTML 语法，请写内联样式，如下：

```html
<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
```

[橙色居右]{style="display:block;text-align:right;color:orangered;"} [橙色居中]{style="display:block;text-align:center;color:orangered;"}

### 4.2 UML

不支持，推荐使用开源工具`https://draw.io/`制作后再导入图片

## 5 致谢

- 歌词经理 [wechat-fromat](https://github.com/lyricat/wechat-format '灵感来源')
- 颜家大少 [MD2All](http://md.aclickall.com/ 'MdA2All')

## Footnotes

1. Big note. [↩](#user-content-fnref-1){.data-footnote-backref ariaLabel="Back to reference 1" dataFootnoteBackref=""}
