import React from 'react';
import ReactECharts from 'echarts-for-react';
import { toast } from 'sonner';

const profitData = [
  { name: '1月', actual: 12000, budget: 13000 },
  { name: '2月', actual: 13500, budget: 14000 },
  { name: '3月', actual: 18000, budget: 15000 },
  { name: '4月', actual: 16000, budget: 15500 },
  { name: '5月', actual: 19000, budget: 18000 },
  { name: '6月', actual: 21000, budget: 20000 },
];

const revenueData = [
  { name: '1月', value: 85000 },
  { name: '2月', value: 88000 },
  { name: '3月', value: 92000 },
  { name: '4月', value: 90000 },
  { name: '5月', value: 95000 },
  { name: '6月', value: 98000 },
];

const costData = [
  { name: '财务费用', cost: 125000, target: 120000 },
  { name: '其他费用', cost: 45000, target: 40000 },
  { name: '管理费用', cost: 85000, target: 80000 },
  { name: '生产费用', cost: 420000, target: 400000 },
  { name: '安全生产', cost: 80000, target: 75000 },
];

// Common ECharts options to maintain uniform look
const commonOptions = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e2e8f0',
    borderWidth: 1,
    padding: [10, 14],
    textStyle: { color: '#1e293b', fontSize: 13, fontFamily: 'Inter, system-ui, sans-serif' },
    extraCssText: 'box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); border-radius: 8px;'
  },
  grid: { top: 40, right: 10, bottom: 20, left: 40, containLabel: true },
  xAxis: {
    type: 'category',
    axisLine: { lineStyle: { color: '#e2e8f0' } },
    axisTick: { show: false },
    axisLabel: { color: '#64748b', fontSize: 12, margin: 12 }
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { type: 'dashed', color: '#f1f5f9' } },
    axisLabel: { color: '#64748b', fontSize: 12 }
  },
  legend: {
    bottom: 0,
    itemWidth: 12,
    itemHeight: 12,
    textStyle: { color: '#475569', fontSize: 12 },
    icon: 'roundRect'
  }
};

export function ProfitChangeChart() {
  const onChartClick = (params: any) => {
    toast.info(`利润总额明细：${params.name} - ${params.seriesName} (${params.value}万元)`);
  };
  const option = {
    ...commonOptions,
    legend: { ...commonOptions.legend, top: 0, bottom: 'auto', right: 0 },
    xAxis: { ...commonOptions.xAxis, data: profitData.map(d => d.name) },
    series: [
      {
        name: '本年利润',
        type: 'bar',
        data: profitData.map(d => d.actual),
        itemStyle: { color: '#0ea5e9', borderRadius: [4, 4, 0, 0] },
        barWidth: '30%',
      },
      {
        name: '上年同期',
        type: 'bar',
        data: profitData.map(d => d.budget),
        itemStyle: { color: '#cbd5e1', borderRadius: [4, 4, 0, 0] },
        barWidth: '30%',
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} opts={{ renderer: 'svg' }} onEvents={{ click: onChartClick }} />;
}

export function ProfitBudgetChart() {
  const onChartClick = (params: any) => {
    toast.info(`利润预算明细：${params.name} - ${params.seriesName} (${params.value}万元)`);
  };
  const option = {
    ...commonOptions,
    legend: { ...commonOptions.legend, top: 0, bottom: 'auto', right: 0 },
    xAxis: { ...commonOptions.xAxis, data: profitData.map(d => d.name) },
    series: [
      {
        name: '实际完成',
        type: 'bar',
        data: profitData.map(d => d.actual),
        itemStyle: { color: '#10b981', borderRadius: [4, 4, 0, 0] },
        barWidth: '40%',
      },
      {
        name: '预算目标',
        type: 'line',
        data: profitData.map(d => d.budget),
        itemStyle: { color: '#f59e0b' },
        lineStyle: { width: 3, color: '#f59e0b' },
        symbol: 'circle',
        symbolSize: 8,
        z: 10
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} opts={{ renderer: 'svg' }} onEvents={{ click: onChartClick }} />;
}

export function NewRevenueChart() {
  const onChartClick = (params: any) => {
    toast.info(`战新收入明细：${params.name} - ${params.value}万元`);
  };
  const option = {
    ...commonOptions,
    legend: { ...commonOptions.legend, top: 0, bottom: 'auto', right: 0 },
    xAxis: { ...commonOptions.xAxis, data: revenueData.map(d => d.name) },
    series: [
      {
        name: '战新收入',
        type: 'line',
        data: revenueData.map(d => d.value),
        itemStyle: { color: '#6366f1' },
        lineStyle: { width: 3, color: '#6366f1' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(99, 102, 241, 0.2)' },
              { offset: 1, color: 'rgba(99, 102, 241, 0)' }
            ]
          }
        },
        symbol: 'circle',
        symbolSize: 8,
        smooth: true
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} opts={{ renderer: 'svg' }} onEvents={{ click: onChartClick }} />;
}

export function CostCompareChart() {
  const onChartClick = (params: any) => {
    toast.info(`成本费用明细：${params.name} - ${params.seriesName} (${params.value}万元)`);
  };
  const option = {
    ...commonOptions,
    legend: { ...commonOptions.legend, top: 0, bottom: 'auto', right: 0 },
    xAxis: { ...commonOptions.xAxis, data: costData.map(d => d.name) },
    series: [
      {
        name: '实际费用',
        type: 'bar',
        data: costData.map(d => d.cost),
        itemStyle: { color: '#f43f5e', borderRadius: [4, 4, 0, 0] },
        barWidth: '35%',
      },
      {
        name: '提质增效目标',
        type: 'bar',
        data: costData.map(d => d.target),
        itemStyle: { color: '#e2e8f0', borderRadius: [4, 4, 0, 0] },
        barWidth: '35%',
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} opts={{ renderer: 'svg' }} onEvents={{ click: onChartClick }} />;
}

export function EvaTrendChart() {
  const onChartClick = (params: any) => {
    toast.info(`经济增加值明细：${params.name} - ${params.value}万元`);
  };
  const option = {
    ...commonOptions,
    legend: { ...commonOptions.legend, top: 0, bottom: 'auto', right: 0 },
    xAxis: { ...commonOptions.xAxis, data: profitData.map(d => d.name), boundaryGap: false },
    series: [
      {
        name: '经济增加值',
        type: 'line',
        data: profitData.map(d => d.actual),
        itemStyle: { color: '#3b82f6' },
        lineStyle: { width: 3, color: '#3b82f6' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59, 130, 246, 0.4)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0)' }
            ]
          }
        },
        symbol: 'circle',
        symbolSize: 8,
        smooth: true
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} opts={{ renderer: 'svg' }} onEvents={{ click: onChartClick }} />;
}

export function RatiosTable() {
  const ratios = [
    { name: '营业收入利润率', actual: '8.65', target: '10', rate: '86.5%', status: '进行中', statusColor: 'bg-amber-50 text-amber-600 border-amber-200' },
    { name: '单位容量完全成本', actual: '2,856', target: '2,700', rate: '105.8%', status: '超支', statusColor: 'bg-rose-50 text-rose-600 border-rose-200' },
    { name: '资金成本率', actual: '4.25', target: '4.5', rate: '94.4%', status: '达标', statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { name: '净资产收益率', actual: '6.82', target: '7.5', rate: '90.9%', status: '进行中', statusColor: 'bg-amber-50 text-amber-600 border-amber-200' },
    { name: '营业收现率', actual: '102.3', target: '100', rate: '102.3%', status: '超额', statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { name: '营业利润率', actual: '7.45', target: '8.5', rate: '87.6%', status: '进行中', statusColor: 'bg-amber-50 text-amber-600 border-amber-200' },
  ];

  return (
    <div className="overflow-x-auto w-full h-full custom-scrollbar">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead>
          <tr className="border-b-2 border-slate-100 text-slate-500 font-medium">
            <th className="pb-3 pl-3 pt-2">指标名称</th>
            <th className="pb-3 pt-2">本年完成值</th>
            <th className="pb-3 pt-2">年度目标</th>
            <th className="pb-3 pt-2">完成率</th>
            <th className="pb-3 pt-2">状态</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {ratios.map((r, i) => (
            <tr key={i} onClick={() => toast(`查看指标明细：${r.name} (完成率: ${r.rate})`)} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
              <td className="py-3.5 pl-3 font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{r.name}</td>
              <td className="py-3.5 font-semibold text-slate-800">{r.actual}</td>
              <td className="py-3.5 text-slate-500">{r.target}</td>
              <td className="py-3.5 font-medium text-slate-600">{r.rate}</td>
              <td className="py-3.5">
                <span className={`text-[11px] px-2.5 py-1 rounded-md border font-medium ${r.statusColor}`}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
