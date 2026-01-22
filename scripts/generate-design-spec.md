# 生成设计规范脚本

当用户使用 `@antd:design spec` 或 `@antd:design [页面类型]` 命令时，生成设计规范文档。

## 命令列表

| 命令 | 描述 | 输出 |
|------|------|------|
| `@antd:design spec` | 生成完整设计规范文档 | `design-specification.md` |
| `@antd:design tokens` | 生成 Design Token 配置 | `design-tokens.json` |
| `@antd:design page [类型]` | 生成页面设计规范 | `design-[type].md` |
| `@antd:design component [组件]` | 生成组件设计规范 | `design-[component].md` |

---

## @antd:design spec

生成完整的 Ant Design 设计规范文档，包含：

1. 颜色规范
2. 间距规范
3. 字体规范
4. 圆角规范
5. 组件规范
6. 栅格系统
7. 图标规范
8. 页面布局模板

输出文件：`design-specification.md`

---

## @antd:design tokens

生成 Figma 可用的 Design Token JSON 配置：

```json
{
  "colors": {
    "primary": {
      "value": "#1677ff",
      "type": "color"
    },
    "success": {
      "value": "#52c41a",
      "type": "color"
    },
    "warning": {
      "value": "#faad14",
      "type": "color"
    },
    "error": {
      "value": "#ff4d4f",
      "type": "color"
    },
    "text": {
      "value": "rgba(0,0,0,0.88)",
      "type": "color"
    },
    "textSecondary": {
      "value": "rgba(0,0,0,0.65)",
      "type": "color"
    },
    "border": {
      "value": "#d9d9d9",
      "type": "color"
    },
    "background": {
      "value": "#ffffff",
      "type": "color"
    },
    "backgroundLayout": {
      "value": "#f5f5f5",
      "type": "color"
    }
  },
  "spacing": {
    "xxs": { "value": "4px", "type": "spacing" },
    "xs": { "value": "8px", "type": "spacing" },
    "sm": { "value": "12px", "type": "spacing" },
    "md": { "value": "16px", "type": "spacing" },
    "lg": { "value": "24px", "type": "spacing" },
    "xl": { "value": "32px", "type": "spacing" },
    "xxl": { "value": "48px", "type": "spacing" }
  },
  "fontSize": {
    "h1": { "value": "38px", "type": "fontSize" },
    "h2": { "value": "30px", "type": "fontSize" },
    "h3": { "value": "24px", "type": "fontSize" },
    "h4": { "value": "20px", "type": "fontSize" },
    "h5": { "value": "16px", "type": "fontSize" },
    "body": { "value": "14px", "type": "fontSize" },
    "small": { "value": "12px", "type": "fontSize" }
  },
  "borderRadius": {
    "xs": { "value": "2px", "type": "borderRadius" },
    "sm": { "value": "4px", "type": "borderRadius" },
    "base": { "value": "6px", "type": "borderRadius" },
    "lg": { "value": "8px", "type": "borderRadius" },
    "xl": { "value": "12px", "type": "borderRadius" }
  },
  "shadow": {
    "default": {
      "value": "0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)",
      "type": "boxShadow"
    },
    "secondary": {
      "value": "0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)",
      "type": "boxShadow"
    }
  }
}
```

输出文件：`design-tokens.json`

**Figma 导入方式**：
1. 安装 Figma 插件 "Tokens Studio for Figma"
2. 导入 `design-tokens.json`
3. 应用 Token 到设计稿

---

## @antd:design page [类型]

生成特定页面类型的设计规范，包含：

- 页面结构图
- 组件列表
- 尺寸标注
- 交互说明

支持的页面类型：
- `list` - 列表页
- `form` - 表单页
- `detail` - 详情页
- `dashboard` - 仪表盘
- `modal` - 弹窗

---

## @antd:design component [组件]

生成特定组件的设计规范，包含：

- 组件结构
- 尺寸变体
- 状态变体
- 交互说明

支持的组件：
- `button` - 按钮
- `input` - 输入框
- `select` - 选择器
- `table` - 表格
- `form` - 表单
- `modal` - 弹窗
- `card` - 卡片
- `tabs` - 标签页

---

## 使用场景

### 场景 1：设计师参考

设计师在 Figma 中创建设计稿前，先生成设计规范：

```
@antd:design spec
```

然后参考规范进行设计。

### 场景 2：导入 Design Token

生成 Token 并导入 Figma：

```
@antd:design tokens
```

使用 Figma 插件导入，确保设计稿使用一致的样式变量。

### 场景 3：设计评审

在设计评审时，检查设计稿是否符合规范：

```
@antd:design page list
```

对比规范检查设计稿。
