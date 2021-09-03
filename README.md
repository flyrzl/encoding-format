# 不同语言编译时、运行时的编码方式



### 三种字符的编码

选择字母、希腊字母、中文三种字符，查询其编码如下：

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630139469462-fc7155ec-b046-4c31-815b-689ee82eca3c.png" alt="img" style="zoom: 33%;" />

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630139476030-df8fa423-4484-4ce3-b317-22766b87cff7.png" alt="img" style="zoom: 80%;" />

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630139501316-19ca8363-c674-4b97-93dc-7ff3fd624dcf.png" alt="img" style="zoom: 33%;" />

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630139507233-eebefb29-6116-46aa-a584-ddc66970d3ff.png" alt="img" style="zoom:80%;" />

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630139483665-51bc34b7-f241-430a-aca9-4a1053967a7c.png" alt="img" style="zoom: 33%;" />

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630139490131-f3abb148-a26c-47b6-b739-3b1781b107bf.png" alt="img" style="zoom:80%;" />

## C语言

对源代码做十六进制转储，得到其编码方式为utf-8：

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630227028150-a251d2ea-3571-476d-a7df-55be7f5c0396.png" alt="img" style="zoom: 80%;" />

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630379080527-25233996-63c6-4198-bd55-3439216e454d.png" alt="img" style="zoom:80%;" />

对编译文件做反汇编，得到其默认编码格式是utf-8，可指定为其他格式，如utf-16：

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630386566938-d55f1f1a-8aef-4abb-8dce-ed57901035bf.png" alt="img" style="zoom:80%;" />

## Go

源代码文件编码方式为utf-8：

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630378813454-a2d93a91-3f66-49b3-ba98-835428b50cf1.png" alt="img"  />

对编译文件做反汇编，得到其编码格式是utf-16：

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630314162084-e3c6ba0b-3437-4cd4-bfb2-76de298c6249.png" alt="img"  />

## JavaScript

JavaScript使用的编码方式是UCS-2，是UTF-16的子集。

两个字节以内，UCS-2与UTF-16一致；多于两个字节时，UCS-2会将原字符视作由两个字符组成的字符串。

比如，字符'`𝌆`'编码如下：

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630386834838-15d890c1-21cd-4cba-b8e8-3713ee1f32bc.png" alt="img" style="zoom:33%;" />

<img src="https://cdn.nlark.com/yuque/0/2021/png/518073/1630386848732-0905d867-dfd7-4011-894a-16cf42af9378.png" alt="img" style="zoom: 80%;" />

在JavaScript中，无法通过码点`1d306`或utf-16编码`d834df06`得到该字符，因为JS将其视作字符`d834`和`df06`构成的字符串：

![img](https://cdn.nlark.com/yuque/0/2021/png/518073/1630387057031-95afeab7-ccb4-4bba-b3d5-b6e9f73d4780.png)

新版本ES6大幅增强了对Unicode的支持，通过大括号能够直接表示4字节码点的字符，新增了专门处理4字节码点的函数等等：

![img](https://cdn.nlark.com/yuque/0/2021/png/518073/1630387202979-f6883806-0d88-4d69-b9d7-b557a58488e3.png)



参考：http://www.ruanyifeng.com/blog/2014/12/unicode.html