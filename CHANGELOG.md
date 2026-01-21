# Changelog

本项目所有重要更改都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [1.0.0] - 2024-01-20

### ✨ 新增

#### 命令系统
- `@antd:create page [类型]` - 创建标准页面模板（admin/list/form/detail/modal/drawer）
- `@antd:component [名称]` - 插入标准组件，自动填充推荐属性
- `@antd:pattern [模式]` - 应用页面模式（fullscreen-modal/drawer-layout/skeleton-page 等）
- `@antd:check current` - 检查当前文件规范
- `@antd:check all` - 检查项目规范
- `@antd:fix [类型]` - 自动修复问题
- `@antd:docs [组件]` - 查看组件文档和最佳实践
- `@antd:search pattern [关键词]` - 搜索页面模式
- `@antd:config` - 查看/修改配置
- `@antd:analyze` - 分析当前代码上下文
- `@antd:suggest` - 获取智能建议
- `@antd:batch create [数量] [类型]` - 批量创建
- `@antd:migrate v4-to-v5` - Ant Design v4 到 v5 迁移

#### 页面模板
- Admin Dashboard 管理后台模板
- List 列表页面模板（ProTable）
- Form 表单页面模板（分步表单）
- Detail 详情页面模板
- Modal 弹窗组件模板
- Drawer 抽屉组件模板

#### 组件模板
- Table 标准表格组件
- Form 标准表单组件

#### 规范检查
- 语法级校验（导入检查、属性类型、必需属性）
- 规范级校验（布局使用、间距规范、颜色规范）
- 性能级校验（重渲染检查、组件大小、代码分割）
- 体验级校验（加载状态、错误边界、交互反馈）
- 无障碍访问检查

#### 页面模式
- fullscreen-modal - 全屏弹窗模式
- drawer-layout - 抽屉布局模式
- skeleton-page - 骨架屏加载模式
- split-panel - 分栏面板模式
- tabs-layout - 标签页布局模式
- steps-wizard - 步骤引导模式
- dashboard - 数据看板模式
- crud-list - CRUD 列表模式

#### 配置系统
- 全局默认配置
- 项目级配置（.antdskillsrc）
- 配置热重载支持

#### 插件扩展
- 插件接口定义
- 组件扩展支持
- 模式扩展支持
- 命令扩展支持
- 校验规则扩展支持

#### 迁移工具
- Ant Design v4 到 v5 迁移规则
- 自动属性替换
- 样式迁移指南

### 📝 文档
- 完整的 README 文档
- 安装和使用指南
- 插件开发指南
- 配置说明

---

## 未来计划

### [1.1.0] - 计划中

- [ ] 支持更多组件模板
- [ ] 增加图表组件模板
- [ ] 支持 @ant-design/charts 规范
- [ ] VS Code 扩展支持
- [ ] 在线规范文档

### [1.2.0] - 计划中

- [ ] AI 驱动的代码审查
- [ ] 设计稿到代码（D2C）
- [ ] 自然语言生成代码
- [ ] 团队协作功能
