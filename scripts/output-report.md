# 报告输出脚本

定义各命令的文档输出格式和规范。

## 输出文件规范

| 命令 | 输出文件名 | 位置 |
|------|-----------|------|
| `@antd:check current` | `antd-check-report.md` | 当前目录 |
| `@antd:check all` | `antd-project-report.md` | 项目根目录 |
| `@antd:analyze` | `antd-analysis.md` | 当前目录 |
| `@antd:migrate` | `antd-migration-report.md` | 项目根目录 |
| `@antd:figma` | `figma-analysis.md` | 当前目录 |

---

## @antd:check current 报告模板

输出文件：`antd-check-report.md`

```markdown
# Ant Design 规范检查报告

> 生成时间：{timestamp}
> 检查文件：{filepath}

## 📊 总体评分

**{score}/100** {score >= 80 ? '✅ 优秀' : score >= 60 ? '⚠️ 良好' : '❌ 需改进'}

| 级别 | 数量 |
|------|------|
| 🔴 错误 (Error) | {error_count} |
| 🟡 警告 (Warning) | {warning_count} |
| 🔵 提示 (Info) | {info_count} |

---

## 🔴 错误 (必须修复)

### 1. {error_title}
- **位置**：第 {line} 行
- **问题**：{description}
- **建议**：{suggestion}
- **修复命令**：`@antd:fix {fix_type}`

```typescript
// 问题代码
{code_snippet}

// 修复后
{fixed_code}
```

---

## 🟡 警告 (建议修复)

### 1. {warning_title}
- **位置**：第 {line} 行
- **问题**：{description}
- **建议**：{suggestion}

---

## 🔵 提示 (可选优化)

### 1. {info_title}
- **建议**：{suggestion}

---

## ✅ 已通过的检查

- [x] 组件按需导入
- [x] Table 设置 rowKey
- [x] Form 使用 useForm
- [ ] 骨架屏加载
- [ ] 错误边界处理

---

## 📝 快速修复命令

```bash
# 修复所有可自动修复的问题
@antd:fix all

# 仅修复导入问题
@antd:fix imports

# 仅修复属性问题
@antd:fix props
```

---

*报告由 Ant Design 规范助手生成*
```

---

## @antd:check all 报告模板

输出文件：`antd-project-report.md`

```markdown
# Ant Design 项目规范报告

> 生成时间：{timestamp}
> 项目路径：{project_path}

## 📊 项目概览

| 指标 | 数值 |
|------|------|
| 扫描文件数 | {total_files} |
| 通过文件数 | {passed_files} |
| 问题文件数 | {failed_files} |
| 总体评分 | **{average_score}/100** |

---

## 📈 评分分布

| 评分范围 | 文件数 | 占比 |
|----------|--------|------|
| 90-100 (优秀) | {count} | {percent}% |
| 80-89 (良好) | {count} | {percent}% |
| 60-79 (及格) | {count} | {percent}% |
| 0-59 (不及格) | {count} | {percent}% |

---

## 🔴 高优先级问题 (Top 10)

| 文件 | 问题 | 评分 |
|------|------|------|
| {filepath} | {issue} | {score} |
| ... | ... | ... |

---

## 📁 文件详情

### {filepath}
- **评分**：{score}/100
- **错误**：{error_count}
- **警告**：{warning_count}

<details>
<summary>查看详情</summary>

{detailed_issues}

</details>

---

## 📊 问题类型统计

| 问题类型 | 数量 | 占比 |
|----------|------|------|
| 缺少 rowKey | {count} | {percent}% |
| 缺少 loading 状态 | {count} | {percent}% |
| 内联样式对象 | {count} | {percent}% |
| 导入不规范 | {count} | {percent}% |
| ... | ... | ... |

---

## 💡 改进建议

1. **优先处理高频问题**：{most_common_issue}
2. **统一团队规范**：建议配置 `.antdskillsrc`
3. **定期检查**：建议在 CI/CD 中集成规范检查

---

*报告由 Ant Design 规范助手生成*
```

---

## @antd:analyze 报告模板

输出文件：`antd-analysis.md`

```markdown
# 代码分析报告

> 生成时间：{timestamp}
> 分析文件：{filepath}

## 📦 组件使用情况

### Ant Design 组件

| 组件 | 使用次数 | 是否规范 |
|------|----------|----------|
| Button | 5 | ✅ |
| Table | 1 | ⚠️ 缺少 loading |
| Form | 1 | ✅ |
| Modal | 2 | ✅ |

### 导入分析

```typescript
// 当前导入
import { Button, Table, Form, Modal, message } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

// 建议：导入规范 ✅
```

---

## 🏗️ 代码结构

```
组件结构：
├── PageName (函数组件)
│   ├── useState x 3
│   ├── useEffect x 2
│   ├── 自定义 hooks x 1
│   └── 渲染部分
│       ├── PageContainer
│       ├── Card
│       ├── Table
│       └── Modal
```

---

## 📏 代码指标

| 指标 | 数值 | 状态 |
|------|------|------|
| 总行数 | 256 | ✅ |
| 组件数 | 1 | ✅ |
| 状态数 | 3 | ✅ |
| 复杂度 | 中等 | ⚠️ |

---

## 💡 优化建议

### 1. 性能优化
- 建议将 `handleClick` 包装在 `useCallback` 中
- 建议将 `columns` 定义移到组件外部

### 2. 代码组织
- 建议将 Modal 抽取为独立组件
- 建议将 API 调用抽取到 services 层

### 3. 用户体验
- 建议添加骨架屏加载
- 建议添加错误边界

---

*报告由 Ant Design 规范助手生成*
```

---

## @antd:migrate 报告模板

输出文件：`antd-migration-report.md`

```markdown
# Ant Design v4 → v5 迁移报告

> 生成时间：{timestamp}
> 项目路径：{project_path}

## 📊 迁移概览

| 指标 | 数值 |
|------|------|
| 扫描文件数 | {total_files} |
| 需要修改文件数 | {affected_files} |
| 可自动修复 | {auto_fixable} |
| 需手动处理 | {manual_fix} |

---

## ✅ 自动修复项

以下问题已自动修复：

| 文件 | 修改项 | 状态 |
|------|--------|------|
| src/pages/List.tsx | `visible` → `open` | ✅ 已修复 |
| src/pages/Detail.tsx | `onVisibleChange` → `onOpenChange` | ✅ 已修复 |
| src/components/Modal.tsx | `bodyStyle` → `styles.body` | ✅ 已修复 |

---

## ⚠️ 需手动处理

### 1. Tabs.TabPane 迁移

**文件**：`src/pages/Settings.tsx`

```typescript
// 修改前
<Tabs>
  <Tabs.TabPane tab="Tab 1" key="1">Content</Tabs.TabPane>
</Tabs>

// 修改后
<Tabs
  items={[
    { key: '1', label: 'Tab 1', children: 'Content' },
  ]}
/>
```

### 2. Menu.Item 迁移

**文件**：`src/layouts/Sidebar.tsx`

```typescript
// 需要手动重构为 items 属性
```

### 3. 样式迁移

**文件**：`src/styles/theme.less`

```less
// 修改前 (Less 变量)
@primary-color: #1890ff;

// 修改后 (ConfigProvider)
<ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
```

---

## 📋 迁移清单

- [x] 更新 antd 依赖到 v5
- [x] 替换 visible → open
- [x] 替换 onVisibleChange → onOpenChange
- [ ] 迁移 Tabs.TabPane 到 items
- [ ] 迁移 Menu.Item 到 items
- [ ] 移除 Less 变量，使用 Design Token
- [ ] 移除 antd/dist/antd.css 导入

---

## 🔧 修复命令

```bash
# 自动修复可处理的问题
@antd:fix all
```

---

*报告由 Ant Design 规范助手生成*
```

---

## @antd:figma 报告模板

输出文件：`figma-analysis.md`

```markdown
# Figma 设计稿转代码报告

> 生成时间：{timestamp}
> Figma 文件：{figma_url}

## 📐 设计稿信息

| 属性 | 值 |
|------|-----|
| 文件名 | {file_name} |
| 节点名称 | {node_name} |
| 尺寸 | {width} x {height} |

---

## 🧩 识别的组件

| 组件类型 | 数量 | 映射 |
|----------|------|------|
| 按钮 | 3 | `<Button>` |
| 输入框 | 5 | `<Input>` |
| 表格 | 1 | `<ProTable>` |
| 卡片 | 4 | `<Card>` |
| 统计数值 | 4 | `<Statistic>` |

---

## 📁 生成的文件

| 文件 | 路径 | 状态 |
|------|------|------|
| 页面组件 | `src/pages/{PageName}/index.tsx` | ✅ |
| 类型定义 | `src/pages/{PageName}/types.ts` | ✅ |
| 样式文件 | `src/pages/{PageName}/index.module.css` | ✅ |

---

## 🎨 样式映射

| Figma 样式 | Design Token |
|-----------|--------------|
| #1677ff | `token.colorPrimary` |
| 14px | `token.fontSize` |
| 8px 圆角 | `token.borderRadius` |
| 16px 间距 | `token.padding` |

---

## ⚠️ 注意事项

1. **图标**：设计稿中的图标需要替换为 `@ant-design/icons`
2. **字体**：使用系统默认字体，无需额外配置
3. **响应式**：已生成基础响应式代码，可能需要微调

---

## 📝 后续步骤

1. 检查生成的代码是否符合业务需求
2. 补充业务逻辑和 API 调用
3. 运行 `@antd:check current` 检查规范
4. 根据需要调整样式细节

---

*报告由 Ant Design 规范助手生成*
```
