import { Search, Filter, Edit, Trash2, FolderOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Collection() {
  const artworks = [
    {
      id: 1,
      title: 'Hampi Temple Ruins',
      category: 'Architecture',
      era: 'Medieval',
      image: 'https://images.unsplash.com/photo-1632408011026-b7375a96ae8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      views: 342,
    },
    {
      id: 2,
      title: 'Temple Stone Carving',
      category: 'Sculpture',
      era: 'Ancient',
      image: 'https://images.unsplash.com/photo-1767533427365-d07b2b104f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      views: 287,
    },
    {
      id: 3,
      title: 'Ancient Sculpture',
      category: 'Artifact',
      era: 'Ancient',
      image: 'https://images.unsplash.com/photo-1760679674606-cd621fb5bfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      views: 198,
    },
    {
      id: 4,
      title: 'Heritage Temple',
      category: 'Architecture',
      era: 'Medieval',
      image: 'https://images.unsplash.com/photo-1667115788174-adef60aee006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      views: 421,
    },
    {
      id: 5,
      title: 'Temple Pavilion',
      category: 'Architecture',
      era: 'Medieval',
      image: 'https://images.unsplash.com/photo-1759990251928-6993294ad9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      views: 156,
    },
    {
      id: 6,
      title: 'Elephant Carving',
      category: 'Sculpture',
      era: 'Ancient',
      image: 'https://images.unsplash.com/photo-1709739326642-ea018ccbc1eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      views: 234,
    },
  ];

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">Collection</h1>
        <p className="text-muted-foreground">Manage and organize your heritage artworks</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search artworks..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[140px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="sculpture">Sculpture</SelectItem>
                <SelectItem value="architecture">Architecture</SelectItem>
                <SelectItem value="artifact">Artifact</SelectItem>
                <SelectItem value="painting">Painting</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Era" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Eras</SelectItem>
                <SelectItem value="ancient">Ancient</SelectItem>
                <SelectItem value="medieval">Medieval</SelectItem>
                <SelectItem value="mughal">Mughal</SelectItem>
                <SelectItem value="colonial">Colonial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Artworks Grid */}
      {artworks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {artworks.map((artwork) => (
            <Card key={artwork.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-base">{artwork.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-block px-2 py-1 text-xs bg-accent/20 text-accent rounded">
                      {artwork.category}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                      {artwork.era}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{artwork.views} views</p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="py-16">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <FolderOpen className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg text-foreground mb-2">No artworks yet</h3>
            <p className="text-muted-foreground mb-4">
              Start building your collection by uploading your first artwork
            </p>
            <Button className="bg-accent hover:bg-accent/90">Upload Artwork</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
