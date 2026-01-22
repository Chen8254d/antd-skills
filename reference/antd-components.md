# Ant Design 组件参考

## 通用组件

### Button 按钮

```typescript
import { Button } from 'antd';

// 类型
type="primary" | "default" | "dashed" | "link" | "text"

// 常用属性
<Button
  type="primary"
  size="middle"        // large | middle | small
  icon={<PlusOutlined />}
  loading={loading}
  disabled={disabled}
  danger              // 危险按钮
  onClick={handleClick}
>
  按钮文字
</Button>
```

### Typography 排版

```typescript
import { Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

<Title level={2}>标题</Title>
<Text type="secondary">次要文字</Text>
<Text type="success">成功文字</Text>
<Text type="warning">警告文字</Text>
<Text type="danger">错误文字</Text>
<Paragraph>段落文字</Paragraph>
```

## 布局组件

### Space 间距

```typescript
import { Space } from 'antd';

<Space size="middle" direction="horizontal" wrap>
  <Button>按钮1</Button>
  <Button>按钮2</Button>
</Space>
```

### Flex 弹性布局

```typescript
import { Flex } from 'antd';

<Flex gap="middle" justify="space-between" align="center" vertical={false}>
  <div>左侧</div>
  <div>右侧</div>
</Flex>
```

### Row/Col 栅格

```typescript
import { Row, Col } from 'antd';

<Row gutter={[16, 16]}>
  <Col xs={24} sm={12} md={8} lg={6}>内容</Col>
</Row>
```

## 数据录入

### Form 表单

```typescript
import { Form, Input, Select, Button } from 'antd';

const [form] = Form.useForm();

<Form
  form={form}
  layout="vertical"      // horizontal | vertical | inline
  onFinish={handleSubmit}
  initialValues={{ status: 'active' }}
>
  <Form.Item
    name="username"
    label="用户名"
    rules={[
      { required: true, message: '请输入用户名' },
      { max: 20, message: '最多20个字符' },
    ]}
  >
    <Input placeholder="请输入用户名" />
  </Form.Item>
  
  <Form.Item>
    <Button type="primary" htmlType="submit">提交</Button>
  </Form.Item>
</Form>
```

### Select 选择器

```typescript
import { Select } from 'antd';

<Select
  placeholder="请选择"
  allowClear
  showSearch
  optionFilterProp="children"
  onChange={handleChange}
>
  <Select.Option value="1">选项1</Select.Option>
  <Select.Option value="2">选项2</Select.Option>
</Select>

// 多选
<Select mode="multiple" />
<Select mode="tags" />
```

## 数据展示

### Table 表格

```typescript
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<DataType> = [
  { title: '名称', dataIndex: 'name', key: 'name' },
  { title: '状态', dataIndex: 'status', key: 'status' },
  { title: '操作', key: 'action', render: (_, record) => <a>编辑</a> },
];

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

### Descriptions 描述列表

```typescript
import { Descriptions } from 'antd';

<Descriptions title="用户信息" bordered column={2}>
  <Descriptions.Item label="用户名">张三</Descriptions.Item>
  <Descriptions.Item label="电话">1810000000</Descriptions.Item>
</Descriptions>
```

### Card 卡片

```typescript
import { Card } from 'antd';

<Card
  title="卡片标题"
  extra={<a href="#">更多</a>}
  hoverable
>
  卡片内容
</Card>
```

## 反馈组件

### Modal 对话框

```typescript
import { Modal } from 'antd';

// 组件方式
<Modal
  title="标题"
  open={visible}
  onOk={handleOk}
  onCancel={handleCancel}
  confirmLoading={loading}
  destroyOnClose
  maskClosable={false}
>
  内容
</Modal>

// 方法调用
Modal.confirm({
  title: '确认删除？',
  content: '删除后不可恢复',
  onOk: handleDelete,
});
```

### Drawer 抽屉

```typescript
import { Drawer } from 'antd';

<Drawer
  title="标题"
  placement="right"
  width={600}
  open={visible}
  onClose={onClose}
  footer={<Button onClick={onClose}>关闭</Button>}
>
  内容
</Drawer>
```

### message 消息提示

```typescript
import { message } from 'antd';

message.success('操作成功');
message.error('操作失败');
message.warning('请注意');
message.loading('加载中...');
```

### notification 通知

```typescript
import { notification } from 'antd';

notification.success({
  message: '操作成功',
  description: '数据已保存',
});
```

### Skeleton 骨架屏

```typescript
import { Skeleton } from 'antd';

{loading ? (
  <Skeleton active paragraph={{ rows: 10 }} />
) : (
  <Content />
)}
```
