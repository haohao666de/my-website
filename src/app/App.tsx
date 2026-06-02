import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router';
import { Header } from './components/Header';
import { KPICard } from './components/KPICard';
import { ChartPanel } from './components/ChartPanel';
import { AIAnalysisBar } from './components/AIAnalysisBar';
import { ProfitChangeChart, ProfitBudgetChart, EvaTrendChart, RatiosTable, NewRevenueChart, CostCompareChart } from './components/Charts';
import { LossPieCharts } from './components/LossPieCharts';
import { 
  TrendingUp, 
  Wallet, 
  Activity, 
  Building2, 
  Users, 
  LineChart as LineChartIcon, 
  AlertOctagon,
  Download,
  PenLine,
  Settings2
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-16">
      <Header />
      
      <main className="flex-1 p-6 flex flex-col gap-6 max-w-[1920px] mx-auto w-full">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          <KPICard 
            title="利润总额" 
            onClick={() => toast.info('已进入利润总额详情分析模块')}
            tag="月度考核" 
            tagColor="orange"
            value="135,680" 
            valueColor="blue"
            icon={<TrendingUp className="w-5 h-5" />}
            subs={
              <>
                <div className="flex justify-between"><span>年度预算</span> <span className="text-blue-600 font-medium">150,000</span></div>
                <div className="flex justify-between"><span>执行率</span> <span className="text-emerald-500 font-medium">90.5%</span></div>
                <div className="flex justify-between"><span>上年同期</span> <span className="text-slate-500 font-medium">128,456</span></div>
              </>
            }
            delta="同比 +5.6%"
            deltaType="pos"
          />
          <KPICard 
            title="营业总收入" 
            onClick={() => toast.info('已进入营业总收入明细表')}
            tag="战新收入" 
            tagColor="blue"
            value="892,345" 
            valueColor="green"
            icon={<Wallet className="w-5 h-5" />}
            subs={
              <>
                <div className="flex justify-between"><span>年度预算</span> <span className="text-blue-600 font-medium">950,000</span></div>
                <div className="flex justify-between"><span>执行率</span> <span className="text-emerald-500 font-medium">93.9%</span></div>
                <div className="flex justify-between"><span>上年同期</span> <span className="text-slate-500 font-medium">856,789</span></div>
              </>
            }
            delta="同比 +4.2%"
            deltaType="pos"
          />
          <KPICard 
            title="营业总成本" 
            onClick={() => toast.info('已进入成本核算分析模块')}
            tag="提质增效" 
            tagColor="red"
            value="756,890" 
            valueColor="orange"
            borderLeftColor="warning"
            icon={<Activity className="w-5 h-5" />}
            subs={
              <>
                <div className="flex justify-between"><span>年度预算</span> <span className="text-blue-600 font-medium">780,000</span></div>
                <div className="flex justify-between"><span>执行率</span> <span className="text-amber-500 font-medium">97.0%</span></div>
                <div className="flex justify-between"><span>上年同期</span> <span className="text-slate-500 font-medium">723,456</span></div>
              </>
            }
            delta="同比 +4.6%"
            deltaType="neg"
          />
          <KPICard 
            title="资产总额" 
            onClick={() => toast.info('已进入资产负债表明细')}
            value="12,580,000" 
            valueColor="blue"
            borderLeftColor="info"
            icon={<Building2 className="w-5 h-5" />}
            subs={
              <>
                <div className="flex justify-between"><span>上年同期</span> <span className="text-slate-500 font-medium">11,950,000</span></div>
              </>
            }
            delta="同比 +5.3%"
            deltaType="pos"
          />
          <KPICard 
            title="劳动生产总值" 
            onClick={() => toast.info('已进入劳动生产率分析看板')}
            tag="目标责任" 
            tagColor="blue"
            value="345,678" 
            valueColor="cyan"
            icon={<Users className="w-5 h-5" />}
            subs={
              <>
                <div className="flex justify-between"><span>上年同期</span> <span className="text-slate-500 font-medium">321,098</span></div>
              </>
            }
            delta="同比 +7.7%"
            deltaType="pos"
          />
          <KPICard 
            title="经济增加值" 
            onClick={() => toast.info('已进入EVA指标追踪体系')}
            tag="目标责任" 
            tagColor="blue"
            value="72,345" 
            valueColor="green"
            icon={<LineChartIcon className="w-5 h-5" />}
            subs={
              <>
                <div className="flex justify-between"><span>年度预算</span> <span className="text-blue-600 font-medium">75,000</span></div>
                <div className="flex justify-between"><span>执行率</span> <span className="text-emerald-500 font-medium">96.5%</span></div>
                <div className="flex justify-between"><span>上年同期</span> <span className="text-slate-500 font-medium">68,901</span></div>
              </>
            }
            delta="同比 +5.0%"
            deltaType="pos"
          />
          <KPICard 
            title="亏损企业户数" 
            onClick={() => toast.warning('已打开亏损企业监控预警面板')}
            tag="月度考核" 
            tagColor="orange"
            value="10" 
            unit="个"
            valueColor="red"
            borderLeftColor="danger"
            icon={<AlertOctagon className="w-5 h-5" />}
            subs={
              <>
                <div className="flex justify-between"><span>上年同期</span> <span className="text-slate-500 font-medium">12 个</span></div>
              </>
            }
            delta="同比 -16.7%"
            deltaType="pos"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartPanel 
            title="利润总额月度变动、同比增减"
            actions={
              <div className="flex bg-slate-100 rounded-md p-0.5">
                <button onClick={() => toast('已切换至柱状图模式')} className="cursor-pointer px-3 py-1 text-[10px] font-medium rounded-sm bg-white text-blue-600 shadow-sm">柱状图</button>
                <button onClick={() => toast('已切换至折线图模式')} className="cursor-pointer px-3 py-1 text-[10px] font-medium rounded-sm text-slate-500 hover:text-slate-700">折线图</button>
              </div>
            }
          >
            <ProfitChangeChart />
          </ChartPanel>
          
          <ChartPanel 
            title="利润总额月度预算完成情况"
            actions={
              <button onClick={() => toast.success('已打开补录预算窗口')} className="cursor-pointer flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors border border-blue-100">
                <PenLine className="w-3 h-3" />
                补录预算
              </button>
            }
          >
            <ProfitBudgetChart />
          </ChartPanel>

          <ChartPanel 
            title="战新收入月度变动、同比增减"
            actions={
              <div className="flex bg-slate-100 rounded-md p-0.5">
                <button onClick={() => toast('已切换至柱状图模式')} className="cursor-pointer px-3 py-1 text-[10px] font-medium rounded-sm text-slate-500 hover:text-slate-700">柱状图</button>
                <button onClick={() => toast('已切换至折线图模式')} className="cursor-pointer px-3 py-1 text-[10px] font-medium rounded-sm bg-white text-indigo-600 shadow-sm">折线图</button>
              </div>
            }
          >
            <NewRevenueChart />
          </ChartPanel>

          <ChartPanel 
            title="成本费用与提质增效指标对比"
            actions={
              <button onClick={() => toast.success('已打开指标编辑面板')} className="cursor-pointer flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-md transition-colors border border-rose-100">
                <Settings2 className="w-3 h-3" />
                编辑指标
              </button>
            }
          >
            <CostCompareChart />
          </ChartPanel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ChartPanel title="亏损企业分析">
              <LossPieCharts />
            </ChartPanel>
          </div>
          
          <div className="lg:col-span-1">
            <ChartPanel title="经济增加值趋势">
              <EvaTrendChart />
            </ChartPanel>
          </div>
          
          <div className="lg:col-span-1">
            <ChartPanel 
              title="财务比率完成情况"
              actions={
                <button onClick={() => toast.success('报表数据已开始下载')} className="cursor-pointer flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors border border-blue-100">
                  <Download className="w-3 h-3" />
                  下载
                </button>
              }
            >
              <RatiosTable />
            </ChartPanel>
          </div>
        </div>

      </main>

      <AIAnalysisBar />
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Outlet />,
      children: [{ index: true, element: <Dashboard /> }],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </>
  );
}
