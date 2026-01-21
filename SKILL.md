# Ant Design 规范助手

智能化的 Ant Design 开发助手，提供代码生成、规范检查、最佳实践指导等功能。

## 命令列表

### 代码生成

| 命令 | 触发方式 | 描述 |
|------|----------|------|
| 创建页面 | `@antd:create page [类型]` | 创建标准页面模板（admin/list/form/detail/modal/drawer） |
| 插入组件 | `@antd:component [名称]` | 插入标准组件，自动填充推荐属性 |
| 应用模式 | `@antd:pattern [模式]` | 应用页面模式（fullscreen-modal/drawer-layout/skeleton-page） |

### 规范检查

| 命令 | 触发方式 | 描述 |
|------|----------|------|
| 检查当前文件 | `@antd:check current` | 检查当前文件的规范符合度 |
| 检查整个项目 | `@antd:check all` | 批量扫描项目文件，生成规范报告 |
| 自动修复 | `@antd:fix [类型]` | 自动修复问题（imports/props/layout/style/all） |

### 文档查询

| 命令 | 触发方式 | 描述 |
|------|----------|------|
| 查看文档 | `@antd:docs [组件]` | 查看组件文档和最佳实践 |
| 搜索模式 | `@antd:search pattern [关键词]` | 搜索页面模式 |
| 查看配置 | `@antd:config` | 查看/修改当前配置 |

### 智能辅助

| 命令 | 触发方式 | 描述 |
|------|----------|------|
| 分析代码 | `@antd:analyze` | 分析当前代码上下文 |
| 获取建议 | `@antd:suggest` | 获取智能优化建议 |
| 批量创建 | `@antd:batch create [数量] [类型]` | 批量创建页面/组件 |
| 版本迁移 | `@antd:migrate v4-to-v5` | Ant Design v4 到 v5 迁移 |

## 支持的页面类型

- `admin` - 管理后台首页（数据看板）
- `list` - 列表页面（ProTable）
- `form` - 表单页面（分步表单）
- `detail` - 详情页面
- `modal` - 弹窗组件
- `drawer` - 抽屉组件

## 支持的页面模式

- `fullscreen-modal` - 全屏弹窗
- `drawer-layout` - 抽屉布局
- `skeleton-page` - 骨架屏加载
- `split-panel` - 分栏面板
- `tabs-layout` - 标签页布局
- `steps-wizard` - 步骤引导
- `dashboard` - 数据看板
- `crud-list` - CRUD 列表

## 规范检查范围

- **语法级** - 组件导入、属性类型、必需属性
- **规范级** - 布局使用、间距规范、颜色规范
- **性能级** - 重渲染检查、组件大小、代码分割
- **体验级** - 加载状态、错误边界、交互反馈

## 配置

在项目根目录创建 `.antdskillsrc` 文件进行自定义配置：

```yaml
antdVersion: "5.x"
language: "typescript"
styleType: "css-in-js"
useProComponents: true
```

## 版本

- 当前版本：1.0.0
- 支持 Ant Design：4.x / 5.x
- 支持语言：TypeScript / JavaScript
