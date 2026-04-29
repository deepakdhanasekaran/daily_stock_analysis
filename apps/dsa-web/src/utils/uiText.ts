import type { UiLanguage } from '../contexts/UiLanguageContext';

type UiText = {
  shell: {
    home: { title: string; description: string };
    chat: { title: string; description: string };
    backtest: { title: string; description: string };
    settings: { title: string; description: string };
    defaultTitle: string;
    defaultDescription: string;
    openNav: string;
    expandSidebar: string;
    collapseSidebar: string;
    themeLabel: string;
    themeMenuLabel: string;
    logout: string;
    logoutTitle: string;
    logoutMessage: string;
    logoutConfirm: string;
    logoutCancel: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };
    home: {
      documentTitle: string;
      searchPlaceholder: string;
      retry: string;
      pushNotification: string;
      analyze: string;
    analyzing: string;
    inputErrorTitle: string;
    duplicateErrorTitle: string;
    loadingReport: string;
    reanalyze: string;
    askFollowUp: string;
    fullReport: string;
    startAnalysisTitle: string;
    startAnalysisDescription: string;
    deleteHistoryTitle: string;
    deleteHistorySingle: string;
    deleteHistoryMultiple: (count: number) => string;
    deleteHistoryConfirm: string;
    deleteHistoryCancel: string;
  };
  history: {
    title: string;
    selectedCount: (count: number) => string;
    selectAllCurrent: string;
    delete: string;
    deleting: string;
    loading: string;
    emptyTitle: string;
    emptyDescription: string;
    allLoaded: string;
  };
  tasks: {
    title: string;
    processing: string;
    pending: string;
    processingLabel: string;
    waitingLabel: string;
    pendingStatus: string;
    processingStatus: string;
  };
};

const UI_TEXT: Record<UiLanguage, UiText> = {
  zh: {
    shell: {
      home: { title: '首页', description: '股票分析与历史报告工作台' },
      chat: { title: '问股', description: '多轮策略问答与历史会话管理' },
      backtest: { title: '回测', description: '回测任务与结果浏览' },
      settings: { title: '设置', description: '系统配置、模型与认证管理' },
      defaultTitle: 'Daily Stock Analysis',
      defaultDescription: 'Web 工作台',
      openNav: '打开导航菜单',
      expandSidebar: '展开侧边栏',
      collapseSidebar: '折叠侧边栏',
      themeLabel: '主题',
      themeMenuLabel: '主题模式',
      logout: '退出',
      logoutTitle: '退出登录',
      logoutMessage: '确认退出当前登录状态吗？退出后需要重新输入密码。',
      logoutConfirm: '确认退出',
      logoutCancel: '取消',
    },
    theme: {
      light: '浅色',
      dark: '深色',
      system: '跟随系统',
    },
    home: {
      documentTitle: '每日选股分析 - DSA',
      searchPlaceholder: '输入股票代码或名称，如 600519、贵州茅台、AAPL',
      retry: '重试',
      pushNotification: '推送通知',
      analyze: '分析',
      analyzing: '分析中',
      inputErrorTitle: '输入有误',
      duplicateErrorTitle: '任务已存在',
      loadingReport: '加载报告中...',
      reanalyze: '重新分析',
      askFollowUp: '追问 AI',
      fullReport: '完整分析报告',
      startAnalysisTitle: '开始分析',
      startAnalysisDescription: '输入股票代码进行分析，或从左侧选择历史报告查看。',
      deleteHistoryTitle: '删除历史记录',
      deleteHistorySingle: '确认删除这条历史记录吗？删除后将不可恢复。',
      deleteHistoryMultiple: (count: number) => `确认删除选中的 ${count} 条历史记录吗？删除后将不可恢复。`,
      deleteHistoryConfirm: '确认删除',
      deleteHistoryCancel: '取消',
    },
    history: {
      title: '历史分析',
      selectedCount: (count: number) => `已选 ${count}`,
      selectAllCurrent: '全选当前',
      delete: '删除',
      deleting: '删除中',
      loading: '加载历史记录中...',
      emptyTitle: '暂无历史分析记录',
      emptyDescription: '完成首次分析后，这里会保留最近结果。',
      allLoaded: '已到底部',
    },
    tasks: {
      title: '分析任务',
      processing: '进行中',
      pending: '等待中',
      processingLabel: '进行中',
      waitingLabel: '等待中',
      pendingStatus: '任务等待中',
      processingStatus: '任务进行中',
    },
  },
  en: {
    shell: {
      home: { title: 'Home', description: 'Stock analysis and report workspace' },
      chat: { title: 'Ask Stock', description: 'Multi-turn strategy Q&A and session management' },
      backtest: { title: 'Backtest', description: 'Backtest jobs and results' },
      settings: { title: 'Settings', description: 'System, model, and auth configuration' },
      defaultTitle: 'Daily Stock Analysis',
      defaultDescription: 'Web workspace',
      openNav: 'Open navigation menu',
      expandSidebar: 'Expand sidebar',
      collapseSidebar: 'Collapse sidebar',
      themeLabel: 'Theme',
      themeMenuLabel: 'Theme mode',
      logout: 'Logout',
      logoutTitle: 'Log out',
      logoutMessage: 'Do you want to log out? You will need to enter the password again.',
      logoutConfirm: 'Log out',
      logoutCancel: 'Cancel',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    home: {
      documentTitle: 'Daily Stock Analysis - DSA',
      searchPlaceholder: 'Enter a stock code or name, such as 600519, Kweichow Moutai, AAPL',
      retry: 'Retry',
      pushNotification: 'Push notifications',
      analyze: 'Analyze',
      analyzing: 'Analyzing',
      inputErrorTitle: 'Invalid input',
      duplicateErrorTitle: 'Task already exists',
      loadingReport: 'Loading report...',
      reanalyze: 'Reanalyze',
      askFollowUp: 'Ask AI',
      fullReport: 'Full analysis report',
      startAnalysisTitle: 'Start analysis',
      startAnalysisDescription: 'Enter a stock code to analyze, or select a history report from the left.',
      deleteHistoryTitle: 'Delete history',
      deleteHistorySingle: 'Delete this history record? This cannot be undone.',
      deleteHistoryMultiple: (count: number) => `Delete the selected ${count} history records? This cannot be undone.`,
      deleteHistoryConfirm: 'Delete',
      deleteHistoryCancel: 'Cancel',
    },
    history: {
      title: 'History',
      selectedCount: (count: number) => `${count} selected`,
      selectAllCurrent: 'Select all visible',
      delete: 'Delete',
      deleting: 'Deleting',
      loading: 'Loading history...',
      emptyTitle: 'No history yet',
      emptyDescription: 'Your latest results will appear here after the first analysis.',
      allLoaded: 'End of list',
    },
    tasks: {
      title: 'Analysis jobs',
      processing: 'In progress',
      pending: 'Waiting',
      processingLabel: 'In progress',
      waitingLabel: 'Waiting',
      pendingStatus: 'Task waiting',
      processingStatus: 'Task in progress',
    },
  },
};

export function getUiText(language?: UiLanguage | string | null): UiText {
  return UI_TEXT[language === 'en' ? 'en' : 'zh'];
}
