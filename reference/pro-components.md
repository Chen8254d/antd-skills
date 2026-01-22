# ProComponents 参考

ProComponents 是 Ant Design 的高级业务组件库。

## 安装

```bash
npm install @ant-design/pro-components
```

## ProTable 高级表格

```typescript
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

interface DataType {
  id: string;
  name: string;
  status: string;
}

const columns: ProColumns<DataType>[] = [
  {
    title: '名称',
    dataIndex: 'name',
    ellipsis: true,
    formItemProps: {
      rules: [{ required: true }],
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    valueEnum: {
      active: { text: '启用', status: 'Success' },
      inactive: { text: '禁用', status: 'Default' },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (_, record, __, action) => [
      <a key="edit" onClick={() => handleEdit(record)}>编辑</a>,
      <a key="delete" onClick={() => handleDelete(record)}>删除</a>,
    ],
  },
];

const actionRef = useRef<ActionType>();

<ProTable<DataType>
  rowKey="id"
  actionRef={actionRef}
  columns={columns}
  request={async (params, sort, filter) => {
    const { data, total } = await fetchData(params);
    return { data, success: true, total };
  }}
  search={{
    labelWidth: 'auto',
    defaultCollapsed: false,
  }}
  pagination={{
    showSizeChanger: true,
    showQuickJumper: true,
  }}
  toolBarRender={() => [
    <Button key="add" type="primary" icon={<PlusOutlined />}>
      新建
    </Button>,
  ]}
/>
```

### 常用 valueType

| 类型 | 说明 |
|------|------|
| `text` | 普通文本 |
| `select` | 下拉选择 |
| `date` | 日期 |
| `dateTime` | 日期时间 |
| `dateRange` | 日期范围 |
| `money` | 金额 |
| `digit` | 数字 |
| `option` | 操作列 |
| `index` | 序号 |
| `textarea` | 文本域 |

## ProForm 高级表单

```typescript
import { ProForm, ProFormText, ProFormSelect, ProFormDatePicker } from '@ant-design/pro-components';

<ProForm
  onFinish={async (values) => {
    console.log(values);
    return true;
  }}
>
  <ProFormText
    name="name"
    label="名称"
    placeholder="请输入名称"
    rules={[{ required: true }]}
  />
  <ProFormSelect
    name="status"
    label="状态"
    options={[
      { label: '启用', value: 'active' },
      { label: '禁用', value: 'inactive' },
    ]}
  />
  <ProFormDatePicker name="date" label="日期" />
</ProForm>
```

### 表单布局

```typescript
import { ProForm, ProFormGroup } from '@ant-design/pro-components';

// 分组
<ProFormGroup title="基本信息">
  <ProFormText name="name" label="名称" />
</ProFormGroup>

// 分步表单
import { StepsForm } from '@ant-design/pro-components';

<StepsForm
  onFinish={async (values) => {
    console.log(values);
    return true;
  }}
>
  <StepsForm.StepForm title="第一步">
    <ProFormText name="name" label="名称" />
  </StepsForm.StepForm>
  <StepsForm.StepForm title="第二步">
    <ProFormText name="desc" label="描述" />
  </StepsForm.StepForm>
</StepsForm>
```

## PageContainer 页面容器

```typescript
import { PageContainer } from '@ant-design/pro-components';

<PageContainer
  header={{
    title: '页面标题',
    subTitle: '副标题',
    onBack: () => history.back(),
    extra: [
      <Button key="1">次要操作</Button>,
      <Button key="2" type="primary">主要操作</Button>,
    ],
  }}
  content="页面描述内容"
>
  <Card>页面内容</Card>
</PageContainer>
```

## ProCard 高级卡片

```typescript
import { ProCard } from '@ant-design/pro-components';

// 分栏
<ProCard split="vertical">
  <ProCard title="左侧">左侧内容</ProCard>
  <ProCard title="右侧">右侧内容</ProCard>
</ProCard>

// 标签页
<ProCard
  tabs={{
    items: [
      { key: '1', label: 'Tab1', children: '内容1' },
      { key: '2', label: 'Tab2', children: '内容2' },
    ],
  }}
/>
```

## ProDescriptions 高级描述

```typescript
import { ProDescriptions } from '@ant-design/pro-components';

<ProDescriptions
  title="详情"
  request={async () => ({ data: detailData, success: true })}
  columns={[
    { title: '名称', dataIndex: 'name' },
    { title: '状态', dataIndex: 'status', valueType: 'select', valueEnum: {} },
    { title: '创建时间', dataIndex: 'createdAt', valueType: 'dateTime' },
  ]}
/>
```
