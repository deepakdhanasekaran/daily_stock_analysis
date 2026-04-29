import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { systemConfigApi } from '../api/systemConfig';
import { useAuth } from './AuthContext';

export type UiLanguage = 'zh' | 'en';

const UiLanguageContext = createContext<UiLanguage>('zh');

function resolveUiLanguage(value?: string | null): UiLanguage {
  return value === 'en' ? 'en' : 'zh';
}

export function UiLanguageProvider({ children }: { children: React.ReactNode }) {
  const { authEnabled, loggedIn, isLoading: authLoading } = useAuth();
  const [language, setLanguage] = useState<UiLanguage>('zh');

  useEffect(() => {
    let cancelled = false;

    const loadLanguage = async () => {
      if (authLoading) {
        return;
      }

      if (authEnabled && !loggedIn) {
        if (!cancelled) {
          setLanguage('zh');
        }
        return;
      }

      try {
        const config = await systemConfigApi.getConfig(false);
        const reportLanguage = config.items.find((item) => item.key === 'REPORT_LANGUAGE')?.value;
        if (!cancelled) {
          setLanguage(resolveUiLanguage(reportLanguage));
        }
      } catch {
        if (!cancelled) {
          setLanguage('zh');
        }
      }
    };

    void loadLanguage();

    return () => {
      cancelled = true;
    };
  }, [authEnabled, authLoading, loggedIn]);

  return <UiLanguageContext.Provider value={language}>{children}</UiLanguageContext.Provider>;
}

export function useUiLanguage(): UiLanguage {
  return useContext(UiLanguageContext);
}
