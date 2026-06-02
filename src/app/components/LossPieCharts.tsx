import React from 'react';
import ReactECharts from 'echarts-for-react';
import { toast } from 'sonner';

// Using more professional, deeper "enterprise" color variants while keeping semantic categorization
const countData = [
  { name: '火电亏损', value: 4, color: '#ea580c' }, // Thermal - Orange 600
  { name: '风电亏损', value: 3, color: '#0284c7' }, // Wind - Sky 600
  { name: '光伏亏损', value: 2, color: '#059669' }, // Solar - Emerald 600
  { name: '其他亏损', value: 1, color: '#64748b' }, // Other - Slate 500
];

const amountData = [
  { name: '火电金额', value: 5400, color: '#ea580c' },
  { name: '风电金额', value: 2100, color: '#0284c7' },
  { name: '光伏金额', value: 1200, color: '#059669' },
  { name: '其他金额', value: 300, color: '#64748b' },
];

const getChartOption = (data: any[], valueLabel: string) => {
  return {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e2e8f0',
      borderWidth: 1,
      padding: [10, 14],
      textStyle: {
        color: '#1e293b',
        fontSize: 13,
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      extraCssText: 'box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); border-radius: 8px;',
      formatter: (params: any) => {
        const unit = valueLabel === '金额' ? '万元' : '户';
        return `
          <div style="font-weight: 600; color: #0f172a; margin-bottom: 6px;">${params.name}</div>
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${params.color};"></div>
              <span style="color: #475569;">数值</span>
            </div>
            <div style="font-weight: 500; color: #1e293b;">
              ${params.value.toLocaleString()} <span style="color: #64748b; font-size: 12px; font-weight: 400;">${unit}</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 4px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: transparent;"></div>
              <span style="color: #475569;">占比</span>
            </div>
            <div style="font-weight: 500; color: #1e293b;">
              ${params.percent}%
            </div>
          </div>
        `;
      }
    },
    legend: {
      bottom: '5',
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      textStyle: {
        color: '#475569',
        fontSize: 12,
        fontWeight: 500,
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      itemGap: 16
    },
    series: [
      {
        name: '分析占比',
        type: 'pie',
        radius: ['20%', '65%'],
        center: ['50%', '42%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 6,
          borderColor: '#ffffff',
          borderWidth: 2
        },
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.15)'
          }
        },
        data: data.map(item => ({
          value: item.value,
          name: item.name,
          itemStyle: { color: item.color }
        }))
      }
    ]
  };
};

export function LossPieCharts() {
  const onChartClick = (params: any) => {
    toast(`已选中: ${params.name}，数值: ${params.value}`);
  };

  return (
    <div className="grid grid-cols-2 gap-6 h-full p-2">
      <div className="flex flex-col h-full bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-semibold text-slate-800">亏损户数结构</h4>
          <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">10 户</span>
        </div>
        <div className="w-full flex-1 min-h-[220px]">
          <ReactECharts 
            option={getChartOption(countData, '户数')} 
            style={{ height: '100%', width: '100%' }}
            opts={{ renderer: 'svg' }}
            onEvents={{ click: onChartClick }}
          />
        </div>
      </div>
      
      <div className="flex flex-col h-full bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-semibold text-slate-800">亏损金额结构</h4>
          <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">9,000 万元</span>
        </div>
        <div className="w-full flex-1 min-h-[220px]">
          <ReactECharts 
            option={getChartOption(amountData, '金额')} 
            style={{ height: '100%', width: '100%' }}
            opts={{ renderer: 'svg' }}
            onEvents={{ click: onChartClick }}
          />
        </div>
      </div>
    </div>
  );
}
