# 代码检查脚本

当用户使用 `@antd:check current` 或 `@antd:check all` 命令时，按照以下规则检查代码。

## 检查流程

1. **读取当前文件内容**

2. **执行多级校验**

### 语法级校验
```
检查项：
- [ ] 组件是否按需导入（不能 import antd from 'antd'）
- [ ] Table 组件是否设置 rowKey
- [ ] Form 是否使用 Form.useForm()
- [ ] 必需属性是否存在
```

### 规范级校验
```
检查项：
- [ ] 是否使用 Space/Flex 组件管理间距
- [ ] 是否使用 Design Token 而非硬编码颜色
- [ ] 布局是否使用 Row/Col 或 Flex
- [ ] 间距值是否为 4 的倍数
```

### 性能级校验
```
检查项：
- [ ] 是否有内联 style 对象（导致重渲染）
- [ ] 是否有内联箭头函数
- [ ] 组件是否超过 300 行
```

### 体验级校验
```
检查项：
- [ ] Table 是否设置 loading 属性
- [ ] 提交按钮是否有 loading 状态
- [ ] 是否有骨架屏加载
- [ ] 删除操作是否有确认
- [ ] 操作完成是否有 message 反馈
```

3. **生成报告**

```markdown
## 规范检查报告
文件：{filename}
评分：{score}/100

### 问题列表
1. {level} {description}
   - 位置：第 {line} 行
   - 建议：{suggestion}
   - 修复命令：{fix_command}

### 优化建议
1. ✅ {suggestion}
```

## 评分规则

- 每个 Error 级问题 -10 分
- 每个 Warning 级问题 -5 分
- 每个 Info 级问题 -2 分
- 基础分 100 分
