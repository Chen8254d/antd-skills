# Ant Design 最佳实践

## 组件使用规范

### 1. 导入规范

```typescript
// ✅ 正确：按需导入
import { Button, Table, Form, Input } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

// ❌ 错误：全量导入
import antd from 'antd';
import * as Icons from '@ant-design/icons';
```

### 2. 表格规范

```typescript
// ✅ 必须设置 rowKey
<Table rowKey="id" columns={columns} dataSource={data} />

// ✅ 设置 loading 状态
<Table rowKey="id" loading={loading} />

// ✅ 配置分页
<Table
  pagination={{
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `共 ${total} 条`,
  }}
/>

// ✅ 长列表使用虚拟滚动
<Table virtual scroll={{ y: 500 }} />
```

### 3. 表单规范

```typescript
// ✅ 使用 Form.useForm 获取实例
const [form] = Form.useForm();

// ✅ 设置 initialValues 而非在 Form.Item 上设置
<Form initialValues={{ status: 'active' }}>

// ✅ 表单验证规则
<Form.Item
  rules={[
    { required: true, message: '必填项' },
    { max: 50, message: '最多50个字符' },
    { pattern: /^[a-zA-Z]+$/, message: '只能输入字母' },
  ]}
>

// ✅ 提交按钮使用 htmlType="submit"
<Button type="primary" htmlType="submit">提交</Button>
```

### 4. 弹窗规范

```typescript
// ✅ 表单弹窗设置 destroyOnClose
<Modal destroyOnClose>

// ✅ 重要操作禁止点击蒙层关闭
<Modal maskClosable={false}>

// ✅ 使用 confirmLoading
<Modal confirmLoading={loading}>

// ✅ 删除确认使用 Modal.confirm
Modal.confirm({
  title: '确认删除？',
  content: '删除后不可恢复',
  onOk: handleDelete,
});
```

## 状态管理规范

### 1. 加载状态

```typescript
// ✅ 页面加载使用骨架屏
{loading ? <Skeleton active /> : <Content />}

// ✅ 按钮加载状态
<Button loading={submitting}>提交</Button>

// ✅ 表格加载状态
<Table loading={loading} />
```

### 2. 空状态

```typescript
// ✅ 列表空状态
import { Empty } from 'antd';

{data.length === 0 ? (
  <Empty description="暂无数据" />
) : (
  <List dataSource={data} />
)}
```

### 3. 错误处理

```typescript
// ✅ 错误边界
import { Result } from 'antd';

<ErrorBoundary fallback={<Result status="error" title="出错了" />}>
  <App />
</ErrorBoundary>

// ✅ 请求错误提示
try {
  await api.fetch();
  message.success('操作成功');
} catch (error) {
  message.error('操作失败：' + error.message);
}
```

## 性能优化

### 1. 避免重渲染

```typescript
// ❌ 内联 style 对象会导致重渲染
<div style={{ color: 'red' }}>

// ✅ 提取到组件外部
const styles = { color: 'red' };
<div style={styles}>

// ❌ 内联函数会导致重渲染
<Button onClick={() => handleClick(id)}>

// ✅ 使用 useCallback
const handleButtonClick = useCallback(() => handleClick(id), [id]);
<Button onClick={handleButtonClick}>
```

### 2. 大列表优化

```typescript
// ✅ 使用虚拟滚动
<Table virtual scroll={{ y: 500 }} />

// ✅ 分页加载
<Table pagination={{ pageSize: 20 }} />
```

### 3. 代码分割

```typescript
// ✅ 路由懒加载
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

<Suspense fallback={<Skeleton />}>
  <Dashboard />
</Suspense>
```

## 无障碍访问

### 1. 图片

```typescript
// ✅ 设置 alt 属性
<Image alt="用户头像" src={avatar} />
```

### 2. 图标按钮

```typescript
// ✅ 设置 aria-label
<Button icon={<DeleteOutlined />} aria-label="删除" />

// ✅ 或者配合 Tooltip
<Tooltip title="删除">
  <Button icon={<DeleteOutlined />} />
</Tooltip>
```

### 3. 表单

```typescript
// ✅ 设置 label
<Form.Item label="用户名" name="username">
  <Input />
</Form.Item>
```

## 交互反馈

### 1. 操作反馈

```typescript
// ✅ 成功提示
message.success('保存成功');

// ✅ 错误提示
message.error('保存失败');

// ✅ 加载提示
const hide = message.loading('保存中...');
await save();
hide();
message.success('保存成功');
```

### 2. 确认操作

```typescript
// ✅ 危险操作需确认
<Popconfirm
  title="确定删除？"
  onConfirm={handleDelete}
>
  <Button danger>删除</Button>
</Popconfirm>
```
