import React from 'react';
import { Sparkles } from 'lucide-react';

export function AIAnalysisBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-900 to-cyan-800 px-6 py-3 flex items-center gap-4 shadow-[0_-4px_20px_rgba(0,121,107,0.3)]">
      <div className="flex items-center gap-2 text-white font-semibold text-sm whitespace-nowrap">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        AI 智能分析
      </div>
      <div className="w-px h-5 bg-white/20"></div>
      <div className="flex-1 overflow-hidden">
        <div className="animate-[marquee_30s_linear_infinite] whitespace-nowrap text-sm text-white/90">
          <span className="inline-flex items-center gap-2 mx-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            利润总额完成率90.5%，较预算目标仍有提升空间
          </span>
          <span className="inline-flex items-center gap-2 mx-8 text-rose-200">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
            营业总成本超预算3%，建议重点关注财务费用与管理费用控制
          </span>
          <span className="inline-flex items-center gap-2 mx-8 text-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            经济增加值完成率96.5%，超额完成月度目标
          </span>
          <span className="inline-flex items-center gap-2 mx-8 text-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            劳动生产总值同比增长7.7%，表现优异
          </span>
          <span className="inline-flex items-center gap-2 mx-8 text-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            亏损企业户数同比减少2家，扭亏工作成效显著
          </span>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
