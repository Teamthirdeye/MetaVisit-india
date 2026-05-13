import { Upload, FolderOpen, QrCode, BarChart3, Image as ImageIcon, Users, Scan, Volume2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const quickActions = [
    { id: 'upload', title: 'Upload Artwork', icon: Upload, description: 'Add new heritage content' },
    { id: 'collection', title: 'Collection', icon: FolderOpen, description: 'Manage your artworks' },
    { id: 'qr-code', title: 'Generate QR', icon: QrCode, description: 'Create visitor access' },
    { id: 'analytics', title: 'Analytics', icon: BarChart3, description: 'View insights' },
  ];

  const stats = [
    { title: 'Total Artworks', value: '127', icon: ImageIcon, color: 'text-[#B8825D]' },
    { title: 'Visitors', value: '2,843', icon: Users, color: 'text-[#D4A574]' },
    { title: 'QR Scans', value: '1,456', icon: Scan, color: 'text-[#E8B98F]' },
    { title: 'Audio Plays', value: '892', icon: Volume2, color: 'text-[#FF9933]' },
  ];

  const recentUploads = [
    {
      id: 1,
      title: 'Hampi Temple Ruins',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1632408011026-b7375a96ae8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      date: 'May 6, 2026',
    },
    {
      id: 2,
      title: 'Temple Stone Carving',
      category: 'Sculpture',
      image: 'https://images.unsplash.com/photo-1767533427365-d07b2b104f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      date: 'May 5, 2026',
    },
    {
      id: 3,
      title: 'Ancient Sculpture',
      category: 'Artifact',
      image: 'https://images.unsplash.com/photo-1760679674606-cd621fb5bfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      date: 'May 4, 2026',
    },
  ];

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
          Welcome to MetaVisitAR
        </h1>
        <p className="text-muted-foreground">
          Manage your museum's heritage content and visitor experiences
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <p className="text-2xl lg:text-3xl font-semibold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate(action.id)}
              >
                <CardContent className="p-6">
                  <Icon className="w-10 h-10 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Uploads */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Recent Uploads</h2>
          <Button variant="outline" onClick={() => onNavigate('collection')}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentUploads.map((upload) => (
            <Card key={upload.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <ImageWithFallback
                  src={upload.image}
                  alt={upload.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-base">{upload.title}</CardTitle>
                <CardDescription>
                  <span className="inline-block px-2 py-1 text-xs bg-accent/20 text-accent rounded mr-2">
                    {upload.category}
                  </span>
                  {upload.date}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
