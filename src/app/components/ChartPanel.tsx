import React, { useState } from 'react';
import { Maximize2, Minimize2, MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';

interface ChartPanelProps {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export function ChartPanel({ title, actions, children }: ChartPanelProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      toast.success(`已全屏查看：${title}`);
    } else {
      toast.info(`已退出全屏：${title}`);
    }
  };

  const containerClasses = isFullscreen
    ? "fixed inset-4 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 p-6 flex flex-col"
    : "bg-white rounded-xl shadow-sm border border-slate-100/50 p-4 flex flex-col h-full hover:shadow-md transition-shadow";

  return (
    <>
      {isFullscreen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm" onClick={toggleFullscreen}></div>
      )}
      <div className={containerClasses}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`${isFullscreen ? 'text-lg' : 'text-sm'} font-semibold text-slate-800 tracking-wide flex items-center gap-2`}>
            <div className="w-1.5 h-4 bg-blue-600 rounded-full"></div>
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {actions}
            <button 
              onClick={toggleFullscreen}
              className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
              title={isFullscreen ? "退出全屏" : "全屏查看"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button 
              onClick={() => toast('正在加载更多操作选项...')}
              className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
            >
              <MoreHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div className={`flex-1 ${isFullscreen ? 'min-h-[400px]' : 'min-h-[200px]'}`}>
          {children}
        </div>
      </div>
    </>
  );
}
