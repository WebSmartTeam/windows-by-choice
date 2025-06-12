import React, { useState, useEffect } from 'react';
import { Users, Download, TrendingUp, Star, Phone, Mail } from 'lucide-react';

interface Lead {
  timestamp: string;
  downloadType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType?: string;
  timeframe?: string;
  budget?: string;
  leadScore: number;
  source: string;
}

interface AnalyticsData {
  totalLeads: number;
  totalDownloads: number;
  averageLeadScore: number;
  conversionRate: number;
  popularGuides: { name: string; downloads: number }[];
  leadsByTimeframe: { timeframe: string; count: number }[];
  leadsByBudget: { budget: string; count: number }[];
  recentLeads: Lead[];
}

const LeadAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [timeRange, setTimeRange] = useState('7d');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    loadAnalyticsData();
  }, [timeRange]);

  const loadAnalyticsData = () => {
    // In a real app, this would fetch from your analytics API
    const leads: Lead[] = JSON.parse(localStorage.getItem('wbc_leads') || '[]');
    
    // Filter by time range
    const cutoffDate = new Date();
    switch (timeRange) {
      case '7d': cutoffDate.setDate(cutoffDate.getDate() - 7); break;
      case '30d': cutoffDate.setDate(cutoffDate.getDate() - 30); break;
      case '90d': cutoffDate.setDate(cutoffDate.getDate() - 90); break;
    }
    
    const filteredLeads = leads.filter(lead => 
      new Date(lead.timestamp) >= cutoffDate
    );

    // Calculate analytics
    const totalLeads = filteredLeads.length;
    const totalDownloads = filteredLeads.length; // Each lead is a download
    const averageLeadScore = totalLeads > 0 
      ? filteredLeads.reduce((sum, lead) => sum + lead.leadScore, 0) / totalLeads 
      : 0;

    // Calculate conversion rate (leads with phone numbers are higher quality)
    const qualifiedLeads = filteredLeads.filter(lead => lead.phone).length;
    const conversionRate = totalLeads > 0 ? (qualifiedLeads / totalLeads) * 100 : 0;

    // Popular guides
    const guideDownloads = filteredLeads.reduce((acc, lead) => {
      acc[lead.downloadType] = (acc[lead.downloadType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const popularGuides = Object.entries(guideDownloads)
      .map(([name, downloads]) => ({ name, downloads }))
      .sort((a, b) => b.downloads - a.downloads);

    // Leads by timeframe
    const timeframeData = filteredLeads.reduce((acc, lead) => {
      if (lead.timeframe) {
        acc[lead.timeframe] = (acc[lead.timeframe] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const leadsByTimeframe = Object.entries(timeframeData)
      .map(([timeframe, count]) => ({ timeframe, count }))
      .sort((a, b) => b.count - a.count);

    // Leads by budget
    const budgetData = filteredLeads.reduce((acc, lead) => {
      if (lead.budget) {
        acc[lead.budget] = (acc[lead.budget] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const leadsByBudget = Object.entries(budgetData)
      .map(([budget, count]) => ({ budget, count }))
      .sort((a, b) => b.count - a.count);

    // Recent leads (last 10)
    const recentLeads = filteredLeads
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10);

    setAnalyticsData({
      totalLeads,
      totalDownloads,
      averageLeadScore,
      conversionRate,
      popularGuides,
      leadsByTimeframe,
      leadsByBudget,
      recentLeads
    });
  };

  // Admin access - only show if special key combination is pressed
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  if (!analyticsData) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800 mx-auto"></div>
          <p className="text-center mt-4">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Lead Analytics Dashboard</h2>
              <p className="text-slate-600">PDF download lead generation performance</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <button
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-8 h-8 text-blue-800" />
                <h3 className="font-semibold text-slate-800">Total Leads</h3>
              </div>
              <p className="text-3xl font-bold text-blue-800">{analyticsData.totalLeads}</p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-8 h-8 text-emerald-600" />
                <h3 className="font-semibold text-slate-800">Downloads</h3>
              </div>
              <p className="text-3xl font-bold text-emerald-600">{analyticsData.totalDownloads}</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-8 h-8 text-yellow-600" />
                <h3 className="font-semibold text-slate-800">Avg Lead Score</h3>
              </div>
              <p className="text-3xl font-bold text-yellow-600">{analyticsData.averageLeadScore.toFixed(0)}</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <h3 className="font-semibold text-slate-800">Conversion Rate</h3>
              </div>
              <p className="text-3xl font-bold text-purple-600">{analyticsData.conversionRate.toFixed(1)}%</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Popular Guides */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Most Downloaded Guides</h3>
              <div className="space-y-3">
                {analyticsData.popularGuides.map((guide) => (
                  <div key={guide.name} className="flex items-center justify-between">
                    <span className="text-slate-700">{guide.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-800 h-2 rounded-full"
                          style={{ 
                            width: `${(guide.downloads / Math.max(...analyticsData.popularGuides.map(g => g.downloads))) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-600">{guide.downloads}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Timeframes */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Project Timeframes</h3>
              <div className="space-y-3">
                {analyticsData.leadsByTimeframe.map((item) => (
                  <div key={item.timeframe} className="flex items-center justify-between">
                    <span className="text-slate-700">{item.timeframe}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ 
                            width: `${(item.count / Math.max(...analyticsData.leadsByTimeframe.map(t => t.count))) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-600">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Leads */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Leads</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Contact</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Guide Downloaded</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Project</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Score</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.recentLeads.map((lead) => (
                    <tr key={`${lead.email}-${lead.timestamp}`} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="font-medium text-slate-800">
                          {lead.firstName} {lead.lastName}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Mail className="w-4 h-4" />
                            {lead.email}
                          </div>
                          {lead.phone && (
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Phone className="w-4 h-4" />
                              {lead.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-600">
                        {lead.downloadType}
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm">
                          {lead.projectType && (
                            <div className="text-slate-700">{lead.projectType}</div>
                          )}
                          {lead.timeframe && (
                            <div className="text-slate-500">{lead.timeframe}</div>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          lead.leadScore >= 80 ? 'bg-emerald-100 text-emerald-800' :
                          lead.leadScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {lead.leadScore}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-600">
                        {new Date(lead.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Export Options */}
          <div className="mt-8 flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Press Ctrl+Shift+A to close this dashboard
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const csvData = analyticsData.recentLeads.map(lead => ({
                    Name: `${lead.firstName} ${lead.lastName}`,
                    Email: lead.email,
                    Phone: lead.phone || '',
                    Guide: lead.downloadType,
                    Project: lead.projectType || '',
                    Timeframe: lead.timeframe || '',
                    Budget: lead.budget || '',
                    Score: lead.leadScore,
                    Date: new Date(lead.timestamp).toLocaleDateString()
                  }));
                  
                  const csv = 'data:text/csv;charset=utf-8,' + 
                    Object.keys(csvData[0] || {}).join(',') + '\n' +
                    csvData.map(row => Object.values(row).join(',')).join('\n');
                  
                  const link = document.createElement('a');
                  link.href = encodeURI(csv);
                  link.download = `wbc-leads-${timeRange}.csv`;
                  link.click();
                }}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Export CSV
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Print Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadAnalytics;