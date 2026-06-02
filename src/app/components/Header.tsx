import React, { useState, useEffect } from 'react';
import { Settings, User, Bell, Search, Hexagon } from 'lucide-react';
import { toast } from 'sonner';

export function Header() {
  const [time, setTime] = useState<Date>(new Date());
  const [unit, setUnit] = useState<'yuan' | 'wan' | 'yi'>('wan');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gradient-to-r from-teal-800 to-cyan-600 px-6 py-4 flex items-center justify-between shadow-lg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute top-12 right-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"></div>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <div className="w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center shadow-inner">
          <Hexagon className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="text-white/80 text-xs font-medium tracking-wider mb-0.5">龙源电力集团股份有限公司</div>
          <h1 className="text-white text-xl font-bold tracking-tight drop-shadow-md">
            关键指标智汇平台<span className="font-normal opacity-90 text-lg">（发电类）</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-6 relative z-10">
        <div className="flex flex-col items-end mr-4">
          <div className="text-white text-2xl font-light tracking-widest drop-shadow-sm font-mono">
            {time.toLocaleTimeString('zh-CN', { hour12: false })}
          </div>
          <div className="text-white/70 text-xs font-medium">
            {time.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })}
          </div>
        </div>

        <div className="flex gap-2">
          <select 
            onChange={(e) => toast(`年份已切换至：${e.target.value}年`)}
            className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-lg outline-none cursor-pointer hover:bg-white/20 transition-colors appearance-none pr-8 relative backdrop-blur-sm"
          >
            <option value="2026" className="text-slate-800">2026年</option>
            <option value="2025" className="text-slate-800">2025年</option>
          </select>
          <select 
            onChange={(e) => toast(`月份已切换至：${e.target.value}月`)}
            className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-lg outline-none cursor-pointer hover:bg-white/20 transition-colors appearance-none pr-8 backdrop-blur-sm"
          >
            <option value="6" className="text-slate-800">06月</option>
            <option value="5" className="text-slate-800">05月</option>
          </select>
          <select 
            onChange={(e) => toast(`业务区域已切换至：${e.target.options[e.target.selectedIndex].text}`)}
            className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-lg outline-none cursor-pointer hover:bg-white/20 transition-colors appearance-none pr-8 backdrop-blur-sm"
          >
            <option value="all" className="text-slate-800">全部区域</option>
            <option value="north" className="text-slate-800">华北区域</option>
          </select>
        </div>

        <div className="flex bg-white/10 p-1 rounded-lg backdrop-blur-sm border border-white/10">
          <button 
            onClick={() => { setUnit('yuan'); toast.success('数据单位已切换为：元'); }}
            className={`cursor-pointer px-3 py-1 text-xs rounded-md transition-all ${unit === 'yuan' ? 'bg-white text-teal-800 font-bold shadow-sm' : 'text-white hover:text-white/90'}`}
          >
            元
          </button>
          <button 
            onClick={() => { setUnit('wan'); toast.success('数据单位已切换为：万元'); }}
            className={`cursor-pointer px-3 py-1 text-xs rounded-md transition-all ${unit === 'wan' ? 'bg-white text-teal-800 font-bold shadow-sm' : 'text-white hover:text-white/90'}`}
          >
            万元
          </button>
          <button 
            onClick={() => { setUnit('yi'); toast.success('数据单位已切换为：亿元'); }}
            className={`cursor-pointer px-3 py-1 text-xs rounded-md transition-all ${unit === 'yi' ? 'bg-white text-teal-800 font-bold shadow-sm' : 'text-white hover:text-white/90'}`}
          >
            亿元
          </button>
        </div>

        <div className="flex items-center gap-3 border-l border-white/20 pl-6">
          <button onClick={() => toast('正在打开全局搜索...')} className="cursor-pointer w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button onClick={() => toast.warning('你有 3 条新的系统预警消息')} className="cursor-pointer w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-teal-800"></span>
          </button>
          <button onClick={() => toast('正在打开个人中心...')} className="cursor-pointer w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
