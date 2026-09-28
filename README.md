# Jiangzi Chen 个人学术网站

Jiangzi Chen 的个人学术网站，展示教育背景、研究经历、发表论文、助教经历和联系方式。网站由静态 HTML、CSS、图件和 PDF 组成，无需运行后端服务。

仓库名称：`jchenziasu.github.io`。预期网址：[https://jchenziasu.github.io/](https://jchenziasu.github.io/)，以 GitHub Pages 实际部署成功为准。页面、图片和 PDF 均使用根路径链接，适用于这个个人主页仓库。

## 文件与修改

- 仓库根目录的 `index.html` 及各栏目目录是可直接部署的静态页面。
- `assets/` 保存照片、研究图件和简历；`styles.css` 保存样式。
- `source/src/profile.mjs` 保存个人资料；`source/src/details.mjs` 保存详细经历与助教信息。
- `source/src/diagrams.mjs` 和 `source/src/research-results.mjs` 保存示意图及研究结果内容。
- `.nojekyll` 确保 GitHub Pages 直接提供这些静态文件。

修改文字后，在安装了 Node.js 的电脑上，于项目目录运行：

```sh
node source/build.mjs
```

这会重新生成五个栏目页面。照片、图件、PDF 和 CSS 可直接替换或修改，无需安装依赖。

## 本地预览

在项目目录运行：

```sh
python -m http.server 8765
```

然后打开 `http://localhost:8765/`。通过 HTTP 预览可正确解析根路径链接。

## GitHub Pages 配置与更新

此站点使用个人主页仓库的根目录部署：

1. 将网站文件和后续修改提交到仓库 `jchenziasu/jchenziasu.github.io` 的 `main` 分支根目录，包括 `.nojekyll`。
2. 打开仓库 **Settings > Pages**。
3. 选择 **Deploy from a branch**，分支选择 **main**，目录选择 **/(root)**，保存。
4. 等待 GitHub Pages 部署完成后访问 `https://jchenziasu.github.io/`。

修改源文件后，请先运行生成命令，并把重新生成的 HTML 与源文件一并提交。修改会在下一次 GitHub Pages 部署成功后生效。仓库不需要保存任何账号凭据。

## 图件来源

研究页面已在相应图件旁保留论文来源和 CC BY 4.0 许可说明。请在后续修改时保留这些署名。主页与 Research 页使用相同的框图和箭头式矢量概念图，展示人类活动、地球系统、影响与气候适应之间的联系；图件不代表观测结果；ADEQ 页面注明了数据日期、范围和解释限制。
