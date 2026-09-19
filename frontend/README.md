# 纯情 S 粉丝站（预览版）

成灿 & 元彬 主题粉丝站「纯情 S」的静态站点代码。

> 本仓库由 WorkBuddy 从资料库空间导出并重建主题样式生成，作为可继续完善的起点。

## 目录结构

- `index.html` 首页
- `about.html` 关于
- `contact.html` 联系
- `guide.html` 投稿须知
- `legal.html` 免责声明
- `tangdian.html` 糖点
- `tongren.html` 同人
- `shipin.html` 视频
- `zhaopian.html` 照片
- `youxi.html` 小游戏
- `liuyan.html` 留言
- `assets/style.css` 主题样式
- `assets/main.js` 交互脚本

## 本地预览

```bash
python -m http.server 8765
# 浏览器打开 http://127.0.0.1:8765/index.html
```

## 说明

原站点的 CSS/JS/图片由资料库平台运行时注入，导出件中不含这些资源，
此处 `assets/` 下的样式与脚本为按原页面 class 体系重建的近似主题，可继续完善。
