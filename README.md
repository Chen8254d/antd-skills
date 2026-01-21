# 🎨 Ant Design 规范助手 (antd-design-assistant)

智能化的 Ant Design 开发助手，为 Cursor IDE 提供代码生成、规范检查、最佳实践指导等功能。

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/antd-skills/antd-design-assistant)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.x-1890ff.svg)](https://ant.design/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

## ✨ 特性

- 🚀 **代码生成** - 快速生成符合规范的页面和组件
- 🔍 **规范检查** - 实时检测代码规范问题并提供修复建议
- 📚 **文档查询** - 快速查看组件文档和最佳实践
- 🔄 **版本迁移** - 支持 Ant Design v4 到 v5 的自动迁移
- 🧩 **插件扩展** - 支持自定义组件、规则和模式扩展
- ⚙️ **灵活配置** - 支持全局、团队、项目三级配置

## 📦 安装

### 一行命令安装（推荐）

**macOS / Linux:**

```bash
git clone https://github.com/Chen8254d/antd-skills.git ~/.cursor/skills/antd-skills
```

**Windows (PowerShell):**

```powershell
git clone https://github.com/Chen8254d/antd-skills.git $env:USERPROFILE\.cursor\skills\antd-skills
```

安装后**重启 Cursor IDE** 即可使用。

### 手动安装

```bash
# 1. 克隆仓库
git clone https://github.com/Chen8254d/antd-skills.git

# 2. 复制到 Cursor Skills 目录
cp -r antd-skills ~/.cursor/skills/

# 3. 重启 Cursor IDE
```

## 🎯 快速开始

### 代码生成命令

```typescript
// 创建页面模板
// @antd:create page admin    - 创建管理后台页面
// @antd:create page list     - 创建列表页面
// @antd:create page form     - 创建表单页面
// @antd:create page detail   - 创建详情页面
// @antd:create page modal    - 创建弹窗组件
// @antd:create page drawer   - 创建抽屉组件

// 插入标准组件
// @antd:component Table      - 插入表格组件
// @antd:component Form       - 插入表单组件

// 应用页面模式
// @antd:pattern fullscreen-modal  - 全屏弹窗模式
// @antd:pattern drawer-layout     - 抽屉布局模式
// @antd:pattern skeleton-page     - 骨架屏加载模式
// @antd:pattern split-panel       - 分栏面板模式
// @antd:pattern tabs-layout       - 标签页布局模式
```

### 规范检查命令

```typescript
// @antd:check current        - 检查当前文件
// @antd:check all            - 检查整个项目
// @antd:fix imports          - 修复导入问题
// @antd:fix props            - 修复属性问题
// @antd:fix all              - 修复所有可自动修复的问题
```

### 查询命令

```typescript
// @antd:docs Table           - 查看 Table 组件文档
// @antd:docs Form            - 查看 Form 组件文档
// @antd:search pattern 看板  - 搜索包含"看板"的页面模式
// @antd:config               - 查看当前配置
```

### 智能命令

```typescript
// @antd:analyze              - 分析当前代码上下文
// @antd:suggest              - 获取智能优化建议
// @antd:migrate v4-to-v5     - 执行 v4 到 v5 迁移
```

## 📋 规范检查

Skills 会在以下方面进行规范检查：

### 语法级检查
- ✅ 组件按需导入
- ✅ 属性类型验证
- ✅ 必需属性检查

### 规范级检查
- ✅ 布局组件使用规范
- ✅ 间距和尺寸规范
- ✅ Design Token 使用

### 性能级检查
- ✅ 避免不必要的重渲染
- ✅ 大组件拆分建议
- ✅ 代码分割提示

### 体验级检查
- ✅ 加载状态处理
- ✅ 错误边界设置
- ✅ 交互反馈规范

### 检查报告示例

```markdown
## 规范检查报告
文件：src/pages/dashboard/index.tsx
评分：85/100

### 问题列表
1. ⚠️ 缺少骨架屏加载状态
   - 位置：第 45 行
   - 建议：添加 Skeleton 组件
   - 修复命令：// @antd:fix skeleton

2. ⚠️ Table 缺少 rowKey
   - 位置：第 78 行
   - 建议：添加 rowKey="id"
   - 修复命令：// @antd:fix table-props

### 优化建议
1. ✅ 可考虑使用 PageContainer 统一页面布局
2. ✅ 添加错误边界处理提升稳定性
```

## ⚙️ 配置

### 项目配置

在项目根目录创建 `.antdskillsrc` 文件：

```yaml
# Ant Design 版本
antdVersion: "5.x"

# 代码语言
language: "typescript"

# 样式方案
styleType: "css-in-js"

# 使用 ProComponents
useProComponents: true

# 规范检查配置
validation:
  checkOnSave: true
  autoFix: false
  disabledRules:
    - "some-rule-id"

# 自定义组件
customComponents:
  prefix: "@my-company/components"
  components:
    - name: "BizTable"
      description: "业务表格组件"
```

### 配置优先级

1. 项目配置 (`.antdskillsrc`) - 最高优先级
2. 团队配置 (`team-config.yml`)
3. 全局配置 (`default-config.yml`) - 最低优先级

## 🧩 插件扩展

Skills 支持通过插件扩展功能：

### 创建插件

```typescript
import { AntdSkillsPlugin } from 'antd-skills/plugins';

const myPlugin: AntdSkillsPlugin = {
  meta: {
    name: 'my-custom-plugin',
    displayName: '我的自定义插件',
    version: '1.0.0',
  },
  
  // 扩展组件
  components: [
    {
      name: 'MyComponent',
      description: '自定义组件',
      category: 'general',
      importPath: '@my-company/components',
    },
  ],
  
  // 自定义校验规则
  validators: [
    {
      id: 'my-rule',
      name: '自定义规则',
      level: 'warning',
      type: 'standard',
      validate: async (code) => {
        // 校验逻辑
        return { passed: true, issues: [] };
      },
    },
  ],
};

export default myPlugin;
```

### 扩展类型

- **组件扩展** - 添加企业自定义组件
- **模式扩展** - 添加自定义页面模式
- **命令扩展** - 添加自定义命令
- **规则扩展** - 添加自定义校验规则

## 📁 项目结构

```
antd-skills/
├── skill.json              # Skills 元数据
├── .cursorrules            # Cursor 规则配置
├── README.md               # 说明文档
├── config/                 # 配置文件
│   ├── default-config.yml  # 默认配置
│   └── .antdskillsrc.example
├── rules/                  # 规范规则
│   ├── validators.yml      # 校验规则
│   ├── components.yml      # 组件规范
│   └── patterns.yml        # 页面模式
├── templates/              # 代码模板
│   ├── pages/              # 页面模板
│   │   ├── admin.tsx.template
│   │   ├── list.tsx.template
│   │   ├── form.tsx.template
│   │   ├── detail.tsx.template
│   │   ├── modal.tsx.template
│   │   └── drawer.tsx.template
│   └── components/         # 组件模板
│       ├── table.tsx.template
│       └── form.tsx.template
├── migrations/             # 迁移工具
│   └── v4-to-v5.yml
└── plugins/                # 插件接口
    └── plugin-interface.ts
```

## 🔄 版本迁移

### v4 到 v5 迁移

```typescript
// @antd:migrate v4-to-v5
```

迁移工具会：
1. 扫描项目中需要修改的文件
2. 自动替换废弃的属性名（如 `visible` → `open`）
3. 生成需要手动修改的项目清单
4. 提供样式迁移指南（Less 变量 → Design Token）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 开发指南

```bash
# 克隆项目
git clone https://github.com/antd-skills/antd-design-assistant.git

# 安装依赖
npm install

# 本地开发
npm run dev

# 运行测试
npm test
```

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 🔗 相关链接

- [Ant Design 官网](https://ant.design/)
- [Ant Design Pro Components](https://procomponents.ant.design/)
- [Cursor IDE](https://cursor.sh/)
- [问题反馈](https://github.com/antd-skills/antd-design-assistant/issues)

---

Made with ❤️ by AntD Skills Team
