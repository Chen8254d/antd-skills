/**
 * Ant Design Skills 插件接口定义
 * 
 * 允许团队和开发者扩展 Skills 功能
 */

// ============================================
// 插件基础接口
// ============================================

/**
 * 插件元数据
 */
export interface PluginMeta {
  /** 插件唯一标识 */
  name: string;
  /** 显示名称 */
  displayName: string;
  /** 版本号 */
  version: string;
  /** 描述 */
  description?: string;
  /** 作者 */
  author?: string;
  /** 仓库地址 */
  repository?: string;
  /** 关键词 */
  keywords?: string[];
  /** 最低 Skills 版本要求 */
  minSkillsVersion?: string;
}

/**
 * 插件主接口
 */
export interface AntdSkillsPlugin {
  /** 插件元数据 */
  meta: PluginMeta;
  
  /** 扩展组件定义 */
  components?: ComponentExtension[];
  
  /** 扩展页面模式 */
  patterns?: PatternExtension[];
  
  /** 自定义命令 */
  commands?: CommandExtension[];
  
  /** 校验规则扩展 */
  validators?: ValidatorExtension[];
  
  /** 代码片段扩展 */
  snippets?: SnippetExtension[];
  
  /** 初始化钩子 */
  onActivate?: () => Promise<void>;
  
  /** 卸载钩子 */
  onDeactivate?: () => Promise<void>;
}

// ============================================
// 组件扩展
// ============================================

/**
 * 组件扩展定义
 */
export interface ComponentExtension {
  /** 组件名称 */
  name: string;
  /** 描述 */
  description: string;
  /** 所属分类 */
  category: string;
  /** 导入路径 */
  importPath: string;
  /** 推荐属性 */
  recommendedProps?: PropDefinition[];
  /** 必需属性 */
  requiredProps?: PropDefinition[];
  /** 最佳实践 */
  bestPractices?: string[];
  /** 代码示例 */
  examples?: CodeExample[];
}

/**
 * 属性定义
 */
export interface PropDefinition {
  /** 属性名 */
  name: string;
  /** 类型 */
  type: string;
  /** 描述 */
  description: string;
  /** 默认值 */
  defaultValue?: any;
  /** 是否必需 */
  required?: boolean;
  /** 可选值 */
  options?: string[];
}

/**
 * 代码示例
 */
export interface CodeExample {
  /** 示例名称 */
  name: string;
  /** 描述 */
  description?: string;
  /** 代码 */
  code: string;
  /** 语言 */
  language?: 'typescript' | 'javascript';
}

// ============================================
// 页面模式扩展
// ============================================

/**
 * 页面模式扩展定义
 */
export interface PatternExtension {
  /** 模式标识 */
  id: string;
  /** 模式名称 */
  name: string;
  /** 描述 */
  description: string;
  /** 使用场景 */
  useCases: string[];
  /** 特性列表 */
  features: string[];
  /** 代码模板 */
  template: string;
  /** 相关组件 */
  relatedComponents: string[];
  /** 搜索关键词 */
  keywords: string[];
}

// ============================================
// 命令扩展
// ============================================

/**
 * 命令扩展定义
 */
export interface CommandExtension {
  /** 命令名称 */
  name: string;
  /** 命令前缀 */
  prefix: string;
  /** 描述 */
  description: string;
  /** 参数定义 */
  args?: CommandArg[];
  /** 子命令 */
  subcommands?: CommandExtension[];
  /** 执行处理器 */
  handler: CommandHandler;
}

/**
 * 命令参数
 */
export interface CommandArg {
  /** 参数名 */
  name: string;
  /** 描述 */
  description: string;
  /** 是否必需 */
  required?: boolean;
  /** 类型 */
  type: 'string' | 'number' | 'boolean' | 'enum';
  /** 枚举值（当 type 为 enum 时） */
  enumValues?: string[];
  /** 默认值 */
  defaultValue?: any;
}

/**
 * 命令上下文
 */
export interface CommandContext {
  /** 当前文件路径 */
  filePath?: string;
  /** 当前文件内容 */
  fileContent?: string;
  /** 选中的代码 */
  selection?: string;
  /** 光标位置 */
  cursorPosition?: { line: number; column: number };
  /** 项目配置 */
  config: SkillsConfig;
}

/**
 * 命令执行结果
 */
export interface CommandResult {
  /** 是否成功 */
  success: boolean;
  /** 消息 */
  message?: string;
  /** 生成的代码 */
  code?: string;
  /** 建议操作 */
  suggestions?: string[];
  /** 错误信息 */
  error?: string;
}

/**
 * 命令处理器类型
 */
export type CommandHandler = (
  args: Record<string, any>,
  context: CommandContext
) => Promise<CommandResult>;

// ============================================
// 校验规则扩展
// ============================================

/**
 * 校验规则扩展定义
 */
export interface ValidatorExtension {
  /** 规则 ID */
  id: string;
  /** 规则名称 */
  name: string;
  /** 描述 */
  description: string;
  /** 严重级别 */
  level: 'error' | 'warning' | 'info';
  /** 规则类型 */
  type: 'syntax' | 'standard' | 'performance' | 'experience' | 'accessibility';
  /** 校验函数 */
  validate: ValidatorFunction;
  /** 自动修复函数 */
  fix?: FixFunction;
}

/**
 * 校验结果
 */
export interface ValidationResult {
  /** 是否通过 */
  passed: boolean;
  /** 问题列表 */
  issues: ValidationIssue[];
}

/**
 * 校验问题
 */
export interface ValidationIssue {
  /** 规则 ID */
  ruleId: string;
  /** 级别 */
  level: 'error' | 'warning' | 'info';
  /** 消息 */
  message: string;
  /** 位置 */
  location?: {
    line: number;
    column: number;
    endLine?: number;
    endColumn?: number;
  };
  /** 修复建议 */
  suggestion?: string;
  /** 修复命令 */
  fixCommand?: string;
}

/**
 * 校验函数类型
 */
export type ValidatorFunction = (
  code: string,
  context: CommandContext
) => Promise<ValidationResult>;

/**
 * 修复函数类型
 */
export type FixFunction = (
  code: string,
  issue: ValidationIssue,
  context: CommandContext
) => Promise<string>;

// ============================================
// 代码片段扩展
// ============================================

/**
 * 代码片段扩展定义
 */
export interface SnippetExtension {
  /** 片段名称 */
  name: string;
  /** 触发前缀 */
  prefix: string;
  /** 描述 */
  description: string;
  /** 代码模板 */
  body: string | string[];
  /** 作用域 */
  scope?: string[];
}

// ============================================
// 配置接口
// ============================================

/**
 * Skills 配置
 */
export interface SkillsConfig {
  /** Ant Design 版本 */
  antdVersion: '4.x' | '5.x';
  /** 代码语言 */
  language: 'typescript' | 'javascript';
  /** 样式方案 */
  styleType: 'css-in-js' | 'less' | 'css-modules' | 'tailwind';
  /** 是否使用 ProComponents */
  useProComponents: boolean;
  /** 自动检查 */
  autoCheck: boolean;
  /** 自动修复 */
  autoFix: boolean;
  /** 自定义规则 */
  customRules?: Record<string, any>;
  /** 禁用的规则 */
  disabledRules?: string[];
}

// ============================================
// 插件管理器接口
// ============================================

/**
 * 插件管理器
 */
export interface PluginManager {
  /** 注册插件 */
  register(plugin: AntdSkillsPlugin): Promise<void>;
  
  /** 卸载插件 */
  unregister(pluginName: string): Promise<void>;
  
  /** 获取已注册的插件 */
  getPlugins(): AntdSkillsPlugin[];
  
  /** 获取指定插件 */
  getPlugin(name: string): AntdSkillsPlugin | undefined;
  
  /** 检查插件是否已注册 */
  hasPlugin(name: string): boolean;
  
  /** 获取所有扩展组件 */
  getAllComponents(): ComponentExtension[];
  
  /** 获取所有扩展模式 */
  getAllPatterns(): PatternExtension[];
  
  /** 获取所有扩展命令 */
  getAllCommands(): CommandExtension[];
  
  /** 获取所有校验规则 */
  getAllValidators(): ValidatorExtension[];
}

// ============================================
// 插件示例
// ============================================

/**
 * 示例插件
 */
export const examplePlugin: AntdSkillsPlugin = {
  meta: {
    name: 'my-custom-plugin',
    displayName: '我的自定义插件',
    version: '1.0.0',
    description: '这是一个示例插件',
    author: 'Your Name',
  },
  
  components: [
    {
      name: 'MyCustomButton',
      description: '自定义按钮组件',
      category: 'general',
      importPath: '@my-company/components',
      recommendedProps: [
        {
          name: 'variant',
          type: 'string',
          description: '按钮变体',
          options: ['primary', 'secondary', 'ghost'],
        },
      ],
      examples: [
        {
          name: 'basic',
          code: '<MyCustomButton variant="primary">点击我</MyCustomButton>',
        },
      ],
    },
  ],
  
  validators: [
    {
      id: 'my-custom-rule',
      name: '自定义规则',
      description: '这是一个自定义校验规则',
      level: 'warning',
      type: 'standard',
      validate: async (code, context) => {
        const issues: ValidationIssue[] = [];
        
        // 示例：检查是否使用了自定义组件
        if (code.includes('OldButton')) {
          issues.push({
            ruleId: 'my-custom-rule',
            level: 'warning',
            message: '请使用 MyCustomButton 替代 OldButton',
            suggestion: '将 OldButton 替换为 MyCustomButton',
          });
        }
        
        return {
          passed: issues.length === 0,
          issues,
        };
      },
    },
  ],
  
  onActivate: async () => {
    console.log('插件已激活');
  },
  
  onDeactivate: async () => {
    console.log('插件已卸载');
  },
};
