import React from 'react';
import { cn } from '../lib/utils';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface KPICardProps {
  title: string;
  tag?: string;
  tagColor?: 'cyan' | 'blue' | 'orange' | 'red';
  value: string;
  unit?: string;
  valueColor?: 'cyan' | 'green' | 'orange' | 'red' | 'blue';
  subs: React.ReactNode;
  delta?: string;
  deltaType?: 'pos' | 'neg';
  borderLeftColor?: 'cyan' | 'warning' | 'danger' | 'info';
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function KPICard({
  title,
  tag,
  tagColor = 'cyan',
  value,
  unit,
  valueColor = 'cyan',
  subs,
  delta,
  deltaType,
  borderLeftColor = 'cyan',
  icon,
  onClick
}: KPICardProps) {
  const borderColors = {
    cyan: 'border-l-cyan-500',
    warning: 'border-l-amber-500',
    danger: 'border-l-rose-500',
    info: 'border-l-blue-500',
  };

  const tagColors = {
    cyan: 'text-cyan-600 bg-cyan-50',
    blue: 'text-blue-600 bg-blue-50',
    orange: 'text-amber-600 bg-amber-50',
    red: 'text-rose-600 bg-rose-50',
  };

  const valColors = {
    cyan: 'text-cyan-600',
    green: 'text-emerald-500',
    orange: 'text-amber-500',
    red: 'text-rose-500',
    blue: 'text-blue-500',
  };

  return (
    <div 
      onClick={onClick}
      className={cn(
      "relative bg-white rounded-xl p-4 shadow-sm border border-slate-100/50 flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden",
      "border-l-4",
      onClick && "cursor-pointer active:scale-[0.98]",
      borderColors[borderLeftColor]
    )}>
      {/* Background gradient decoration */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-slate-50 to-transparent rounded-full opacity-50 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{title}</span>
          {tag && (
            <span className={cn("text-[10px] px-1.5 py-0.5 rounded-sm font-medium", tagColors[tagColor])}>
              {tag}
            </span>
          )}
        </div>
        {icon && (
          <div className="text-slate-300">
            {icon}
          </div>
        )}
      </div>

      <div className="mb-3 relative z-10">
        <div className="flex items-baseline gap-1">
          <span className={cn("text-3xl font-bold tracking-tight", valColors[valueColor])}>
            {value}
          </span>
          {unit && <span className="text-sm text-slate-500 font-medium">{unit}</span>}
        </div>
      </div>

      <div className="mt-auto space-y-1 text-[11px] text-slate-500 relative z-10">
        {subs}
      </div>

      {delta && (
        <div className={cn(
          "mt-3 text-xs font-medium flex items-center gap-1 relative z-10",
          deltaType === 'pos' ? 'text-emerald-500' : 'text-rose-500'
        )}>
          {delta.includes('+') ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
          {delta}
        </div>
      )}
    </div>
  );
}
