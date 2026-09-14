// 纯情 S · 预览交互脚本（重建版）
document.addEventListener('DOMContentLoaded', function () {
  // 移动端菜单
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('navlinks');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Tabs
  document.querySelectorAll('.tabs').forEach(function (group) {
    var tabs = group.querySelectorAll('.tab');
    var panels = group.parentElement
      ? group.parentElement.querySelectorAll('.tab-panel')
      : [];
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        panels.forEach(function (p, j) { p.classList.toggle('active', j === i); });
      });
    });
  });

  // 静态预览版表单：仅提示，不真正提交
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('💗 感谢你的留言 / 投稿！当前为静态预览版，正式上线后会进入审核队列～');
    });
  });
});
