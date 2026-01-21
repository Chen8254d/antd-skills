# 发布指南

本文档介绍如何发布 Ant Design 规范助手 Skills，让其他用户可以安装使用。

## 📦 发布方式

### 方式一：GitHub 发布（推荐）

这是最简单和最常用的方式。

#### 1. 创建 GitHub 仓库

```bash
# 进入项目目录
cd /Users/chensong/Desktop/antd-skills

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "feat: 初始化 Ant Design 规范助手 Skills v1.0.0"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/antd-design-assistant.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 2. 创建 Release

1. 在 GitHub 仓库页面，点击 "Releases"
2. 点击 "Create a new release"
3. 填写版本号：`v1.0.0`
4. 填写发布说明（可复制 CHANGELOG.md 内容）
5. 点击 "Publish release"

#### 3. 用户安装方式

其他用户可以通过以下方式安装：

```bash
# 克隆仓库
git clone https://github.com/你的用户名/antd-design-assistant.git

# 复制到 Cursor Skills 目录
# macOS
cp -r antd-design-assistant ~/.cursor/skills/

# Windows
xcopy antd-design-assistant %USERPROFILE%\.cursor\skills\ /E /I

# Linux
cp -r antd-design-assistant ~/.cursor/skills/
```

---

### 方式二：NPM 发布

如果想通过 npm 分发：

#### 1. 注册 npm 账号

```bash
npm login
```

#### 2. 发布

```bash
cd /Users/chensong/Desktop/antd-skills

# 发布到 npm
npm publish --access public
```

#### 3. 用户安装

```bash
npm install -g antd-design-assistant

# 或者在项目中
npm install antd-design-assistant --save-dev
```

---

### 方式三：企业内部发布

适合团队/企业内部使用。

#### 1. 搭建私有仓库

可以使用以下方式：
- GitLab 私有仓库
- GitHub Enterprise
- 公司内部 Git 服务器

#### 2. 配置私有 npm 源（可选）

```bash
# 使用 verdaccio 搭建私有 npm
npm install -g verdaccio
verdaccio

# 发布到私有源
npm publish --registry http://localhost:4873
```

#### 3. 团队成员安装

```bash
# 从私有 Git 安装
git clone https://内部地址/antd-design-assistant.git
cp -r antd-design-assistant ~/.cursor/skills/
```

---

### 方式四：直接分享文件

最简单的方式，适合小范围分享。

#### 1. 打包项目

```bash
cd /Users/chensong/Desktop/antd-skills

# 打包为 zip
zip -r antd-design-assistant-v1.0.0.zip . -x "node_modules/*" -x ".git/*"
```

#### 2. 分享文件

通过以下方式分享 zip 文件：
- 企业网盘（钉盘、飞书云盘等）
- 邮件
- 即时通讯工具

#### 3. 用户安装

```bash
# 解压到 Skills 目录
unzip antd-design-assistant-v1.0.0.zip -d ~/.cursor/skills/antd-design-assistant
```

---

## 🔄 版本更新

### 更新版本号

1. 修改 `package.json` 中的 `version`
2. 修改 `skill.json` 中的 `version`
3. 更新 `CHANGELOG.md`

```bash
# 示例：更新到 1.1.0
sed -i '' 's/"version": "1.0.0"/"version": "1.1.0"/g' package.json skill.json
```

### 发布新版本

```bash
# 提交更改
git add .
git commit -m "release: v1.1.0"

# 创建标签
git tag v1.1.0

# 推送
git push origin main --tags
```

---

## 📋 发布清单

发布前请确认：

- [ ] 更新版本号（package.json, skill.json）
- [ ] 更新 CHANGELOG.md
- [ ] 测试所有命令功能
- [ ] 确保文档完整
- [ ] 移除敏感信息
- [ ] 检查 .gitignore 配置

---

## 📢 推广

发布后可以通过以下渠道推广：

1. **GitHub**
   - 添加详细的 README
   - 设置适当的 Topics 标签
   - 添加 Star 数量徽章

2. **社区**
   - Ant Design 社区
   - React 社区
   - 掘金、SegmentFault 等技术社区

3. **企业内部**
   - 团队分享会
   - 内部文档/Wiki
   - 企业技术群

---

## 🤝 接受贡献

如果开源发布，建议添加：

1. **CONTRIBUTING.md** - 贡献指南
2. **CODE_OF_CONDUCT.md** - 行为准则
3. **Issue 模板** - 问题反馈模板
4. **PR 模板** - Pull Request 模板
