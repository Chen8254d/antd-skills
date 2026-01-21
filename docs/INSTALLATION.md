# 安装指南

本文档详细介绍如何安装和配置 Ant Design 规范助手 Skills。

## 📦 安装方式

### 方式一：Cursor Skills 市场安装（推荐）

1. 打开 Cursor IDE
2. 按 `Cmd/Ctrl + Shift + P` 打开命令面板
3. 输入 "Install Skills" 并选择
4. 在 Skills 市场搜索 "Ant Design 规范助手"
5. 点击 "安装" 按钮
6. 重启 Cursor IDE

### 方式二：手动安装

1. **克隆仓库**

```bash
git clone https://github.com/antd-skills/antd-design-assistant.git
```

2. **复制到 Cursor Skills 目录**

```bash
# macOS
cp -r antd-design-assistant ~/.cursor/skills/

# Windows
xcopy antd-design-assistant %USERPROFILE%\.cursor\skills\ /E /I

# Linux
cp -r antd-design-assistant ~/.cursor/skills/
```

3. **重启 Cursor IDE**

### 方式三：项目内安装

如果只想在特定项目中使用，可以将 Skills 文件放在项目目录中：

```bash
# 进入项目目录
cd your-project

# 创建 .cursor 目录
mkdir -p .cursor/skills

# 复制 Skills
cp -r path/to/antd-design-assistant .cursor/skills/
```

## ⚙️ 配置

### 项目配置

在项目根目录创建 `.antdskillsrc` 文件：

```yaml
# 基础配置
antdVersion: "5.x"
language: "typescript"
styleType: "css-in-js"
useProComponents: true

# 检查配置
validation:
  checkOnSave: true
  autoFix: false
```

详细配置说明请参考 `config/.antdskillsrc.example` 文件。

### 团队配置

如果需要在团队中统一规范，可以创建团队配置：

1. 创建团队规范仓库
2. 在项目配置中指定团队仓库地址

```yaml
team:
  rulesRepository: "https://your-company.com/antd-skills-rules"
  syncInterval: 24
  enforceTeamRules: true
```

## ✅ 验证安装

安装完成后，在 Cursor IDE 中：

1. 打开任意 `.tsx` 或 `.jsx` 文件
2. 输入 `// @antd:docs Button`
3. AI 助手应该会返回 Button 组件的文档和最佳实践

如果没有响应，请检查：

1. Skills 目录结构是否正确
2. 是否重启了 Cursor IDE
3. 文件是否在支持的语言范围内（TypeScript/JavaScript）

## 🔄 更新

### 自动更新

Skills 默认每 24 小时检查一次更新，可以在配置中修改：

```yaml
update:
  autoCheckUpdate: true
  checkInterval: 24
```

### 手动更新

```bash
# 进入 Skills 目录
cd ~/.cursor/skills/antd-design-assistant

# 拉取最新代码
git pull origin main
```

## 🔧 故障排除

### Skills 不生效

1. 确认文件扩展名是 `.tsx`、`.jsx`、`.ts` 或 `.js`
2. 检查 `skill.json` 中的 `activationEvents` 配置
3. 重启 Cursor IDE

### 命令无响应

1. 确认命令格式正确，如 `// @antd:create page list`
2. 检查是否有语法错误
3. 查看 Cursor IDE 的输出面板是否有错误信息

### 配置不生效

1. 确认 `.antdskillsrc` 文件在项目根目录
2. 检查 YAML 语法是否正确
3. 重新打开项目

## 📞 获取帮助

如果遇到问题：

1. 查看 [FAQ 文档](./FAQ.md)
2. 在 [GitHub Issues](https://github.com/antd-skills/antd-design-assistant/issues) 提交问题
3. 加入社区讨论群
