import React, { useState, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'];

// Authentication credentials
const AUTH_CREDENTIALS = {
  username: 'barneybed',
  password: 'BB@Survey2025!Secure'
};

// Login Component
const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
      onLogin(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Barney Bed Analytics</h1>
          <p className="text-gray-500 mt-2">Sign in to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-12"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">Protected dashboard • Authorized access only</p>
        </div>
      </div>
    </div>
  );
};

// Store data - BBUS (US) data included, BBAU placeholder ready for import
const storeData = {
  BBUS: {
    name: 'BBUS - United States',
    country: 'United States',
    dateRange: 'Dec 2024 - Jan 2026',
    totalResponses: 1519,
    avgOrderValue: 355,
    newCustomerPct: 68,
    topChannel: 'Instagram',
    topChannelPct: '35%',
    acquisition: [
      { name: 'Instagram', value: 473, pct: '35.4%' },
      { name: 'Google', value: 308, pct: '23.1%' },
      { name: 'Word of mouth', value: 135, pct: '10.1%' },
      { name: 'Facebook', value: 104, pct: '7.8%' },
      { name: 'Other', value: 100, pct: '7.5%' },
      { name: 'TikTok', value: 51, pct: '3.8%' },
      { name: 'Pinterest', value: 28, pct: '2.1%' },
      { name: 'Influencer', value: 21, pct: '1.6%' },
      { name: 'Press/Article', value: 20, pct: '1.5%' },
      { name: 'YouTube', value: 17, pct: '1.3%' },
    ],
    motivations: [
      { name: 'Quality of Products', value: 741 },
      { name: 'Orthopaedic Support', value: 698 },
      { name: 'Ratings & Reputation', value: 527 },
      { name: 'Research', value: 334 },
      { name: 'Range of Covers', value: 318 },
      { name: 'Free Shipping', value: 226 },
      { name: 'Website & Photos', value: 194 },
      { name: 'Supporting US Business', value: 184 },
      { name: 'Original Designers', value: 117 },
      { name: 'Fast Shipping', value: 106 },
    ],
    siteTriggers: [
      { name: 'Searching', value: 365, pct: '25.5%' },
      { name: 'Saw an ad', value: 364, pct: '25.4%' },
      { name: 'Remembered brand', value: 232, pct: '16.2%' },
      { name: 'Other', value: 190, pct: '13.3%' },
      { name: 'Word of mouth', value: 168, pct: '11.7%' },
      { name: 'Email', value: 98, pct: '6.8%' },
      { name: 'Text message', value: 18, pct: '1.3%' },
    ],
    timeToPurchase: [
      { name: '< 1 day', value: 220, fill: '#10B981' },
      { name: '< 1 week', value: 200, fill: '#3B82F6' },
      { name: '< 1 month', value: 170, fill: '#8B5CF6' },
      { name: '1-3 months', value: 224, fill: '#F59E0B' },
      { name: '3-12 months', value: 196, fill: '#EC4899' },
      { name: '> 12 months', value: 186, fill: '#EF4444' },
    ],
    states: [
      { name: 'California', value: 297 },
      { name: 'Texas', value: 149 },
      { name: 'Florida', value: 112 },
      { name: 'New York', value: 85 },
      { name: 'Massachusetts', value: 55 },
      { name: 'Illinois', value: 53 },
      { name: 'Colorado', value: 52 },
      { name: 'Washington', value: 47 },
      { name: 'North Carolina', value: 42 },
      { name: 'Arizona', value: 41 },
    ],
    orderValues: [
      { range: '$0-100', count: 81 },
      { range: '$100-200', count: 222 },
      { range: '$200-300', count: 466 },
      { range: '$300-400', count: 304 },
      { range: '$400-500', count: 201 },
      { range: '$500-750', count: 164 },
      { range: '$750-1K', count: 40 },
      { range: '$1000+', count: 41 },
    ],
    customerTypes: [
      { name: 'New Customers', value: 1039, aov: '$364' },
      { name: 'Repeat Customers', value: 480, aov: '$337' },
    ],
    monthly: [
      { month: 'Dec 24', responses: 230 },
      { month: 'Jan 25', responses: 126 },
      { month: 'Feb 25', responses: 84 },
      { month: 'Mar 25', responses: 204 },
      { month: 'Apr 25', responses: 101 },
      { month: 'May 25', responses: 75 },
      { month: 'Jun 25', responses: 123 },
      { month: 'Jul 25', responses: 48 },
      { month: 'Aug 25', responses: 130 },
      { month: 'Sep 25', responses: 91 },
      { month: 'Oct 25', responses: 114 },
      { month: 'Nov 25', responses: 132 },
      { month: 'Dec 25', responses: 46 },
      { month: 'Jan 26', responses: 15 },
    ],
    trafficSources: [
      { name: 'Google', value: 441 },
      { name: 'Direct', value: 300 },
      { name: 'Unknown', value: 133 },
      { name: 'Instagram', value: 74 },
      { name: 'Facebook', value: 29 },
      { name: 'Bing', value: 13 },
      { name: 'Other', value: 28 },
    ],
  },
  BBAU: {
    name: 'BBAU - Australia',
    country: 'Australia',
    dateRange: 'Dec 2024 - Jan 2026',
    totalResponses: 2190,
    avgOrderValue: 385,
    newCustomerPct: 51,
    topChannel: 'Instagram',
    topChannelPct: '26%',
    acquisition: [
      { name: 'Instagram', value: 456, pct: '26.4%' },
      { name: 'Word of mouth', value: 411, pct: '23.8%' },
      { name: 'Google', value: 314, pct: '18.2%' },
      { name: 'Facebook', value: 277, pct: '16.0%' },
      { name: 'Other', value: 146, pct: '8.4%' },
      { name: 'TikTok', value: 34, pct: '2.0%' },
      { name: 'Retail Store', value: 18, pct: '1.0%' },
      { name: 'Press/Article', value: 17, pct: '1.0%' },
      { name: 'Bus Ad', value: 13, pct: '0.8%' },
      { name: 'Pinterest', value: 12, pct: '0.7%' },
    ],
    motivations: [
      { name: 'Quality of Products', value: 1104 },
      { name: 'Orthopaedic Support', value: 786 },
      { name: 'Ratings & Reputation', value: 634 },
      { name: 'Range of Covers', value: 360 },
      { name: 'Supporting AU Business', value: 346 },
      { name: 'Research', value: 280 },
      { name: 'Original Designers', value: 278 },
      { name: 'Website & Photos', value: 140 },
      { name: 'Free Shipping', value: 120 },
      { name: 'Fast Shipping', value: 105 },
    ],
    siteTriggers: [
      { name: 'Remembered brand', value: 480, pct: '24.7%' },
      { name: 'Saw an ad', value: 329, pct: '16.9%' },
      { name: 'Word of mouth', value: 289, pct: '14.9%' },
      { name: 'Searching', value: 264, pct: '13.6%' },
      { name: 'Other', value: 254, pct: '13.1%' },
      { name: 'Email', value: 238, pct: '12.2%' },
      { name: 'Text message', value: 85, pct: '4.4%' },
    ],
    timeToPurchase: [
      { name: '< 1 day', value: 136, fill: '#10B981' },
      { name: '< 1 week', value: 186, fill: '#3B82F6' },
      { name: '< 1 month', value: 222, fill: '#8B5CF6' },
      { name: '1-3 months', value: 285, fill: '#F59E0B' },
      { name: '3-12 months', value: 323, fill: '#EC4899' },
      { name: '> 12 months', value: 493, fill: '#EF4444' },
    ],
    states: [
      { name: 'New South Wales', value: 712 },
      { name: 'Victoria', value: 532 },
      { name: 'Queensland', value: 416 },
      { name: 'Western Australia', value: 208 },
      { name: 'South Australia', value: 126 },
      { name: 'ACT', value: 47 },
      { name: 'Tasmania', value: 43 },
      { name: 'Auckland (NZ)', value: 22 },
      { name: 'Canterbury (NZ)', value: 11 },
      { name: 'Northern Territory', value: 10 },
    ],
    orderValues: [
      { range: '$0-100', count: 105 },
      { range: '$100-200', count: 286 },
      { range: '$200-300', count: 621 },
      { range: '$300-400', count: 443 },
      { range: '$400-500', count: 256 },
      { range: '$500-750', count: 336 },
      { range: '$750-1K', count: 76 },
      { range: '$1000+', count: 67 },
    ],
    customerTypes: [
      { name: 'New Customers', value: 1116, aov: '$424' },
      { name: 'Repeat Customers', value: 1074, aov: '$344' },
    ],
    monthly: [
      { month: 'Dec 24', responses: 345 },
      { month: 'Jan 25', responses: 170 },
      { month: 'Feb 25', responses: 99 },
      { month: 'Mar 25', responses: 328 },
      { month: 'Apr 25', responses: 115 },
      { month: 'May 25', responses: 96 },
      { month: 'Jun 25', responses: 93 },
      { month: 'Jul 25', responses: 95 },
      { month: 'Aug 25', responses: 221 },
      { month: 'Sep 25', responses: 196 },
      { month: 'Oct 25', responses: 94 },
      { month: 'Nov 25', responses: 224 },
      { month: 'Dec 25', responses: 94 },
      { month: 'Jan 26', responses: 20 },
    ],
    trafficSources: [
      { name: 'Google', value: 628 },
      { name: 'Direct', value: 436 },
      { name: 'Unknown', value: 236 },
      { name: 'Instagram', value: 82 },
      { name: 'Facebook', value: 58 },
      { name: 'Bing', value: 25 },
      { name: 'Other', value: 37 },
    ],
  },
};

export default function BarneyBedDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeStore, setActiveStore] = useState('BBUS');
  const [isExporting, setIsExporting] = useState(false);
  const dashboardRef = useRef(null);

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={setIsAuthenticated} />;
  }

  const data = storeData[activeStore];
  const hasData = data.totalResponses > 0;

  const handleExportPDF = async () => {
    setIsExporting(true);

    // Create a printable version
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${data.name} - Post-Purchase Survey Analysis</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; color: #1f2937; }
          h1 { font-size: 24px; margin-bottom: 8px; color: #111827; }
          h2 { font-size: 18px; margin: 24px 0 12px; color: #374151; border-bottom: 2px solid #3B82F6; padding-bottom: 4px; }
          h3 { font-size: 14px; margin: 16px 0 8px; color: #4B5563; }
          .subtitle { color: #6b7280; font-size: 14px; margin-bottom: 24px; }
          .metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
          .metric { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; }
          .metric-label { font-size: 12px; color: #6b7280; }
          .metric-value { font-size: 24px; font-weight: bold; color: #3B82F6; }
          .metric-sub { font-size: 11px; color: #9ca3af; }
          table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 12px; }
          th, td { padding: 8px 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
          th { background: #f9fafb; font-weight: 600; color: #374151; }
          tr:nth-child(even) { background: #f9fafb; }
          .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
          .insight { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px; margin: 8px 0; font-size: 12px; }
          .insight-title { font-weight: 600; color: #1e40af; margin-bottom: 4px; }
          .page-break { page-break-before: always; }
          .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; text-align: center; }
        </style>
      </head>
      <body>
        <h1>${data.name} - Post-Purchase Survey Analysis</h1>
        <p class="subtitle">${data.dateRange} | ${data.totalResponses.toLocaleString()} Responses</p>

        <div class="metrics">
          <div class="metric">
            <div class="metric-label">Total Responses</div>
            <div class="metric-value">${data.totalResponses.toLocaleString()}</div>
            <div class="metric-sub">Survey completions</div>
          </div>
          <div class="metric">
            <div class="metric-label">Avg Order Value</div>
            <div class="metric-value" style="color: #10B981;">$${data.avgOrderValue}</div>
            <div class="metric-sub">Mean transaction</div>
          </div>
          <div class="metric">
            <div class="metric-label">New Customers</div>
            <div class="metric-value" style="color: #8B5CF6;">${data.newCustomerPct}%</div>
            <div class="metric-sub">First-time buyers</div>
          </div>
          <div class="metric">
            <div class="metric-label">Top Channel</div>
            <div class="metric-value" style="color: #EC4899;">${data.topChannel}</div>
            <div class="metric-sub">${data.topChannelPct} of acquisitions</div>
          </div>
        </div>

        <h2>Acquisition Channels</h2>
        <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">How did customers first hear about Barney Bed?</p>
        <div class="two-col">
          <table>
            <tr><th>Channel</th><th>Responses</th><th>Share</th></tr>
            ${data.acquisition.slice(0, 5).map(item => `<tr><td>${item.name}</td><td>${item.value}</td><td>${item.pct}</td></tr>`).join('')}
          </table>
          <table>
            <tr><th>Channel</th><th>Responses</th><th>Share</th></tr>
            ${data.acquisition.slice(5, 10).map(item => `<tr><td>${item.name}</td><td>${item.value}</td><td>${item.pct}</td></tr>`).join('')}
          </table>
        </div>

        <h2>Purchase Motivations</h2>
        <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">What convinced customers to purchase? (Multi-select)</p>
        <table>
          <tr><th>Motivation</th><th>Mentions</th><th>Motivation</th><th>Mentions</th></tr>
          ${[0, 1, 2, 3, 4].map(i => `<tr><td>${data.motivations[i]?.name || ''}</td><td>${data.motivations[i]?.value || ''}</td><td>${data.motivations[i + 5]?.name || ''}</td><td>${data.motivations[i + 5]?.value || ''}</td></tr>`).join('')}
        </table>

        <h2>Site Visit Triggers</h2>
        <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">What brought customers to the site today?</p>
        <table>
          <tr><th>Trigger</th><th>Responses</th><th>Share</th></tr>
          ${data.siteTriggers.map(item => `<tr><td>${item.name}</td><td>${item.value}</td><td>${item.pct}</td></tr>`).join('')}
        </table>

        <div class="page-break"></div>

        <h2>Time to Purchase</h2>
        <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">How long did customers know about Barney Bed before purchasing?</p>
        <table>
          <tr><th>Time Period</th><th>Customers</th><th>Percentage</th></tr>
          ${data.timeToPurchase.map(item => `<tr><td>${item.name}</td><td>${item.value}</td><td>${(item.value / data.totalResponses * 100).toFixed(1)}%</td></tr>`).join('')}
        </table>

        <div class="insight">
          <div class="insight-title">Key Insight</div>
          36% of customers convert within 1 week of first hearing about Barney Bed, while 32% take 3+ months. Instagram followers show longer consideration cycles (24% wait over a year).
        </div>

        <h2>Geographic Distribution</h2>
        <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">Top ${data.country === 'Australia' ? 'states/territories' : 'states'} by order volume</p>
        <table>
          <tr><th>${data.country === 'Australia' ? 'State/Territory' : 'State'}</th><th>Orders</th><th>Share</th></tr>
          ${data.states.map(item => `<tr><td>${item.name}</td><td>${item.value}</td><td>${(item.value / data.totalResponses * 100).toFixed(1)}%</td></tr>`).join('')}
        </table>

        <h2>Order Value Distribution</h2>
        <table>
          <tr><th>Order Range</th><th>Count</th><th>Order Range</th><th>Count</th></tr>
          ${[0, 1, 2, 3].map(i => `<tr><td>${data.orderValues[i]?.range || ''}</td><td>${data.orderValues[i]?.count || ''}</td><td>${data.orderValues[i + 4]?.range || ''}</td><td>${data.orderValues[i + 4]?.count || ''}</td></tr>`).join('')}
        </table>

        <h2>Customer Segments</h2>
        <table>
          <tr><th>Segment</th><th>Count</th><th>Share</th><th>Avg Order Value</th></tr>
          ${data.customerTypes.map(item => `<tr><td>${item.name}</td><td>${item.value}</td><td>${(item.value / data.totalResponses * 100).toFixed(0)}%</td><td>${item.aov}</td></tr>`).join('')}
        </table>

        <h2>Key Insights & Recommendations</h2>
        <div class="two-col">
          <div>
            <h3>What's Working</h3>
            <ul style="font-size: 12px; margin-left: 16px;">
              <li>Strong repeat customer base (32%)</li>
              <li>Instagram driving awareness effectively</li>
              <li>Quality and orthopaedic messaging resonates</li>
              <li>Good geographic diversification</li>
            </ul>
          </div>
          <div>
            <h3>Opportunities</h3>
            <ul style="font-size: 12px; margin-left: 16px;">
              <li>Increase repeat purchase AOV with bundles</li>
              <li>Nurture long-consideration Instagram followers</li>
              <li>Expand TikTok presence (only 3.8%)</li>
              <li>Build referral/loyalty program</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | Barney Bed Post-Purchase Survey Analysis
        </div>
      </body>
      </html>
    `;

    // Open print dialog
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();

    // Wait for content to load then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        setIsExporting(false);
      }, 250);
    };
  };

  const baseTabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'acquisition', label: 'Acquisition' },
    { id: 'motivations', label: 'Motivations' },
    { id: 'geography', label: 'Geography' },
    { id: 'customers', label: 'Customers' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'comparison', label: 'Comparison' },
  ];

  const tabs = baseTabs;

  const StatCard = ({ title, value, subtitle, color = 'blue' }) => (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className={`text-3xl font-bold mt-1 ${color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : color === 'purple' ? 'text-purple-600' : color === 'pink' ? 'text-pink-600' : 'text-amber-600'}`}>{value}</p>
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
    </div>
  );

  const InsightCard = ({ title, children, color = 'blue' }) => (
    <div className={`rounded-xl p-4 ${color === 'blue' ? 'bg-blue-50 border-blue-100' : color === 'green' ? 'bg-green-50 border-green-100' : color === 'purple' ? 'bg-purple-50 border-purple-100' : color === 'pink' ? 'bg-pink-50 border-pink-100' : 'bg-amber-50 border-amber-100'} border`}>
      <h4 className={`font-semibold mb-2 ${color === 'blue' ? 'text-blue-800' : color === 'green' ? 'text-green-800' : color === 'purple' ? 'text-purple-800' : color === 'pink' ? 'text-pink-800' : 'text-amber-800'}`}>{title}</h4>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );

  const NoDataMessage = () => (
    <div className="bg-gray-50 rounded-xl p-12 text-center border-2 border-dashed border-gray-200">
      <div className="text-gray-400 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-600 mb-2">No Data Available</h3>
      <p className="text-gray-500">Upload the BBAU survey data to view Australia insights.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6" ref={dashboardRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header with Store Switcher and Export */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Barney Bed - Post-Purchase Survey Analysis</h1>
            <p className="text-gray-500 mt-1">{data.country} | {data.dateRange} | {data.totalResponses.toLocaleString()} Responses</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Store Switcher */}
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              {Object.keys(storeData).map((store) => (
                <button
                  key={store}
                  onClick={() => setActiveStore(store)}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                    activeStore === store
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {store}
                </button>
              ))}
            </div>

            {/* Export PDF Button */}
            <button
              onClick={handleExportPDF}
              disabled={!hasData || isExporting}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                hasData && !isExporting
                  ? 'bg-red-600 text-white hover:bg-red-700 shadow-sm'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isExporting ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export PDF
                </>
              )}
            </button>

            {/* Logout Button */}
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Show no data message for empty stores */}
        {!hasData ? (
          <NoDataMessage />
        ) : (
          <>
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard title="Total Responses" value={data.totalResponses.toLocaleString()} subtitle="Survey completions" />
                  <StatCard title="Avg Order Value" value={`$${data.avgOrderValue}`} subtitle="Mean transaction" color="green" />
                  <StatCard title="New Customers" value={`${data.newCustomerPct}%`} subtitle="First-time buyers" color="purple" />
                  <StatCard title="Top Channel" value={data.topChannel} subtitle={`${data.topChannelPct} of acquisitions`} color="pink" />
                </div>

                {/* Key Insights */}
                <div className="grid md:grid-cols-3 gap-4">
                  <InsightCard title="Top Acquisition Channel" color="pink">
                    <p><strong>{data.acquisition[0]?.name} leads at {data.acquisition[0]?.pct}</strong> of all customer acquisitions, followed by {data.acquisition[1]?.name} ({data.acquisition[1]?.pct}) and {data.acquisition[2]?.name} ({data.acquisition[2]?.pct}).</p>
                  </InsightCard>
                  <InsightCard title="Purchase Drivers" color="green">
                    <p><strong>{data.motivations[0]?.name} & {data.motivations[1]?.name}</strong> are the top reasons customers buy ({data.motivations[0]?.value} and {data.motivations[1]?.value} mentions respectively).</p>
                  </InsightCard>
                  <InsightCard title="Purchase Timeline" color="amber">
                    <p><strong>36% convert within a week</strong> - with 18% buying same-day and 17% within a week.</p>
                  </InsightCard>
                </div>

                {/* Monthly Trend */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Survey Responses</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={data.monthly}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip />
                      <Line type="monotone" dataKey="responses" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Dual Charts */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">How Did You First Hear About Us?</h3>
                    <ResponsiveContainer width="100%" height={280}>
                      <PieChart>
                        <Pie data={data.acquisition.slice(0, 6)} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, pct }) => `${name}: ${pct}`} labelLine={{ stroke: '#9CA3AF' }}>
                          {data.acquisition.slice(0, 6).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">What Brought You to the Site Today?</h3>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={data.siteTriggers} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis type="number" tick={{ fontSize: 11 }} />
                        <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={100} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#10B981" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {/* Acquisition Tab */}
            {activeTab === 'acquisition' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Acquisition Channels (Self-Reported)</h3>
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={data.acquisition} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis type="number" tick={{ fontSize: 11 }} />
                        <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={90} />
                        <Tooltip />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                          {data.acquisition.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">First Visit Traffic Source (Technical)</h3>
                    <ResponsiveContainer width="100%" height={350}>
                      <PieChart>
                        <Pie data={data.trafficSources} cx="50%" cy="50%" outerRadius={120} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                          {data.trafficSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Time from First Awareness to Purchase</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data.timeToPurchase}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {data.timeToPurchase.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {activeStore === 'BBUS' ? (
                    <>
                      <InsightCard title="Instagram Dominates Social" color="pink">
                        <p>Instagram accounts for <strong>35% of all acquisitions</strong> - 4.5x more than Facebook (7.8%). This suggests your Instagram content and ads are highly effective.</p>
                      </InsightCard>
                      <InsightCard title="Google Drives Intent-Based Traffic" color="blue">
                        <p>Google search (23%) brings high-intent shoppers. <strong>66% of Google-discovered customers buy within 1 week</strong> vs. only 16% from Instagram.</p>
                      </InsightCard>
                      <InsightCard title="Word of Mouth is Strong" color="green">
                        <p><strong>10% come from word of mouth</strong> - a healthy organic referral rate. Combined with influencers (1.6%), earned media represents 12% of acquisition.</p>
                      </InsightCard>
                      <InsightCard title="Fast Conversion Cycles" color="amber">
                        <p><strong>36% convert within 1 week</strong> in the US market. Google shoppers convert fastest with 66% buying within a week.</p>
                      </InsightCard>
                    </>
                  ) : (
                    <>
                      <InsightCard title="Word of Mouth is Huge" color="green">
                        <p>Australia has <strong>2.4x stronger word of mouth (24%)</strong> than the US (10%). This reflects strong brand loyalty and community.</p>
                      </InsightCard>
                      <InsightCard title="Facebook Stronger in AU" color="blue">
                        <p>Facebook is <strong>2x more effective in Australia (16%)</strong> vs US (8%). Consider increasing Facebook ad spend in AU market.</p>
                      </InsightCard>
                      <InsightCard title="More Balanced Channels" color="pink">
                        <p>Instagram leads at 26% but channels are more balanced in AU. Top 4 channels each contribute 16-26% vs US where Instagram dominates.</p>
                      </InsightCard>
                      <InsightCard title="Longer Consideration Cycles" color="amber">
                        <p><strong>50% take 3+ months to purchase</strong> in Australia vs 32% in US. Email nurturing is especially important for this market.</p>
                      </InsightCard>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Motivations Tab */}
            {activeTab === 'motivations' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">What Convinced You to Purchase? (Multi-Select)</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data.motivations} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis type="number" tick={{ fontSize: 11 }} />
                      <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={140} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">What Brought You to the Site Today?</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={data.siteTriggers} cx="50%" cy="50%" outerRadius={110} dataKey="value" label={({ name, pct }) => `${name}: ${pct}`}>
                        {data.siteTriggers.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <InsightCard title="Quality is King" color="blue">
                    <p><strong>Quality of Products ({data.motivations[0]?.value} mentions)</strong> is the #1 purchase driver. This validates your premium positioning and product focus.</p>
                  </InsightCard>
                  <InsightCard title="Health Benefits Matter" color="green">
                    <p><strong>Orthopaedic Support ({data.motivations[1]?.value})</strong> is nearly tied with quality. Dog health/comfort is a major differentiator for your customers.</p>
                  </InsightCard>
                  <InsightCard title="Social Proof Works" color="purple">
                    <p><strong>Ratings & Reputation ({data.motivations[2]?.value})</strong> is the 3rd most cited reason. Reviews and testimonials are converting browsers to buyers.</p>
                  </InsightCard>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marketing Recommendations</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-700">Content Focus</h4>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li>• Emphasize quality materials and craftsmanship</li>
                        <li>• Highlight orthopaedic and health benefits</li>
                        <li>• Feature customer reviews prominently</li>
                        <li>• Showcase cover variety and customization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700">Channel Strategy</h4>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li>• Double down on Instagram - your top performer</li>
                        <li>• Optimize Google for high-intent "same-day" buyers</li>
                        <li>• Build referral programs (WOM is 10%)</li>
                        <li>• Nurture long-consideration prospects with email</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Geography Tab */}
            {activeTab === 'geography' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <StatCard title="#1 State" value={data.states[0]?.name} subtitle={`${data.states[0]?.value} orders (${(data.states[0]?.value / data.totalResponses * 100).toFixed(1)}%)`} color="blue" />
                  <StatCard title="#2 State" value={data.states[1]?.name} subtitle={`${data.states[1]?.value} orders (${(data.states[1]?.value / data.totalResponses * 100).toFixed(1)}%)`} color="green" />
                  <StatCard title="#3 State" value={data.states[2]?.name} subtitle={`${data.states[2]?.value} orders (${(data.states[2]?.value / data.totalResponses * 100).toFixed(1)}%)`} color="purple" />
                  <StatCard title="Top 3 Share" value={`${((data.states[0]?.value + data.states[1]?.value + data.states[2]?.value) / data.totalResponses * 100).toFixed(0)}%`} subtitle="of all orders" color="amber" />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Orders by {data.country === 'Australia' ? 'State/Territory' : 'State'} (Top 10)</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data.states}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={80} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {activeStore === 'BBUS' ? (
                    <>
                      <InsightCard title="West Coast Strong" color="blue">
                        <p>California alone accounts for <strong>nearly 20% of all orders</strong>. Combined with Washington and Oregon, the West Coast represents 25% of sales.</p>
                      </InsightCard>
                      <InsightCard title="Sun Belt Opportunity" color="amber">
                        <p>Texas, Florida, and Arizona together represent <strong>20% of orders</strong>. These high-population states with outdoor dog cultures are natural targets.</p>
                      </InsightCard>
                    </>
                  ) : (
                    <>
                      <InsightCard title="East Coast Dominates" color="blue">
                        <p>NSW and Victoria together account for <strong>57% of all orders</strong>. These two states are your core Australian market.</p>
                      </InsightCard>
                      <InsightCard title="Queensland Growth Opportunity" color="amber">
                        <p>Queensland at 19% is your third largest market. <strong>WA and SA combined (15%)</strong> represent expansion opportunities.</p>
                      </InsightCard>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Customers Tab */}
            {activeTab === 'customers' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <StatCard title="New Customers" value={data.customerTypes[0]?.value.toLocaleString()} subtitle={`${(data.customerTypes[0]?.value / data.totalResponses * 100).toFixed(0)}% of respondents`} color="blue" />
                  <StatCard title="Repeat Customers" value={data.customerTypes[1]?.value.toLocaleString()} subtitle={`${(data.customerTypes[1]?.value / data.totalResponses * 100).toFixed(0)}% of respondents`} color="green" />
                  <StatCard title="New Customer AOV" value={data.customerTypes[0]?.aov} subtitle="Average order value" color="purple" />
                  <StatCard title="Repeat Customer AOV" value={data.customerTypes[1]?.aov} subtitle="Average order value" color="amber" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Type Distribution</h3>
                    <ResponsiveContainer width="100%" height={280}>
                      <PieChart>
                        <Pie data={data.customerTypes} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                          <Cell fill="#3B82F6" />
                          <Cell fill="#10B981" />
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Value Distribution</h3>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={data.orderValues}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="range" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 11 }} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {activeStore === 'BBUS' ? (
                    <>
                      <InsightCard title="Healthy Repeat Rate" color="green">
                        <p><strong>32% are repeat customers</strong> - a strong sign of product satisfaction and brand loyalty.</p>
                      </InsightCard>
                      <InsightCard title="New Customers Spend More" color="blue">
                        <p>New customers average <strong>{data.customerTypes[0]?.aov} vs {data.customerTypes[1]?.aov} for repeat</strong>. This reflects first-time bed purchases vs. accessory add-ons.</p>
                      </InsightCard>
                      <InsightCard title="Sweet Spot: $200-$400" color="purple">
                        <p><strong>51% of orders</strong> fall between $200-$400. This is your core bed + cover bundle price range.</p>
                      </InsightCard>
                    </>
                  ) : (
                    <>
                      <InsightCard title="Nearly 50/50 Split" color="green">
                        <p><strong>49% are repeat customers</strong> in Australia - significantly higher than US (32%). Exceptional brand loyalty.</p>
                      </InsightCard>
                      <InsightCard title="Higher AOV in AU" color="blue">
                        <p>Australian AOV is <strong>$385 vs $355 in US</strong>. New customers spend {data.customerTypes[0]?.aov} vs {data.customerTypes[1]?.aov} for repeat.</p>
                      </InsightCard>
                      <InsightCard title="Higher Value Orders" color="purple">
                        <p><strong>22% of AU orders exceed $500</strong> vs 16% in US. Australians buy more premium bundles.</p>
                      </InsightCard>
                    </>
                  )}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Takeaways - {data.country}</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                    {activeStore === 'BBUS' ? (
                      <>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">What's Working</h4>
                          <ul className="space-y-1">
                            <li>• Strong repeat customer base (32%)</li>
                            <li>• Instagram driving awareness effectively</li>
                            <li>• Quality and orthopaedic messaging resonates</li>
                            <li>• Good geographic diversification</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Opportunities</h4>
                          <ul className="space-y-1">
                            <li>• Increase repeat purchase AOV with bundles</li>
                            <li>• Nurture long-consideration Instagram followers</li>
                            <li>• Expand TikTok presence (only 3.8%)</li>
                            <li>• Build referral/loyalty program</li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">What's Working</h4>
                          <ul className="space-y-1">
                            <li>• Exceptional repeat rate (49%) and loyalty</li>
                            <li>• Strong word of mouth (24% of acquisition)</li>
                            <li>• Higher AOV ($385) than US market</li>
                            <li>• "Supporting AU Business" resonates (346 mentions)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Opportunities</h4>
                          <ul className="space-y-1">
                            <li>• Formalize referral program (WOM already strong)</li>
                            <li>• Increase Facebook spend (2x US effectiveness)</li>
                            <li>• Long nurture sequences (50% take 3+ months)</li>
                            <li>• Expand retail store presence (1% channel)</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Strategy Tab - BBUS */}
            {activeTab === 'strategy' && activeStore === 'BBUS' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">BBUS Marketing Strategy</h2>
                      <p className="text-gray-500">United States Market Recommendations</p>
                    </div>
                  </div>

                  <div className="prose max-w-none text-gray-700">
                    {/* Executive Summary */}
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
                      <h3 className="text-lg font-semibold text-blue-800 mt-0 mb-3">Strategic Summary</h3>
                      <p className="mb-0">
                        The US market is <strong>paid social dominant</strong> with faster conversion cycles. Focus on <strong>Instagram as the primary channel</strong> (35% of acquisition), optimize Google for high-intent buyers, and build referral programs to close the gap with Australia's word-of-mouth strength.
                      </p>
                    </div>

                    {/* Channel Priority Matrix */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Channel Priority Matrix</h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Channel</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Current %</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Priority</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b bg-green-50">
                            <td className="px-4 py-3 text-sm font-medium">Instagram</td>
                            <td className="px-4 py-3 text-sm">35.4%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">HIGH - Scale</span></td>
                            <td className="px-4 py-3 text-sm">Increase budget 20-30%, test new ad formats</td>
                          </tr>
                          <tr className="border-b bg-green-50">
                            <td className="px-4 py-3 text-sm font-medium">Google Search</td>
                            <td className="px-4 py-3 text-sm">23.1%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">HIGH - Optimize</span></td>
                            <td className="px-4 py-3 text-sm">66% convert in 1 week - maximize ROAS</td>
                          </tr>
                          <tr className="border-b bg-yellow-50">
                            <td className="px-4 py-3 text-sm font-medium">Word of Mouth</td>
                            <td className="px-4 py-3 text-sm">10.1%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded-full">MED - Build</span></td>
                            <td className="px-4 py-3 text-sm">Launch referral program (AU is at 24%)</td>
                          </tr>
                          <tr className="border-b bg-yellow-50">
                            <td className="px-4 py-3 text-sm font-medium">Facebook</td>
                            <td className="px-4 py-3 text-sm">7.8%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded-full">MED - Test</span></td>
                            <td className="px-4 py-3 text-sm">Test increased spend (2x effective in AU)</td>
                          </tr>
                          <tr className="border-b bg-blue-50">
                            <td className="px-4 py-3 text-sm font-medium">TikTok</td>
                            <td className="px-4 py-3 text-sm">3.8%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">GROW - Invest</span></td>
                            <td className="px-4 py-3 text-sm">High AOV ($400), expand presence</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">Pinterest</td>
                            <td className="px-4 py-3 text-sm">2.1%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-gray-500 text-white text-xs rounded-full">LOW - Maintain</span></td>
                            <td className="px-4 py-3 text-sm">Maintain organic presence</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Paid Media Strategy */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Paid Media Strategy</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 border border-pink-100">
                        <h4 className="font-semibold text-pink-800 mb-3 flex items-center gap-2">
                          <span className="text-xl">📸</span> Instagram (Primary Channel)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Budget Allocation:</strong> 45-50% of paid media</li>
                          <li><strong>Ad Types:</strong> Reels, Stories, Carousel</li>
                          <li><strong>Creative Focus:</strong> Quality craftsmanship, orthopaedic benefits, customer testimonials</li>
                          <li><strong>Targeting:</strong> Dog owners 25-54, pet parents, home decor interest</li>
                          <li><strong>Retargeting:</strong> Long nurture sequences (16% take 3+ months)</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <span className="text-xl">🔍</span> Google Ads (High-Intent)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Budget Allocation:</strong> 30-35% of paid media</li>
                          <li><strong>Campaign Types:</strong> Search, Shopping, Performance Max</li>
                          <li><strong>Keywords:</strong> "orthopedic dog bed", "luxury dog bed", "Barney Bed"</li>
                          <li><strong>Bidding:</strong> Maximize conversions (66% convert in 1 week)</li>
                          <li><strong>Landing Pages:</strong> Direct to product with reviews prominent</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                          <span className="text-xl">👥</span> Facebook (Test & Learn)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Budget Allocation:</strong> 10-15% of paid media</li>
                          <li><strong>Opportunity:</strong> 2x more effective in AU - test scaling</li>
                          <li><strong>Ad Types:</strong> Video, Carousel, Collection</li>
                          <li><strong>Audiences:</strong> Lookalikes from purchasers, pet interest groups</li>
                          <li><strong>Test:</strong> Increase spend by 50%, measure ROAS</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 text-white">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="text-xl">🎵</span> TikTok (Growth Channel)
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-200">
                          <li><strong>Budget Allocation:</strong> 5-10% of paid media</li>
                          <li><strong>Why Invest:</strong> $400 AOV from TikTok customers</li>
                          <li><strong>Content:</strong> UGC-style, dog reactions, unboxing</li>
                          <li><strong>Influencers:</strong> Partner with pet TikTokers</li>
                          <li><strong>Goal:</strong> Grow from 3.8% to 8% of acquisition</li>
                        </ul>
                      </div>
                    </div>

                    {/* Organic Content Strategy */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Organic Content Strategy</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Content Pillars</h4>
                          <ul className="space-y-2 text-sm">
                            <li>🏆 <strong>Quality & Craftsmanship</strong> - Behind-the-scenes, materials</li>
                            <li>🐕 <strong>Dog Health & Comfort</strong> - Orthopaedic benefits, vet endorsements</li>
                            <li>⭐ <strong>Customer Stories</strong> - Reviews, UGC, testimonials</li>
                            <li>🇺🇸 <strong>US-Made Pride</strong> - Support local messaging</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Content Mix</h4>
                          <ul className="space-y-2 text-sm">
                            <li>40% - Customer UGC & testimonials</li>
                            <li>25% - Product features & benefits</li>
                            <li>20% - Educational (dog health)</li>
                            <li>15% - Brand story & behind-the-scenes</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Posting Cadence</h4>
                          <ul className="space-y-2 text-sm">
                            <li><strong>Instagram:</strong> 5-7x/week + daily Stories</li>
                            <li><strong>TikTok:</strong> 3-5x/week</li>
                            <li><strong>Facebook:</strong> 3-4x/week</li>
                            <li><strong>Pinterest:</strong> 5-10 pins/week</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Referral Program */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Referral Program (Priority Initiative)</h3>
                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
                      <p className="mb-4"><strong>Gap to Close:</strong> US word-of-mouth is 10% vs Australia's 24%. A formal referral program could add 5-10% to acquisition.</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-2">Recommended Structure</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Give $25, Get $25 (or 15% off)</li>
                            <li>• Easy sharing via email, SMS, social</li>
                            <li>• Track referrals in post-purchase flow</li>
                            <li>• VIP tier for 3+ referrals</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-2">Target Metrics</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Grow WOM from 10% → 15% in 6 months</li>
                            <li>• 20% of customers share referral link</li>
                            <li>• 5% referral conversion rate</li>
                            <li>• CAC reduction of 15-20%</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Geographic Focus */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Geographic Targeting</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-2">Primary Markets (Defend)</h4>
                        <p className="text-sm mb-2">California, Texas, Florida, New York = 43% of orders</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Maintain strong presence</li>
                          <li>• Geo-targeted campaigns</li>
                          <li>• Local influencer partnerships</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-2">Growth Markets (Attack)</h4>
                        <p className="text-sm mb-2">Colorado, Washington, Arizona, Georgia</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Increase paid media allocation</li>
                          <li>• Outdoor/active dog owner targeting</li>
                          <li>• Test regional messaging</li>
                        </ul>
                      </div>
                    </div>

                    {/* KPIs */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Performance Indicators</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Metric</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Current</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">6-Month Target</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">12-Month Target</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Instagram Acquisition %</td>
                            <td className="px-4 py-3 text-sm">35%</td>
                            <td className="px-4 py-3 text-sm">38%</td>
                            <td className="px-4 py-3 text-sm">40%</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm">Word of Mouth %</td>
                            <td className="px-4 py-3 text-sm">10%</td>
                            <td className="px-4 py-3 text-sm">13%</td>
                            <td className="px-4 py-3 text-sm">18%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Repeat Customer Rate</td>
                            <td className="px-4 py-3 text-sm">32%</td>
                            <td className="px-4 py-3 text-sm">36%</td>
                            <td className="px-4 py-3 text-sm">40%</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm">TikTok Acquisition %</td>
                            <td className="px-4 py-3 text-sm">3.8%</td>
                            <td className="px-4 py-3 text-sm">6%</td>
                            <td className="px-4 py-3 text-sm">8%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm">Average Order Value</td>
                            <td className="px-4 py-3 text-sm">$355</td>
                            <td className="px-4 py-3 text-sm">$370</td>
                            <td className="px-4 py-3 text-sm">$385</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Strategy Tab - BBAU */}
            {activeTab === 'strategy' && activeStore === 'BBAU' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">BBAU Marketing Strategy</h2>
                      <p className="text-gray-500">Australia Market Recommendations</p>
                    </div>
                  </div>

                  <div className="prose max-w-none text-gray-700">
                    {/* Executive Summary */}
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-8">
                      <h3 className="text-lg font-semibold text-green-800 mt-0 mb-3">Strategic Summary</h3>
                      <p className="mb-0">
                        The Australian market is <strong>community-driven</strong> with exceptional brand loyalty (49% repeat rate). Focus on <strong>amplifying word-of-mouth</strong> (already 24%), leverage Facebook's strength (2x US), and build long nurture sequences for the 50% who take 3+ months to convert. Lean into "Australian Business" messaging.
                      </p>
                    </div>

                    {/* Channel Priority Matrix */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Channel Priority Matrix</h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Channel</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Current %</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Priority</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b bg-green-50">
                            <td className="px-4 py-3 text-sm font-medium">Word of Mouth</td>
                            <td className="px-4 py-3 text-sm">23.8%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">HIGH - Amplify</span></td>
                            <td className="px-4 py-3 text-sm">Formalize referral program, incentivize sharing</td>
                          </tr>
                          <tr className="border-b bg-green-50">
                            <td className="px-4 py-3 text-sm font-medium">Instagram</td>
                            <td className="px-4 py-3 text-sm">26.4%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">HIGH - Maintain</span></td>
                            <td className="px-4 py-3 text-sm">Continue strong presence, focus on community</td>
                          </tr>
                          <tr className="border-b bg-green-50">
                            <td className="px-4 py-3 text-sm font-medium">Facebook</td>
                            <td className="px-4 py-3 text-sm">16.0%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">HIGH - Scale</span></td>
                            <td className="px-4 py-3 text-sm">2x US effectiveness - increase budget 30-40%</td>
                          </tr>
                          <tr className="border-b bg-yellow-50">
                            <td className="px-4 py-3 text-sm font-medium">Google Search</td>
                            <td className="px-4 py-3 text-sm">18.2%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded-full">MED - Optimize</span></td>
                            <td className="px-4 py-3 text-sm">Maintain, focus on brand + orthopaedic terms</td>
                          </tr>
                          <tr className="border-b bg-blue-50">
                            <td className="px-4 py-3 text-sm font-medium">Email Marketing</td>
                            <td className="px-4 py-3 text-sm">12.2%*</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">GROW - Invest</span></td>
                            <td className="px-4 py-3 text-sm">Critical for long consideration cycles</td>
                          </tr>
                          <tr className="bg-blue-50">
                            <td className="px-4 py-3 text-sm font-medium">Retail Stores</td>
                            <td className="px-4 py-3 text-sm">1.0%</td>
                            <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">GROW - Explore</span></td>
                            <td className="px-4 py-3 text-sm">Unique to AU - explore partnerships</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">*Email shown as site trigger (what brought you today), not initial acquisition</p>

                    {/* Paid Media Strategy */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Paid Media Strategy</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <span className="text-xl">👥</span> Facebook (Scale Aggressively)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Budget Allocation:</strong> 35-40% of paid media</li>
                          <li><strong>Why:</strong> 2x more effective than in US market</li>
                          <li><strong>Ad Types:</strong> Video testimonials, Carousel, Stories</li>
                          <li><strong>Targeting:</strong> Dog owner groups, pet communities, lookalikes</li>
                          <li><strong>Creative:</strong> "Aussie-made", customer stories, quality focus</li>
                          <li><strong>Action:</strong> Increase budget 30-40% and test scaling</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 border border-pink-100">
                        <h4 className="font-semibold text-pink-800 mb-3 flex items-center gap-2">
                          <span className="text-xl">📸</span> Instagram (Community Focus)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Budget Allocation:</strong> 30-35% of paid media</li>
                          <li><strong>Approach:</strong> Community over hard-sell</li>
                          <li><strong>Ad Types:</strong> Reels, UGC, Customer Stories</li>
                          <li><strong>Strategy:</strong> Retarget for long nurture (50% take 3+ months)</li>
                          <li><strong>Creative:</strong> Real customers, real dogs, real testimonials</li>
                          <li><strong>Goal:</strong> Build community, drive to email capture</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <span className="text-xl">🔍</span> Google Ads (Brand Defense)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Budget Allocation:</strong> 20-25% of paid media</li>
                          <li><strong>Focus:</strong> Brand terms + orthopaedic intent</li>
                          <li><strong>Keywords:</strong> "Barney Bed Australia", "orthopedic dog bed AU"</li>
                          <li><strong>Shopping:</strong> Optimize product feeds</li>
                          <li><strong>Note:</strong> Lower priority than US (less same-day conversion)</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                          <span className="text-xl">📧</span> Email/SMS (Critical for AU)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Budget Allocation:</strong> 10% of marketing budget</li>
                          <li><strong>Why Critical:</strong> 50% take 3+ months to buy</li>
                          <li><strong>Flows:</strong> Welcome, Browse Abandon, Cart Abandon, Win-back</li>
                          <li><strong>Cadence:</strong> Longer sequences (12-16 weeks)</li>
                          <li><strong>Content:</strong> Education, testimonials, gentle reminders</li>
                        </ul>
                      </div>
                    </div>

                    {/* Organic & Community Strategy */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Organic & Community Strategy</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Content Pillars</h4>
                          <ul className="space-y-2 text-sm">
                            <li>🇦🇺 <strong>Australian Made</strong> - Local pride, support local</li>
                            <li>❤️ <strong>Community Stories</strong> - Customer UGC, testimonials</li>
                            <li>🐕 <strong>Dog Health</strong> - Orthopaedic benefits, senior dogs</li>
                            <li>🏠 <strong>Home & Lifestyle</strong> - Design, covers, aesthetics</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Content Mix</h4>
                          <ul className="space-y-2 text-sm">
                            <li>50% - Customer UGC & community content</li>
                            <li>20% - Australian-made messaging</li>
                            <li>20% - Product & orthopaedic education</li>
                            <li>10% - Brand story & team</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Community Building</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Create "Barney Bed Family" FB group</li>
                            <li>• Feature 2-3 customers/week</li>
                            <li>• Host virtual "dog park" events</li>
                            <li>• Partner with AU pet influencers</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Referral Program */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Referral Program (Amplify Existing Strength)</h3>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
                      <p className="mb-4"><strong>Opportunity:</strong> WOM is already 24% without a formal program. A structured referral program could push this to 30%+ and reduce CAC significantly.</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-800 mb-2">Recommended Structure</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Give $30 AUD, Get $30 AUD</li>
                            <li>• Double rewards for repeat customers</li>
                            <li>• "Barney Ambassador" tier for 5+ referrals</li>
                            <li>• Free cover for 10+ referrals</li>
                            <li>• Easy social sharing tools</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-800 mb-2">Target Metrics</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Grow WOM from 24% → 30% in 6 months</li>
                            <li>• 30% of customers share referral link</li>
                            <li>• 8% referral conversion rate</li>
                            <li>• Create 500+ "Barney Ambassadors"</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Long Nurture Strategy */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Long Nurture Strategy (Critical for AU)</h3>
                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
                      <p className="mb-4"><strong>Key Insight:</strong> 30% of AU customers wait over 12 months before purchasing. This requires a fundamentally different nurture approach than the US market.</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-2">Email Nurture Sequence</h4>
                          <ul className="space-y-1 text-sm">
                            <li>Week 1-2: Welcome + brand story</li>
                            <li>Week 3-4: Orthopaedic education</li>
                            <li>Week 5-8: Customer testimonials</li>
                            <li>Week 9-12: Cover showcase + design</li>
                            <li>Month 3-6: Monthly value content</li>
                            <li>Month 6-12: Quarterly check-ins + offers</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-2">Retargeting Windows</h4>
                          <ul className="space-y-1 text-sm">
                            <li>Days 1-7: High frequency, awareness</li>
                            <li>Days 8-30: Testimonial-focused</li>
                            <li>Days 31-90: Gentle reminders</li>
                            <li>Days 91-180: Seasonal/sale triggers</li>
                            <li>Days 180-365: Re-engagement campaigns</li>
                            <li><strong>Key:</strong> Don't give up after 30 days!</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Geographic Focus */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Geographic Targeting</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-2">Primary Markets (NSW + VIC = 57%)</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Sydney & Melbourne metro focus</li>
                          <li>• Local influencer partnerships</li>
                          <li>• Potential pop-up/retail opportunities</li>
                          <li>• Community events & meetups</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-2">Growth Markets (QLD, WA, SA = 35%)</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Queensland: 19% - outdoor lifestyle angle</li>
                          <li>• Western Australia: 9.5% - premium positioning</li>
                          <li>• South Australia: 5.8% - growth opportunity</li>
                          <li>• Test increased paid media in these regions</li>
                        </ul>
                      </div>
                    </div>

                    {/* Retail Exploration */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Retail Channel (AU-Unique Opportunity)</h3>
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 mb-6">
                      <p className="mb-4"><strong>Insight:</strong> 1% of AU customers discovered Barney Bed in a retail store. This channel doesn't exist in the US. Explore expansion.</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-2">Potential Partners</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Premium pet stores (not big box)</li>
                            <li>• Vet clinics (orthopaedic angle)</li>
                            <li>• Home/lifestyle boutiques</li>
                            <li>• Dog-friendly cafes (display)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-2">Test Approach</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Start with 3-5 stores in Sydney/Melbourne</li>
                            <li>• Display beds with QR to purchase online</li>
                            <li>• Consignment or wholesale model</li>
                            <li>• Track attribution with store codes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* KPIs */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Performance Indicators</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Metric</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Current</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">6-Month Target</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">12-Month Target</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Word of Mouth %</td>
                            <td className="px-4 py-3 text-sm">24%</td>
                            <td className="px-4 py-3 text-sm">28%</td>
                            <td className="px-4 py-3 text-sm">32%</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm">Facebook Acquisition %</td>
                            <td className="px-4 py-3 text-sm">16%</td>
                            <td className="px-4 py-3 text-sm">20%</td>
                            <td className="px-4 py-3 text-sm">22%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Repeat Customer Rate</td>
                            <td className="px-4 py-3 text-sm">49%</td>
                            <td className="px-4 py-3 text-sm">52%</td>
                            <td className="px-4 py-3 text-sm">55%</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm">Email List Growth</td>
                            <td className="px-4 py-3 text-sm">Baseline</td>
                            <td className="px-4 py-3 text-sm">+25%</td>
                            <td className="px-4 py-3 text-sm">+50%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm">Average Order Value</td>
                            <td className="px-4 py-3 text-sm">$385</td>
                            <td className="px-4 py-3 text-sm">$400</td>
                            <td className="px-4 py-3 text-sm">$420</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Comparison Tab */}
            {activeTab === 'comparison' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary: BBUS vs BBAU Comparison</h2>

                  <div className="prose max-w-none text-gray-700">
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Overview</h3>
                    <p className="mb-4">
                      This analysis compares post-purchase survey data from <strong>1,519 US customers (BBUS)</strong> and <strong>2,190 Australian customers (BBAU)</strong> collected between December 2024 and January 2026. The data reveals significant differences in customer behavior, acquisition channels, and purchase patterns between the two markets.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Metrics Comparison</h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Metric</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700 border-b">BBUS (United States)</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-green-700 border-b">BBAU (Australia)</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Difference</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Total Responses</td>
                            <td className="px-4 py-3 text-sm">1,519</td>
                            <td className="px-4 py-3 text-sm">2,190</td>
                            <td className="px-4 py-3 text-sm text-green-600">+44% more in AU</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm">Average Order Value</td>
                            <td className="px-4 py-3 text-sm">$355</td>
                            <td className="px-4 py-3 text-sm">$385</td>
                            <td className="px-4 py-3 text-sm text-green-600">+8% higher in AU</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Repeat Customer Rate</td>
                            <td className="px-4 py-3 text-sm">32%</td>
                            <td className="px-4 py-3 text-sm">49%</td>
                            <td className="px-4 py-3 text-sm text-green-600">+17pts higher in AU</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm">New Customer AOV</td>
                            <td className="px-4 py-3 text-sm">$364</td>
                            <td className="px-4 py-3 text-sm">$424</td>
                            <td className="px-4 py-3 text-sm text-green-600">+16% higher in AU</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Repeat Customer AOV</td>
                            <td className="px-4 py-3 text-sm">$337</td>
                            <td className="px-4 py-3 text-sm">$344</td>
                            <td className="px-4 py-3 text-sm text-gray-500">Similar</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-4 py-3 text-sm">Orders $500+</td>
                            <td className="px-4 py-3 text-sm">16%</td>
                            <td className="px-4 py-3 text-sm">22%</td>
                            <td className="px-4 py-3 text-sm text-green-600">+6pts higher in AU</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Acquisition Channel Comparison</h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Channel</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700 border-b">BBUS (US)</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-green-700 border-b">BBAU (AU)</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Key Insight</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm font-medium">Instagram</td>
                            <td className="px-4 py-3 text-sm">35.4%</td>
                            <td className="px-4 py-3 text-sm">26.4%</td>
                            <td className="px-4 py-3 text-sm">Dominates US; leads but less dominant in AU</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">Word of Mouth</td>
                            <td className="px-4 py-3 text-sm">10.1%</td>
                            <td className="px-4 py-3 text-sm">23.8%</td>
                            <td className="px-4 py-3 text-sm text-green-600 font-medium">2.4x stronger in Australia</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm font-medium">Google</td>
                            <td className="px-4 py-3 text-sm">23.1%</td>
                            <td className="px-4 py-3 text-sm">18.2%</td>
                            <td className="px-4 py-3 text-sm">Stronger in US; high-intent buyers</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">Facebook</td>
                            <td className="px-4 py-3 text-sm">7.8%</td>
                            <td className="px-4 py-3 text-sm">16.0%</td>
                            <td className="px-4 py-3 text-sm text-green-600 font-medium">2x more effective in Australia</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm font-medium">TikTok</td>
                            <td className="px-4 py-3 text-sm">3.8%</td>
                            <td className="px-4 py-3 text-sm">2.0%</td>
                            <td className="px-4 py-3 text-sm">Small but growing in both markets</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">Retail Store</td>
                            <td className="px-4 py-3 text-sm">0%</td>
                            <td className="px-4 py-3 text-sm">1.0%</td>
                            <td className="px-4 py-3 text-sm">AU-only channel opportunity</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Australia Insights</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li><strong>Word of mouth is 2.4x stronger</strong> in Australia (24% vs 10%) - reflects exceptional brand loyalty and community advocacy</li>
                      <li><strong>Facebook is 2x more effective</strong> in Australia (16% vs 8%) - consider increasing Facebook ad spend in AU market</li>
                      <li><strong>Longer consideration cycles</strong> - 50% take 3+ months to buy (vs 32% in US) - email nurturing is critical</li>
                      <li><strong>Higher repeat rate</strong> - 49% vs 32% in US - Australian customers show exceptional loyalty</li>
                      <li><strong>"Supporting Australian Business"</strong> is a top 5 purchase motivator (346 mentions) - lean into local identity</li>
                      <li><strong>More balanced channel mix</strong> - Top 4 channels each contribute 16-26% vs US where Instagram dominates at 35%</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key United States Insights</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li><strong>Instagram dominates</strong> at 35% - 4.5x more effective than Facebook (7.8%)</li>
                      <li><strong>Faster conversion cycles</strong> - 36% convert within 1 week (vs 20% in AU)</li>
                      <li><strong>Google drives high-intent traffic</strong> - 66% of Google-discovered customers buy within 1 week</li>
                      <li><strong>"Supporting US Business"</strong> resonates but less than AU equivalent (184 vs 346 mentions)</li>
                      <li><strong>More room for referral growth</strong> - Word of mouth at 10% has significant upside potential</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Purchase Motivations (Both Markets)</h3>
                    <p className="mb-4">The top 3 purchase motivations are identical across both markets:</p>
                    <ol className="list-decimal pl-6 space-y-2 mb-6">
                      <li><strong>Quality of Products</strong> - US: 741 mentions | AU: 1,104 mentions</li>
                      <li><strong>Orthopaedic Support</strong> - US: 698 mentions | AU: 786 mentions</li>
                      <li><strong>Ratings & Reputation</strong> - US: 527 mentions | AU: 634 mentions</li>
                    </ol>
                    <p className="mb-4">This validates that <strong>quality and health benefits</strong> are universal value propositions that should remain central to marketing messaging in both markets.</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Geographic Distribution</h3>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-3">United States (Top 5 States)</h4>
                        <ol className="list-decimal pl-6 space-y-1">
                          <li>California - 19.5% (297 orders)</li>
                          <li>Texas - 9.8% (149 orders)</li>
                          <li>Florida - 7.4% (112 orders)</li>
                          <li>New York - 5.6% (85 orders)</li>
                          <li>Massachusetts - 3.6% (55 orders)</li>
                        </ol>
                        <p className="mt-3 text-sm text-gray-600">West Coast represents ~25% of US sales. Sun Belt states (TX, FL, AZ) represent 20%.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">Australia (Top 5 States/Territories)</h4>
                        <ol className="list-decimal pl-6 space-y-1">
                          <li>New South Wales - 32.5% (712 orders)</li>
                          <li>Victoria - 24.3% (532 orders)</li>
                          <li>Queensland - 19.0% (416 orders)</li>
                          <li>Western Australia - 9.5% (208 orders)</li>
                          <li>South Australia - 5.8% (126 orders)</li>
                        </ol>
                        <p className="mt-3 text-sm text-gray-600">NSW + Victoria = 57% of Australian sales. Some NZ orders included (Auckland, Canterbury).</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Time to Purchase Comparison</h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Time Period</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700 border-b">BBUS (US)</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-green-700 border-b">BBAU (AU)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Same day (&lt; 1 day)</td>
                            <td className="px-4 py-3 text-sm">18.4% (220)</td>
                            <td className="px-4 py-3 text-sm">8.3% (136)</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm">Within 1 week</td>
                            <td className="px-4 py-3 text-sm">16.7% (200)</td>
                            <td className="px-4 py-3 text-sm">11.3% (186)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">Within 1 month</td>
                            <td className="px-4 py-3 text-sm">14.2% (170)</td>
                            <td className="px-4 py-3 text-sm">13.5% (222)</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-4 py-3 text-sm">1-3 months</td>
                            <td className="px-4 py-3 text-sm">18.7% (224)</td>
                            <td className="px-4 py-3 text-sm">17.4% (285)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-3 text-sm">3-12 months</td>
                            <td className="px-4 py-3 text-sm">16.4% (196)</td>
                            <td className="px-4 py-3 text-sm">19.7% (323)</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">Over 12 months</td>
                            <td className="px-4 py-3 text-sm">15.5% (186)</td>
                            <td className="px-4 py-3 text-sm font-medium text-amber-600">30.1% (493)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mb-4"><strong>Key insight:</strong> Australian customers take significantly longer to convert. 30% wait over a year before purchasing (vs 15.5% in US). This suggests AU customers require longer nurture sequences and more touchpoints before converting.</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Strategic Recommendations</h3>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-3">For United States (BBUS)</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Double down on Instagram</strong> - it's your top performer at 35%</li>
                          <li>• <strong>Optimize Google Ads</strong> for fast conversion (66% buy within 1 week)</li>
                          <li>• <strong>Build a referral program</strong> - WOM is only 10% vs 24% in AU</li>
                          <li>• <strong>Expand TikTok presence</strong> - only 3.8% but growing</li>
                          <li>• <strong>Increase repeat customer AOV</strong> with cover bundles and accessories</li>
                          <li>• <strong>Target West Coast and Sun Belt</strong> states for growth</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-3">For Australia (BBAU)</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Formalize referral program</strong> - WOM is already 24%, incentivize it</li>
                          <li>• <strong>Increase Facebook ad spend</strong> - 2x more effective than in US</li>
                          <li>• <strong>Build long nurture sequences</strong> - 50% take 3+ months to buy</li>
                          <li>• <strong>Emphasize "Australian Business"</strong> - it resonates strongly (346 mentions)</li>
                          <li>• <strong>Explore retail partnerships</strong> - 1% already comes from stores</li>
                          <li>• <strong>Focus on NSW and Victoria</strong> - 57% of your market</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Conclusion</h3>
                    <p className="mb-4">
                      Both markets show strong product-market fit with Quality and Orthopaedic Support as universal drivers. However, the markets require different strategies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li><strong>US market</strong> = Paid social (Instagram) focused, faster conversion, more acquisition-heavy</li>
                      <li><strong>AU market</strong> = Community-driven (WOM), longer consideration, more retention-focused</li>
                    </ul>
                    <p>
                      Australia's exceptional repeat rate (49%) and word-of-mouth strength (24%) suggest the brand has achieved strong product-market fit and customer loyalty there. The US has more room to grow these metrics through intentional referral and retention programs.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
