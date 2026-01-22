# 生成组件脚本

当用户使用 `@antd:component [组件名]` 命令时，生成带有最佳实践的组件代码。

## 支持的组件

### Table

```typescript
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

### Form

```typescript
const [form] = Form.useForm();

<Form
  form={form}
  layout="vertical"
  onFinish={handleSubmit}
  initialValues={initialData}
>
  <Form.Item
    name="fieldName"
    label="字段名"
    rules={[{ required: true, message: '请输入' }]}
  >
    <Input placeholder="请输入" />
  </Form.Item>
</Form>
```

### Modal

```typescript
<Modal
  title="标题"
  open={visible}
  onOk={handleOk}
  onCancel={handleCancel}
  confirmLoading={loading}
  destroyOnClose
>
  <Content />
</Modal>
```

### Drawer

```typescript
<Drawer
  title="标题"
  placement="right"
  width={600}
  open={visible}
  onClose={onClose}
  footer={
    <Space>
      <Button onClick={onClose}>取消</Button>
      <Button type="primary" onClick={handleSubmit}>确定</Button>
    </Space>
  }
>
  <Content />
</Drawer>
```

### ProTable

```typescript
<ProTable
  rowKey="id"
  columns={columns}
  request={async (params) => {
    const { data, total } = await fetchData(params);
    return { data, success: true, total };
  }}
  search={{ labelWidth: 'auto' }}
  toolBarRender={() => [
    <Button key="add" type="primary" icon={<PlusOutlined />}>
      新建
    </Button>,
  ]}
/>
```

## 自动导入

生成组件时自动添加必要的导入：

```typescript
import { Table, Form, Modal, Drawer, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
```
