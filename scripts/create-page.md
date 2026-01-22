# 创建页面脚本

当用户使用 `@antd:create page [类型]` 命令时，按照以下步骤执行：

## 执行流程

1. **识别页面类型**
   - `admin` → 使用 `templates/pages/admin.tsx.template`
   - `list` → 使用 `templates/pages/list.tsx.template`
   - `form` → 使用 `templates/pages/form.tsx.template`
   - `detail` → 使用 `templates/pages/detail.tsx.template`
   - `modal` → 使用 `templates/pages/modal.tsx.template`
   - `drawer` → 使用 `templates/pages/drawer.tsx.template`

2. **替换模板变量**
   - `{{PageName}}` → 用户指定的页面名称（PascalCase）
   - `{{DataType}}` → 数据类型名称
   - `{{FormDataType}}` → 表单数据类型名称
   - `{{ComponentName}}` → 组件名称

3. **生成文件**
   - 在当前目录或指定目录创建文件
   - 文件名使用 kebab-case 格式

## 示例

用户输入：
```
// @antd:create page list
```

输出：
- 生成 `templates/pages/list.tsx.template` 的内容
- 替换变量为用户指定或默认的名称
