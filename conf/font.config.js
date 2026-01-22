/**
 * 网站字体相关配置
 * 优化说明：
 * 1. 彻底移除 Google Fonts，解决国内访问卡顿。
 * 2. 修正 FontAwesome 版本为 6.4.2，防止图标丢失。
 * 3. 优化字体加载顺序：西文优先 -> 中文兜底，显示效果最精致。
 */
module.exports = {
  // START ************网站字体*****************
  
  // 保持无衬线设计
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans',
  
  // 【关键】清空外链，斩断卡顿根源
  FONT_URL: [],

  // 字体加载策略
  FONT_DISPLAY: process.env.NEXT_PUBLIC_FONT_DISPLAY || 'swap',
  FONT_PRELOAD: false, 
  FONT_SUBSET: process.env.NEXT_PUBLIC_FONT_SUBSET || 'chinese-simplified',
  
  // 【优化】无衬线字体栈 (西文优先策略)
  // 解释：先找苹果/Win的系统西文字体，再找苹方/微软雅黑。
  // 这样英文数字更漂亮，中文依然清晰。
  FONT_SANS: [
    // --- 西文优先 ---
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    // --- 中文兜底 ---
    '"PingFang SC"',       // Mac/iOS 中文
    '"Hiragino Sans GB"',  // Mac 旧版中文
    '"Microsoft YaHei"',   // Win 中文
    'sans-serif',          // 最终保底
    '"Apple Color Emoji"'
  ],
  
  // 衬线字体 (保持简单即可)
  FONT_SERIF: [
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif'
  ],
  
  // 【优化】升级到 6.4.2 版本 (国内字节跳动镜像)
  // 解决部分新版图标显示为方块的问题
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.4.2/css/all.min.css'

  // END ************网站字体*****************
}
