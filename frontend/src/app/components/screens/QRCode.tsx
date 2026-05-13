import { Download, Printer, Share2, Smartphone, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { QRCodeSVG } from 'qrcode.react';

export function QRCodeScreen() {
  const museumUrl = "https://museum.realmeta.ca/demo"; // Replace with actual dynamic URL

  return (
    <div className="p-4 lg:p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">QR Code</h1>
        <p className="text-muted-foreground">Generate visitor access code for your museum</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* QR Code Display */}
        <Card>
          <CardHeader>
            <CardTitle>Museum QR Code</CardTitle>
            <CardDescription>Scan to access the AR experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm aspect-square bg-white p-8 rounded-lg border-2 border-border mb-6 flex items-center justify-center">
                <QRCodeSVG
                  value={museumUrl}
                  size={256}
                  level="H"
                  includeMargin={false}
                  imageSettings={{
                    src: "/logo.svg",
                    x: undefined,
                    y: undefined,
                    height: 60,
                    width: 60,
                    excavate: true,
                  }}
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-wrap gap-3 justify-center w-full">
                <Button className="flex-1 min-w-[140px]">
                  <Download className="w-4 h-4 mr-2" />
                  Download PNG
                </Button>
                <Button variant="outline" className="flex-1 min-w-[140px]">
                  <Download className="w-4 h-4 mr-2" />
                  Download SVG
                </Button>
              </div>

              <div className="flex gap-3 mt-3 w-full">
                <Button variant="outline" className="flex-1">
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information & Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Museum Information</CardTitle>
              <CardDescription>Details embedded in the QR code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Museum Name</p>
                <p className="text-base text-foreground">MetaVisitAR Heritage Museum</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Location</p>
                <p className="text-base text-foreground">Mysuru, Karnataka, India</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Collection Size</p>
                <p className="text-base text-foreground">127 Artworks</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">QR Code URL</p>
                <p className="text-base text-foreground font-mono text-sm">
                  https://metavisitar.in/m/mvh-001
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <CardTitle>How to Use</CardTitle>
                  <CardDescription className="mt-2">
                    Place this QR code at your museum entrance or near exhibits. Visitors can scan it with their smartphones to:
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Access AR-enhanced views of artifacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Listen to audio narrations and guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>View detailed information about exhibits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Navigate the museum with digital maps</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <CardTitle>Mobile Preview</CardTitle>
                  <CardDescription>
                    How visitors will see the experience
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Visitors scan the QR code → Opens mobile web experience →
                  Browse AR content instantly
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
