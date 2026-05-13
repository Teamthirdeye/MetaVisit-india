import { Upload, Image as ImageIcon, Sparkles, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';

interface UploadArtworkProps {
  onNavigate?: (page: string) => void;
}

export function UploadArtwork({ onNavigate }: UploadArtworkProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [aiDescriptionEnabled, setAiDescriptionEnabled] = useState(true);
  const [audioNarrationEnabled, setAudioNarrationEnabled] = useState(true);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 lg:p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">Upload Artwork</h1>
        <p className="text-muted-foreground">Add new heritage content to your collection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Zone */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Artwork Image</CardTitle>
              <CardDescription>Upload a high-quality image of the artifact</CardDescription>
            </CardHeader>
            <CardContent>
              {!imagePreview ? (
                <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload className="w-12 h-12 text-muted-foreground mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Click to upload</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => setImagePreview(null)}
                  >
                    Change Image
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* AI Features */}
          <Card>
            <CardHeader>
              <CardTitle>AI Assistance</CardTitle>
              <CardDescription>Enhance your content with AI-powered features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium">AI Description</p>
                    <p className="text-xs text-muted-foreground">Generate description from image</p>
                  </div>
                </div>
                <Switch
                  checked={aiDescriptionEnabled}
                  onCheckedChange={setAiDescriptionEnabled}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium">Audio Narration</p>
                    <p className="text-xs text-muted-foreground">Generate audio guide</p>
                  </div>
                </div>
                <Switch
                  checked={audioNarrationEnabled}
                  onCheckedChange={setAudioNarrationEnabled}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metadata Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Artwork Details</CardTitle>
              <CardDescription>Provide information about the artifact</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Artwork Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Temple Stone Carving"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the artwork, its historical significance, and cultural context..."
                  rows={5}
                  className="mt-1.5"
                />
                {aiDescriptionEnabled && (
                  <Button variant="outline" size="sm" className="mt-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate with AI
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category" className="mt-1.5">
                      <SelectValue placeholder="Select category" />
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
                  <Select>
                    <SelectTrigger id="era" className="mt-1.5">
                      <SelectValue placeholder="Select era" />
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
              </div>

              <div>
                <Label htmlFor="language">Language</Label>
                <Select>
                  <SelectTrigger id="language" className="mt-1.5">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="kn">Kannada</SelectItem>
                    <SelectItem value="ta">Tamil</SelectItem>
                    <SelectItem value="te">Telugu</SelectItem>
                    <SelectItem value="ml">Malayalam</SelectItem>
                    <SelectItem value="bn">Bengali</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1">
                  Save as Draft
                </Button>
                <Button
                  className="flex-1 bg-accent hover:bg-accent/90"
                  onClick={() => onNavigate?.('ai-processing')}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Publish
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
