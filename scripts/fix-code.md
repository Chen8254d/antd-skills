# 代码修复脚本

当用户使用 `@antd:fix [类型]` 命令时，按照以下规则自动修复代码。

## 支持的修复类型

### @antd:fix imports

修复导入问题：

```typescript
// 修复前
import antd from 'antd';
import { Button } from 'antd';
import { Table } from 'antd';

// 修复后
import { Button, Table } from 'antd';
```

### @antd:fix props

修复属性问题：

```typescript
// 修复前
<Table columns={columns} dataSource={data} />

// 修复后
<Table
  rowKey="id"
  columns={columns}
  dataSource={data}
  loading={loading}
  pagination={{
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `共 ${total} 条`,
  }}
/>
```

### @antd:fix skeleton

添加骨架屏：

```typescript
// 修复前
return <Content />;

// 修复后
return loading ? (
  <Skeleton active paragraph={{ rows: 10 }} />
) : (
  <Content />
);
```

### @antd:fix table-props

修复表格属性：

```typescript
// 自动添加
- rowKey="id"
- loading={loading}
- pagination 配置
```

### @antd:fix style

修复样式问题：

```typescript
// 修复前
<div style={{ color: '#1890ff' }}>

// 修复后
const { token } = theme.useToken();
<div style={{ color: token.colorPrimary }}>
```

### @antd:fix all

执行所有可自动修复的问题。

## 修复原则

1. **安全优先** - 只修复确定安全的问题
2. **保持逻辑** - 不改变代码业务逻辑
3. **格式统一** - 遵循项目代码风格
