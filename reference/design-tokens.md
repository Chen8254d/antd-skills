# Design Token 参考

Ant Design 5.x 使用 Design Token 系统管理样式变量。

## 获取 Token

```typescript
import { theme } from 'antd';

const MyComponent = () => {
  const { token } = theme.useToken();
  
  return (
    <div style={{ color: token.colorPrimary }}>
      内容
    </div>
  );
};
```

## 常用 Token

### 颜色

| Token | 说明 | 示例值 |
|-------|------|--------|
| `colorPrimary` | 主色 | `#1677ff` |
| `colorSuccess` | 成功色 | `#52c41a` |
| `colorWarning` | 警告色 | `#faad14` |
| `colorError` | 错误色 | `#ff4d4f` |
| `colorInfo` | 信息色 | `#1677ff` |
| `colorText` | 文本色 | `rgba(0,0,0,0.88)` |
| `colorTextSecondary` | 次要文本色 | `rgba(0,0,0,0.65)` |
| `colorTextTertiary` | 第三文本色 | `rgba(0,0,0,0.45)` |
| `colorTextQuaternary` | 第四文本色 | `rgba(0,0,0,0.25)` |
| `colorBorder` | 边框色 | `#d9d9d9` |
| `colorBorderSecondary` | 次要边框色 | `#f0f0f0` |
| `colorBgContainer` | 容器背景色 | `#ffffff` |
| `colorBgLayout` | 布局背景色 | `#f5f5f5` |
| `colorBgSpotlight` | 聚焦背景色 | `rgba(0,0,0,0.85)` |
| `colorLink` | 链接色 | `#1677ff` |

### 字体

| Token | 说明 | 示例值 |
|-------|------|--------|
| `fontSize` | 基础字号 | `14` |
| `fontSizeSM` | 小字号 | `12` |
| `fontSizeLG` | 大字号 | `16` |
| `fontSizeXL` | 超大字号 | `20` |
| `fontSizeHeading1` | 标题1 | `38` |
| `fontSizeHeading2` | 标题2 | `30` |
| `fontSizeHeading3` | 标题3 | `24` |
| `fontSizeHeading4` | 标题4 | `20` |
| `fontSizeHeading5` | 标题5 | `16` |
| `fontFamily` | 字体族 | `-apple-system, ...` |
| `fontWeightStrong` | 加粗字重 | `600` |

### 间距

| Token | 说明 | 示例值 |
|-------|------|--------|
| `padding` | 基础内边距 | `16` |
| `paddingXS` | 超小内边距 | `8` |
| `paddingSM` | 小内边距 | `12` |
| `paddingLG` | 大内边距 | `24` |
| `paddingXL` | 超大内边距 | `32` |
| `margin` | 基础外边距 | `16` |
| `marginXS` | 超小外边距 | `8` |
| `marginSM` | 小外边距 | `12` |
| `marginLG` | 大外边距 | `24` |
| `marginXL` | 超大外边距 | `32` |

### 圆角

| Token | 说明 | 示例值 |
|-------|------|--------|
| `borderRadius` | 基础圆角 | `6` |
| `borderRadiusSM` | 小圆角 | `4` |
| `borderRadiusLG` | 大圆角 | `8` |
| `borderRadiusXS` | 超小圆角 | `2` |

### 阴影

| Token | 说明 |
|-------|------|
| `boxShadow` | 基础阴影 |
| `boxShadowSecondary` | 次要阴影 |
| `boxShadowTertiary` | 第三阴影 |

## 自定义主题

```typescript
import { ConfigProvider } from 'antd';

<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 8,
      fontSize: 14,
    },
  }}
>
  <App />
</ConfigProvider>
```

## CSS-in-JS

```typescript
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  container: css`
    padding: ${token.padding}px;
    background: ${token.colorBgContainer};
    border-radius: ${token.borderRadius}px;
    color: ${token.colorText};
  `,
}));

// 使用
const { styles } = useStyles();
<div className={styles.container}>内容</div>
```
