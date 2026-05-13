import { TrendingUp, Users, Scan, Volume2, Eye, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Analytics() {
  const visitorData = [
    { month: 'Jan', visitors: 420 },
    { month: 'Feb', visitors: 580 },
    { month: 'Mar', visitors: 720 },
    { month: 'Apr', visitors: 890 },
    { month: 'May', visitors: 650 },
  ];

  const qrScanData = [
    { day: 'Mon', scans: 45 },
    { day: 'Tue', scans: 52 },
    { day: 'Wed', scans: 38 },
    { day: 'Thu', scans: 67 },
    { day: 'Fri', scans: 73 },
    { day: 'Sat', scans: 98 },
    { day: 'Sun', scans: 85 },
  ];

  const topArtworks = [
    {
      id: 1,
      title: 'Hampi Temple Ruins',
      views: 1243,
      image: 'https://images.unsplash.com/photo-1632408011026-b7375a96ae8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    },
    {
      id: 2,
      title: 'Temple Stone Carving',
      views: 987,
      image: 'https://images.unsplash.com/photo-1767533427365-d07b2b104f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    },
    {
      id: 3,
      title: 'Ancient Sculpture',
      views: 856,
      image: 'https://images.unsplash.com/photo-1760679674606-cd621fb5bfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    },
  ];

  const metrics = [
    { title: 'Total Visitors', value: '2,843', change: '+12%', icon: Users, color: 'text-[#B8825D]' },
    { title: 'QR Scans', value: '1,456', change: '+8%', icon: Scan, color: 'text-[#D4A574]' },
    { title: 'Audio Plays', value: '892', change: '+15%', icon: Volume2, color: 'text-[#E8B98F]' },
    { title: 'Avg. Time', value: '12m', change: '+5%', icon: Calendar, color: 'text-[#FF9933]' },
  ];

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">Track visitor engagement and content performance</p>
        </div>
        <Select defaultValue="30days">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                    {metric.change}
                  </span>
                </div>
                <p className="text-2xl lg:text-3xl font-semibold text-foreground mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Visitor Trends</CardTitle>
            <CardDescription>Monthly visitor statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8DFD4" />
                <XAxis dataKey="month" stroke="#6B6B6B" />
                <YAxis stroke="#6B6B6B" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E8DFD4',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="#B8825D"
                  strokeWidth={2}
                  dot={{ fill: '#B8825D', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>QR Code Scans</CardTitle>
            <CardDescription>Weekly scan activity</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={qrScanData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8DFD4" />
                <XAxis dataKey="day" stroke="#6B6B6B" />
                <YAxis stroke="#6B6B6B" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E8DFD4',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="scans" fill="#D4A574" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Artworks */}
      <Card>
        <CardHeader>
          <CardTitle>Most Viewed Artworks</CardTitle>
          <CardDescription>Top performing content this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{artwork.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {artwork.views.toLocaleString()} views
                  </p>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
