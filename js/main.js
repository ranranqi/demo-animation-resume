/* 把code写到#code和style标签里*/
function writrCode(prefix, code, fn) {
    let domCode = document.querySelector("#code")
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css')
        domCode.scrollTop = domCode.scrollHeight
        styleTag.innerHTML = prefix + code.substring(0, n)
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function changToMarkdown(fn) {
    let domMarkdown = document.querySelector('#paper > .content').innerHTML =
        marked(md)
    domMarkdown.scrollTop = domMarkdown.scrollHeight
    fn.call()
}


var result = `/* 
 * 面试官你好，我叫冉奇
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
    transition: all 1s;    
  }
html{
    font-size: 16px;
    background: #eee;
}
#code{
    background: #E28E3D;
    background: linear-gradient(135deg, #7BC5E8 0%, #6BD68A 54%, #F28433 100%);
    border: 1px solid #76CACC;
    border-radius: 20px;
    padding: 20px;
}
/* 我需要一点代码高亮 */
.token.selector{
    color: blue;
}
.token.property{
    color: purple;
} 
.token.function{
    color: #FF070B;
}
.token.punctuation{
    color: #F8F8F2;
}
/* 加点呼吸效果 */
#code{
    animation: breath 0.5s infinite alternate-reverse;
}

/* 加点3D效果 */
#code{
    transform: rotateY(20deg) translateZ(-60px) ;
}


/* 开始介绍我自己了 */
/* 我需要一张白纸 */
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
    margin: 6px 20px; 
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 20px;
    background: #E4F7FD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
#paper > .content{
    background: #E4F7FD;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
`
var result2 = `
#paper{
}

/*
* 开始写我的简历了，变成markdown格式
*/

`
var md = `
# 自我简介
我叫 xxx，今年23岁
2017年毕业于xxxxxxxxxx学校
学习前端半年
希望应聘一份前端技术岗位
# 技能介绍
熟悉Html Css JavaScript
# 项目
1，Canvas画板
![](./img/4.png)
预览链接：[https://ranranqi.github.io/canvas-demo-3/index.html](https://ranranqi.github.io/canvas-demo-3/index.html)
2，键盘导航
![](./img/3.png)
预览链接： [https://ranranqi.github.io/nav-demo/index.html](https://ranranqi.github.io/nav-demo/index.html)
3，appleStyle轮播
![](./img/2.png)
预览链接： [https://ranranqi.github.io/appleStyle-demo/index.html](https://ranranqi.github.io/appleStyle-demo/index.html)
# 联系方式
手机： xxxxxxxx
QQ: xxxxxxxxx
Email:xxxxxxx@xx.com
Rendered by **marked**.

`

writrCode('', result, () => {
    createPaper(() => {
        writrCode(result, result2, () => {
            writeMarkdown(md, () => {
                changToMarkdown(md)
            })
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}