import {
  Play,
  Pause,
  Volume2,
  Sparkles,
  Upload,
  X,
  Image as ImageIcon,
  Video,
  Music,
  Eye,
  Save,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function ReviewEdit() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);

  const mainImage = 'https://images.unsplash.com/photo-1760679674606-cd621fb5bfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600';

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setAdditionalImages([...additionalImages, ...newImages]);
    }
  };

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
            Review & Edit Content
          </h1>
          <p className="text-muted-foreground">
            Verify and refine AI-generated content before publishing
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setPreviewMode(!previewMode)}
            className="flex-1 lg:flex-initial"
          >
            <Eye className="w-4 h-4 mr-2" />
            {previewMode ? 'Edit Mode' : 'Preview'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Media Preview & Gallery */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Artwork Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Artwork Media</CardTitle>
              <CardDescription>Primary image and additional media files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-4">
                <ImageWithFallback
                  src={mainImage}
                  alt="Main artwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Primary Image
              </Badge>
            </CardContent>
          </Card>

          {/* Audio Narration Player */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-accent" />
                <CardTitle>Audio Narration</CardTitle>
              </div>
              <CardDescription>AI-generated audio guide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-12 w-12 rounded-full"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </Button>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Audio Guide</p>
                    <p className="text-xs text-muted-foreground">English • 1:23 duration</p>
                  </div>
                </div>

                {/* Audio Waveform Visual */}
                <div className="flex items-center gap-1 h-12">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-accent/30 rounded-full"
                      style={{
                        height: `${Math.random() * 100}%`,
                        minHeight: '20%',
                      }}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Custom
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Media Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Media</CardTitle>
              <CardDescription>Upload supporting images, videos, or audio</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="images" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="images">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Images
                  </TabsTrigger>
                  <TabsTrigger value="videos">
                    <Video className="w-4 h-4 mr-2" />
                    Videos
                  </TabsTrigger>
                  <TabsTrigger value="audio">
                    <Music className="w-4 h-4 mr-2" />
                    Audio
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="images" className="mt-4">
                  {/* Image Gallery */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {additionalImages.map((img, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-muted group">
                        <img src={img} alt={`Additional ${index}`} className="w-full h-full object-cover" />
                        <button
                          onClick={() => setAdditionalImages(additionalImages.filter((_, i) => i !== index))}
                          className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Upload Button */}
                  <label className="flex flex-col items-center justify-center h-24 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <Upload className="w-6 h-6 text-muted-foreground mb-1" />
                    <p className="text-xs text-muted-foreground">Upload Images</p>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                    />
                  </label>
                </TabsContent>

                <TabsContent value="videos" className="mt-4">
                  <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <Video className="w-8 h-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Upload Videos</p>
                    <p className="text-xs text-muted-foreground">MP4, MOV up to 100MB</p>
                    <input type="file" className="hidden" accept="video/*" />
                  </label>
                </TabsContent>

                <TabsContent value="audio" className="mt-4">
                  <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <Music className="w-8 h-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Upload Audio</p>
                    <p className="text-xs text-muted-foreground">MP3, WAV up to 50MB</p>
                    <input type="file" className="hidden" accept="audio/*" />
                  </label>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right: Editable Content Fields */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Content Details</CardTitle>
                  <CardDescription>Edit and refine the generated content</CardDescription>
                </div>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Generated
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Artwork Title */}
              <div>
                <Label htmlFor="title">Artwork Title</Label>
                <Input
                  id="title"
                  defaultValue="Ancient Temple Sculpture of Deity"
                  className="mt-1.5"
                />
              </div>

              {/* Historical Description */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label htmlFor="description">Historical Description</Label>
                  <Button variant="ghost" size="sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                </div>
                <Textarea
                  id="description"
                  rows={8}
                  defaultValue="This intricately carved stone sculpture depicts a traditional Indian deity, showcasing the exceptional craftsmanship of ancient artisans. The detailed jewelry and ornate headdress reflect the artistic traditions of medieval temple architecture.

The sculpture features elaborate ornamentation typical of South Indian temple art, with fine details in the deity's adornments and facial features. Such sculptures were integral to temple worship and represent the pinnacle of stone carving techniques developed over centuries.

This artifact provides valuable insights into the religious and artistic practices of the period, demonstrating the sophisticated sculptural traditions that flourished in ancient India."
                  className="mt-1.5 font-normal"
                />
              </div>

              <Separator />

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="sculpture">
                    <SelectTrigger id="category" className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sculpture">Sculpture</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="architecture">Architecture</SelectItem>
                      <SelectItem value="artifact">Artifact</SelectItem>
                      <SelectItem value="textile">Textile</SelectItem>
                      <SelectItem value="manuscript">Manuscript</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="era">Era/Period</Label>
                  <Select defaultValue="medieval">
                    <SelectTrigger id="era" className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ancient">Ancient (Before 600 CE)</SelectItem>
                      <SelectItem value="medieval">Medieval (600-1500 CE)</SelectItem>
                      <SelectItem value="mughal">Mughal (1526-1857 CE)</SelectItem>
                      <SelectItem value="colonial">Colonial (1757-1947 CE)</SelectItem>
                      <SelectItem value="modern">Modern (1947-Present)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dynasty">Dynasty/Region</Label>
                  <Input
                    id="dynasty"
                    placeholder="e.g., Chola, Vijayanagara"
                    defaultValue="Hoysala Dynasty"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language" className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi (हिंदी)</SelectItem>
                      <SelectItem value="kn">Kannada (ಕನ್ನಡ)</SelectItem>
                      <SelectItem value="ta">Tamil (தமிழ்)</SelectItem>
                      <SelectItem value="te">Telugu (తెలుగు)</SelectItem>
                      <SelectItem value="ml">Malayalam</SelectItem>
                      <SelectItem value="bn">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="Add tags separated by commas"
                  defaultValue="temple, sculpture, deity, Hoysala, stone carving"
                  className="mt-1.5"
                />
                <p className="text-xs text-muted-foreground mt-1.5">
                  Tags help visitors discover related content
                </p>
              </div>

              <Separator />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  <Save className="w-4 h-4 mr-2" />
                  Save as Draft
                </Button>
                <Button className="flex-1 bg-accent hover:bg-accent/90">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Publish Artwork
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
