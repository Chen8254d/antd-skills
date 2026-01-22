# Figma 设计稿转代码脚本

当用户使用 `@antd:figma [Figma链接]` 命令时，从 Figma 设计稿生成 Ant Design 代码。

## 命令格式

```
@antd:figma https://www.figma.com/file/xxxxx/Design?node-id=123:456
@antd:figma [fileKey] [nodeId]
```

## 执行流程

### 步骤 1：获取 Figma 数据

使用 Figma MCP 工具获取设计稿数据：

```
调用: mcp_Framelink_Figma_MCP_get_figma_data
参数:
  - fileKey: 从 URL 提取的文件 ID
  - nodeId: 从 URL 提取的节点 ID（可选）
```

### 步骤 2：分析设计稿结构

从 Figma 数据中识别：

1. **布局结构**
   - 页面布局类型（列表页/表单页/详情页/仪表盘）
   - 栅格系统（Row/Col 配置）
   - Flex 布局方向和对齐

2. **组件识别**
   - 按钮 → `<Button>`
   - 输入框 → `<Input>`
   - 表格 → `<Table>`
   - 卡片 → `<Card>`
   - 表单 → `<Form>`
   - 弹窗 → `<Modal>`
   - 标签页 → `<Tabs>`
   - 等等...

3. **样式提取**
   - 颜色 → 映射到 Design Token
   - 字体大小 → 映射到 token.fontSize*
   - 间距 → 映射到 token.padding/margin*
   - 圆角 → 映射到 token.borderRadius*

### 步骤 3：生成代码

根据识别结果生成代码：

```typescript
// 1. 导入语句
import React from 'react';
import { Button, Card, Table, Form, Input } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

// 2. 组件代码
const PageName: React.FC = () => {
  // 状态和逻辑
  
  return (
    <PageContainer>
      {/* 根据设计稿结构生成 */}
    </PageContainer>
  );
};

export default PageName;
```

### 步骤 4：下载图片资源（如有）

如果设计稿中有图片/图标：

```
调用: mcp_Framelink_Figma_MCP_download_figma_images
参数:
  - fileKey: 文件 ID
  - nodes: 图片节点列表
  - localPath: 本地保存路径
```

## 组件映射规则

| Figma 元素特征 | Ant Design 组件 |
|---------------|-----------------|
| 矩形 + 文字 + 点击态 | `<Button>` |
| 边框 + 输入提示文字 | `<Input>` |
| 网格结构 + 表头 | `<Table>` |
| 圆角矩形容器 + 阴影 | `<Card>` |
| 标签 + 内容切换 | `<Tabs>` |
| 弹出层 + 遮罩 | `<Modal>` |
| 侧边滑出 | `<Drawer>` |
| 标签 + 输入组合 | `<Form.Item>` |
| 下拉箭头 + 选项 | `<Select>` |
| 勾选框 | `<Checkbox>` |
| 开关 | `<Switch>` |
| 数据卡片 + 数字 | `<Statistic>` |
| 头像圆形 | `<Avatar>` |
| 状态标签 | `<Tag>` |

## 颜色映射

| Figma 颜色 | Design Token |
|-----------|--------------|
| #1677ff (蓝色) | `token.colorPrimary` |
| #52c41a (绿色) | `token.colorSuccess` |
| #faad14 (黄色) | `token.colorWarning` |
| #ff4d4f (红色) | `token.colorError` |
| rgba(0,0,0,0.88) | `token.colorText` |
| rgba(0,0,0,0.65) | `token.colorTextSecondary` |
| #ffffff | `token.colorBgContainer` |
| #f5f5f5 | `token.colorBgLayout` |

## 输出示例

生成文件：`src/pages/[PageName]/index.tsx`

同时生成分析报告：`figma-analysis.md`

```markdown
# Figma 设计稿分析报告

## 设计稿信息
- 文件：Design System
- 节点：Dashboard Page
- 尺寸：1440 x 900

## 识别的组件
1. PageContainer - 页面容器
2. Card x 4 - 统计卡片
3. Table - 数据表格
4. Button x 3 - 操作按钮

## 生成的代码
- 文件：src/pages/Dashboard/index.tsx
- 组件数：8
- 代码行数：156

## 注意事项
1. 图标需要手动替换为 @ant-design/icons
2. 部分自定义样式需要调整
```
